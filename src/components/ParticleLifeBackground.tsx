import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  species: number;
};

const SPECIES = [
  {
    color: "rgba(210, 235, 219, 0.88)",
    glow: "rgba(147, 202, 169, 0.2)",
    radius: 2.15,
  },
  {
    color: "rgba(154, 213, 216, 0.86)",
    glow: "rgba(87, 174, 181, 0.2)",
    radius: 2.35,
  },
  {
    color: "rgba(202, 177, 224, 0.84)",
    glow: "rgba(157, 115, 194, 0.2)",
    radius: 2,
  },
  {
    color: "rgba(218, 197, 153, 0.82)",
    glow: "rgba(183, 144, 77, 0.18)",
    radius: 1.9,
  },
] as const;

// A directed attraction matrix is the defining rule set of Particle Life.
// Rows describe how one species responds to each species in the columns.
const ATTRACTIONS = [
  [0.62, -0.3, 0.2, -0.14],
  [0.26, 0.48, -0.44, 0.24],
  [-0.22, 0.36, 0.54, -0.2],
  [0.16, -0.38, 0.32, 0.42],
] as const;

const MIN_PARTICLES = 240;
const MAX_PARTICLES = 460;
const AREA_PER_PARTICLE = 3100;
const REPULSION_RANGE = 0.23;
const FORCE_SCALE = 54;
const VELOCITY_RETENTION = 0.87;
const MAX_SPEED = 72;
const MAX_DEVICE_PIXEL_RATIO = 1.75;
const INITIAL_SETTLING_STEPS = 90;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function createRandom(seed: number) {
  let state = seed >>> 0;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function getParticleCount(width: number, height: number) {
  return clamp(
    Math.round((width * height) / AREA_PER_PARTICLE),
    MIN_PARTICLES,
    MAX_PARTICLES,
  );
}

function getInteractionRadius(width: number, height: number) {
  return clamp(Math.sqrt(width * height) * 0.1, 76, 112);
}

function makeParticle(
  width: number,
  height: number,
  index: number,
  random: () => number,
): Particle {
  return {
    x: random() * width,
    y: random() * height,
    vx: (random() - 0.5) * 8,
    vy: (random() - 0.5) * 8,
    species: index % SPECIES.length,
  };
}

function resizePopulation(
  particles: Particle[],
  previousWidth: number,
  previousHeight: number,
  width: number,
  height: number,
  random: () => number,
) {
  const targetCount = getParticleCount(width, height);

  if (previousWidth > 0 && previousHeight > 0) {
    const widthRatio = width / previousWidth;
    const heightRatio = height / previousHeight;

    for (const particle of particles) {
      particle.x = clamp(particle.x * widthRatio, 0, width);
      particle.y = clamp(particle.y * heightRatio, 0, height);
    }
  }

  if (particles.length > targetCount) {
    particles.length = targetCount;
  }

  while (particles.length < targetCount) {
    particles.push(
      makeParticle(width, height, particles.length, random),
    );
  }
}

function particleForce(distance: number, attraction: number) {
  if (distance < REPULSION_RANGE) {
    return distance / REPULSION_RANGE - 1;
  }

  return (
    attraction *
    (1 -
      Math.abs(2 * distance - 1 - REPULSION_RANGE) /
        (1 - REPULSION_RANGE))
  );
}

function ParticleLifeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      return;
    }

    const random = createRandom(0x51f15e);
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let interactionRadius = 100;
    let animationFrame = 0;
    let lastFrameTime = 0;
    let isAnimating = false;

    const resize = () => {
      const previousWidth = width;
      const previousHeight = height;
      width = window.innerWidth;
      height = window.innerHeight;
      interactionRadius = getInteractionRadius(width, height);

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        MAX_DEVICE_PIXEL_RATIO,
      );
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      resizePopulation(
        particles,
        previousWidth,
        previousHeight,
        width,
        height,
        random,
      );
    };

    const step = (deltaTime: number) => {
      const columns = Math.max(1, Math.floor(width / interactionRadius));
      const rows = Math.max(1, Math.floor(height / interactionRadius));
      const cellWidth = width / columns;
      const cellHeight = height / rows;
      const grid = new Map<number, number[]>();

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const column = Math.min(columns - 1, Math.floor(particle.x / cellWidth));
        const row = Math.min(rows - 1, Math.floor(particle.y / cellHeight));
        const key = row * columns + column;
        const bucket = grid.get(key);

        if (bucket) {
          bucket.push(index);
        } else {
          grid.set(key, [index]);
        }
      }

      const nextVelocities = new Array<{ vx: number; vy: number }>(
        particles.length,
      );
      const maxDistanceSquared = interactionRadius * interactionRadius;
      const retention = Math.pow(VELOCITY_RETENTION, deltaTime * 60);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const column = Math.min(columns - 1, Math.floor(particle.x / cellWidth));
        const row = Math.min(rows - 1, Math.floor(particle.y / cellHeight));
        let accelerationX = 0;
        let accelerationY = 0;

        for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
          const neighborRow = (row + rowOffset + rows) % rows;

          for (
            let columnOffset = -1;
            columnOffset <= 1;
            columnOffset += 1
          ) {
            const neighborColumn =
              (column + columnOffset + columns) % columns;
            const bucket = grid.get(neighborRow * columns + neighborColumn);

            if (!bucket) {
              continue;
            }

            for (const otherIndex of bucket) {
              if (otherIndex === index) {
                continue;
              }

              const other = particles[otherIndex];
              let dx = other.x - particle.x;
              let dy = other.y - particle.y;

              if (dx > width / 2) dx -= width;
              if (dx < -width / 2) dx += width;
              if (dy > height / 2) dy -= height;
              if (dy < -height / 2) dy += height;

              const distanceSquared = dx * dx + dy * dy;

              if (
                distanceSquared === 0 ||
                distanceSquared >= maxDistanceSquared
              ) {
                continue;
              }

              const distance = Math.sqrt(distanceSquared);
              const normalizedDistance = distance / interactionRadius;
              const force = particleForce(
                normalizedDistance,
                ATTRACTIONS[particle.species][other.species],
              );

              accelerationX += (dx / distance) * force * FORCE_SCALE;
              accelerationY += (dy / distance) * force * FORCE_SCALE;
            }
          }
        }

        let vx = particle.vx * retention + accelerationX * deltaTime;
        let vy = particle.vy * retention + accelerationY * deltaTime;
        const speed = Math.hypot(vx, vy);

        if (speed > MAX_SPEED) {
          const speedScale = MAX_SPEED / speed;
          vx *= speedScale;
          vy *= speedScale;
        }

        nextVelocities[index] = { vx, vy };
      }

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const velocity = nextVelocities[index];
        particle.vx = velocity.vx;
        particle.vy = velocity.vy;
        particle.x = (particle.x + particle.vx * deltaTime + width) % width;
        particle.y = (particle.y + particle.vy * deltaTime + height) % height;
      }
    };

    const drawParticle = (particle: Particle, x: number, y: number) => {
      const species = SPECIES[particle.species];
      const speed = Math.hypot(particle.vx, particle.vy);
      const radius = species.radius + Math.min(speed / MAX_SPEED, 1) * 0.45;

      context.fillStyle = species.glow;
      context.beginPath();
      context.arc(x, y, radius * 4.2, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = species.color;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = "lighter";

      for (const particle of particles) {
        drawParticle(particle, particle.x, particle.y);

        const speciesRadius = SPECIES[particle.species].radius * 4.2;
        const crossesLeft = particle.x < speciesRadius;
        const crossesRight = particle.x > width - speciesRadius;
        const crossesTop = particle.y < speciesRadius;
        const crossesBottom = particle.y > height - speciesRadius;

        if (crossesLeft) drawParticle(particle, particle.x + width, particle.y);
        if (crossesRight) drawParticle(particle, particle.x - width, particle.y);
        if (crossesTop) drawParticle(particle, particle.x, particle.y + height);
        if (crossesBottom) drawParticle(particle, particle.x, particle.y - height);
      }

      context.restore();
    };

    const tick = (now: number) => {
      if (!isAnimating) {
        return;
      }

      const deltaTime = lastFrameTime
        ? clamp((now - lastFrameTime) / 1000, 0, 1 / 30)
        : 1 / 60;
      lastFrameTime = now;
      step(deltaTime);
      draw();
      animationFrame = window.requestAnimationFrame(tick);
    };

    const syncAnimation = () => {
      const shouldAnimate =
        !motionPreference.matches && document.visibilityState === "visible";

      if (!shouldAnimate) {
        isAnimating = false;
        window.cancelAnimationFrame(animationFrame);
        draw();
        return;
      }

      if (!isAnimating) {
        isAnimating = true;
        lastFrameTime = 0;
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    resize();

    for (let stepIndex = 0; stepIndex < INITIAL_SETTLING_STEPS; stepIndex += 1) {
      step(1 / 60);
    }

    draw();
    syncAnimation();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", syncAnimation);
    motionPreference.addEventListener("change", syncAnimation);

    return () => {
      isAnimating = false;
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", syncAnimation);
      motionPreference.removeEventListener("change", syncAnimation);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="particle-life-background" aria-hidden="true">
      <canvas ref={canvasRef} className="particle-life-canvas" />
      <div className="particle-life-veil" />
      <div className="particle-life-grain" />
    </div>
  );
}

export default ParticleLifeBackground;
