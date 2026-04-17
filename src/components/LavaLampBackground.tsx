import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: number;
  seed: number;
};

type Cluster = {
  type: number;
  members: number[];
  cx: number;
  cy: number;
  radius: number;
};

const CELL_TYPES = [
  {
    membrane: "rgba(228, 244, 236, 0.32)",
    body: "rgba(214, 229, 222, 0.44)",
    nucleus: "rgba(245, 252, 248, 0.86)",
    halo: "rgba(203, 224, 214, 0.12)",
    organelle: "rgba(194, 233, 207, 0.46)",
    radius: 11,
    tail: true,
  },
  {
    membrane: "rgba(184, 223, 224, 0.26)",
    body: "rgba(136, 181, 183, 0.36)",
    nucleus: "rgba(205, 239, 240, 0.8)",
    halo: "rgba(108, 156, 160, 0.12)",
    organelle: "rgba(111, 196, 201, 0.36)",
    radius: 14,
    tail: false,
  },
  {
    membrane: "rgba(220, 205, 238, 0.24)",
    body: "rgba(190, 171, 213, 0.3)",
    nucleus: "rgba(226, 217, 240, 0.76)",
    halo: "rgba(175, 156, 198, 0.1)",
    organelle: "rgba(213, 182, 229, 0.34)",
    radius: 9,
    tail: true,
  },
];

const RULES = [
  [0.48, -0.16, 0.18],
  [0.22, 0.4, -0.2],
  [0.16, 0.2, 0.42],
];

const PARTICLES_PER_TYPE = 18;
const INTERACTION_RADIUS = 220;
const WALL_REPEL = 140;
const VISCOSITY = 0.86;
const SPEED = 0.13;
const PERSONAL_SPACE = 34;
const PERSONAL_SPACE_SQUARED = PERSONAL_SPACE * PERSONAL_SPACE;
const BROWNIAN_FORCE = 0.013;
const CLUSTER_LINK_DISTANCE = 58;
const CLUSTER_LINK_DISTANCE_SQUARED = CLUSTER_LINK_DISTANCE * CLUSTER_LINK_DISTANCE;
const MIN_CLUSTER_SIZE = 4;
const MAX_DEVICE_PIXEL_RATIO = 2;

function createParticles(width: number, height: number) {
  const particles: Particle[] = [];
  const clusterCenters = [
    { x: width * 0.26, y: height * 0.3 },
    { x: width * 0.68, y: height * 0.38 },
    { x: width * 0.48, y: height * 0.72 },
  ];

  for (let type = 0; type < CELL_TYPES.length; type += 1) {
    for (let count = 0; count < PARTICLES_PER_TYPE; count += 1) {
      const center = clusterCenters[(type + count) % clusterCenters.length];
      const angle = Math.random() * Math.PI * 2;
      const radius = 25 + Math.random() * 95;
      particles.push({
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        type,
        seed: Math.random(),
      });
    }
  }

  return particles;
}

function LavaLampBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame = 0;
    let isAnimating = false;
    let particles = createParticles(width, height);
    let clusters: Cluster[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = createParticles(width, height);
    };

    const applyRules = () => {
      const maxDistanceSquared = INTERACTION_RADIUS * INTERACTION_RADIUS;

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        let fx = 0;
        let fy = 0;

        for (let j = 0; j < particles.length; j += 1) {
          if (i === j) {
            continue;
          }

          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared === 0 || distanceSquared > maxDistanceSquared) {
            continue;
          }

          const distance = Math.sqrt(distanceSquared);
          const rule = RULES[particle.type][other.type];
          const normalized = 1 - distance / INTERACTION_RADIUS;
          const force = (rule * normalized) / distance;

          fx += force * dx;
          fy += force * dy;

          if (distanceSquared < PERSONAL_SPACE_SQUARED) {
            const separation = (1 - distance / PERSONAL_SPACE) * 0.22;
            fx += separation * (dx / distance);
            fy += separation * (dy / distance);
          }
        }

        fx += (Math.random() - 0.5) * BROWNIAN_FORCE;
        fy += (Math.random() - 0.5) * BROWNIAN_FORCE;

        if (particle.x < WALL_REPEL) {
          fx += (WALL_REPEL - particle.x) * 0.003;
        }
        if (particle.x > width - WALL_REPEL) {
          fx += (width - WALL_REPEL - particle.x) * 0.003;
        }
        if (particle.y < WALL_REPEL) {
          fy += (WALL_REPEL - particle.y) * 0.003;
        }
        if (particle.y > height - WALL_REPEL) {
          fy += (height - WALL_REPEL - particle.y) * 0.003;
        }

        particle.vx = particle.vx * VISCOSITY + fx * SPEED;
        particle.vy = particle.vy * VISCOSITY + fy * SPEED;
      }

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) {
          particle.x = -particle.x;
          particle.vx *= -0.65;
        } else if (particle.x > width) {
          particle.x = 2 * width - particle.x;
          particle.vx *= -0.65;
        }

        if (particle.y < 0) {
          particle.y = -particle.y;
          particle.vy *= -0.65;
        } else if (particle.y > height) {
          particle.y = 2 * height - particle.y;
          particle.vy *= -0.65;
        }
      }
    };

    const buildClusters = () => {
      const visited = new Array(particles.length).fill(false);
      const nextClusters: Cluster[] = [];

      for (let index = 0; index < particles.length; index += 1) {
        if (visited[index]) {
          continue;
        }

        visited[index] = true;
        const seed = particles[index];
        const queue = [index];
        const members = [index];

        while (queue.length > 0) {
          const currentIndex = queue.pop()!;
          const current = particles[currentIndex];

          for (let otherIndex = 0; otherIndex < particles.length; otherIndex += 1) {
            if (visited[otherIndex]) {
              continue;
            }

            const other = particles[otherIndex];
            if (other.type !== seed.type) {
              continue;
            }

            const dx = current.x - other.x;
            const dy = current.y - other.y;
            const distanceSquared = dx * dx + dy * dy;

            if (distanceSquared > CLUSTER_LINK_DISTANCE_SQUARED) {
              continue;
            }

            visited[otherIndex] = true;
            queue.push(otherIndex);
            members.push(otherIndex);
          }
        }

        if (members.length < MIN_CLUSTER_SIZE) {
          continue;
        }

        let cx = 0;
        let cy = 0;

        for (const memberIndex of members) {
          cx += particles[memberIndex].x;
          cy += particles[memberIndex].y;
        }

        cx /= members.length;
        cy /= members.length;

        let radius = 0;
        for (const memberIndex of members) {
          const particle = particles[memberIndex];
          const dx = particle.x - cx;
          const dy = particle.y - cy;
          radius = Math.max(radius, Math.hypot(dx, dy));
        }

        nextClusters.push({
          type: seed.type,
          members,
          cx,
          cy,
          radius: radius + CELL_TYPES[seed.type].radius * 1.9,
        });
      }

      clusters = nextClusters;
    };

    const drawCluster = (cluster: Cluster) => {
      const cell = CELL_TYPES[cluster.type];

      context.save();
      context.translate(cluster.cx, cluster.cy);

      context.fillStyle = cell.halo;
      context.beginPath();
      context.arc(0, 0, cluster.radius * 1.35, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = cell.membrane;
      context.beginPath();
      context.ellipse(
        0,
        0,
        cluster.radius * 1.06,
        cluster.radius * (0.82 + cluster.members.length * 0.006),
        0,
        0,
        Math.PI * 2,
      );
      context.fill();

      context.fillStyle = cell.body;
      context.beginPath();
      context.ellipse(0, 0, cluster.radius, cluster.radius * 0.76, 0, 0, Math.PI * 2);
      context.fill();

      context.strokeStyle = "rgba(255, 255, 255, 0.08)";
      context.lineWidth = 1;
      context.beginPath();
      context.ellipse(
        cluster.radius * 0.08,
        -cluster.radius * 0.04,
        cluster.radius * 0.78,
        cluster.radius * 0.52,
        0,
        0.15 * Math.PI,
        1.25 * Math.PI,
      );
      context.stroke();

      context.fillStyle = cell.nucleus;
      context.beginPath();
      context.arc(cluster.radius * 0.12, -cluster.radius * 0.08, cluster.radius * 0.22, 0, Math.PI * 2);
      context.fill();

      context.restore();
    };

    const drawParticle = (particle: Particle, now: number) => {
      const cell = CELL_TYPES[particle.type];
      const speed = Math.hypot(particle.vx, particle.vy);
      const stretchX = 1 + Math.min(speed * 0.34, 0.34);
      const stretchY = 1 - Math.min(speed * 0.14, 0.16);
      const angle = Math.atan2(particle.vy, particle.vx);
      const pulse = 0.94 + Math.sin(now * 0.0012 + particle.seed * 10) * 0.08;

      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(angle);
      context.scale(stretchX * pulse, stretchY / pulse);

      context.fillStyle = cell.halo;
      context.beginPath();
      context.arc(0, 0, cell.radius * 2.5, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = cell.membrane;
      context.beginPath();
      context.ellipse(0, 0, cell.radius * 1.16, cell.radius * 0.96, 0, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = cell.body;
      context.beginPath();
      context.ellipse(0, 0, cell.radius, cell.radius * 0.82, 0, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = cell.nucleus;
      context.beginPath();
      context.ellipse(
        cell.radius * 0.2,
        -cell.radius * 0.08,
        cell.radius * 0.34,
        cell.radius * 0.28,
        0,
        0,
        Math.PI * 2,
      );
      context.fill();

      context.fillStyle = cell.organelle;
      context.beginPath();
      context.arc(-cell.radius * 0.24, cell.radius * 0.18, cell.radius * 0.16, 0, Math.PI * 2);
      context.arc(cell.radius * 0.34, cell.radius * 0.24, cell.radius * 0.11, 0, Math.PI * 2);
      context.fill();

      context.strokeStyle = "rgba(255, 255, 255, 0.12)";
      context.lineWidth = 1;
      context.beginPath();
      context.ellipse(0, 0, cell.radius * 0.9, cell.radius * 0.72, 0, 0.25 * Math.PI, 1.2 * Math.PI);
      context.stroke();

      if (cell.tail) {
        context.strokeStyle = "rgba(226, 239, 236, 0.1)";
        context.beginPath();
        context.moveTo(-cell.radius * 0.9, cell.radius * 0.1);
        context.quadraticCurveTo(
          -cell.radius * 1.45,
          cell.radius * (0.4 + particle.seed * 0.2),
          -cell.radius * 2.1,
          cell.radius * (-0.18 + particle.seed * 0.35),
        );
        context.stroke();
      }

      context.restore();
    };

    const draw = (now: number) => {
      context.clearRect(0, 0, width, height);

      context.fillStyle = "rgba(10, 14, 18, 0.18)";
      context.fillRect(0, 0, width, height);

      buildClusters();

      for (const cluster of clusters) {
        drawCluster(cluster);
      }

      for (const particle of particles) {
        drawParticle(particle, now);
      }
    };

    const tick = (now: number) => {
      if (!mediaQuery.matches) {
        applyRules();
      }

      draw(now);

      if (!mediaQuery.matches) {
        animationFrame = window.requestAnimationFrame(tick);
      } else {
        isAnimating = false;
      }
    };

    const syncMotionPreference = () => {
      if (mediaQuery.matches) {
        if (isAnimating) {
          window.cancelAnimationFrame(animationFrame);
          isAnimating = false;
        }
        draw(performance.now());
        return;
      }

      if (!isAnimating) {
        isAnimating = true;
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    resize();
    syncMotionPreference();

    window.addEventListener("resize", resize);
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      window.removeEventListener("resize", resize);
      mediaQuery.removeEventListener("change", syncMotionPreference);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="lava-lamp-background" aria-hidden="true">
      <canvas ref={canvasRef} className="particle-life-canvas" />
      <div className="particle-life-vignette" />
      <div className="particle-life-grain" />
    </div>
  );
}

export default LavaLampBackground;
