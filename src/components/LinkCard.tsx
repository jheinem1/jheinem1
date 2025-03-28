import { useState } from "react";

export default function LinkCard({
  icon,
  label,
  link,
  displayLink,
}: {
  icon: React.ReactNode;
  label: string;
  link: string;
  displayLink: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#333",
        borderRadius: "20px",
        padding: "1rem",
        margin: "1rem 0",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.3s ease",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <span style={{ marginRight: "0.5rem", color: "#fff" }}>{icon}</span>
      <span style={{ color: "#fff" }}>{label}</span>
      <div
        style={{
          maxHeight: hovered ? "20px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease, margin-top 0.3s ease",
          marginTop: hovered ? "0.5rem" : "0",
          color: "#fff",
          fontSize: "0.8rem",
        }}
      >
        {displayLink}
      </div>
    </div>
  );
}
