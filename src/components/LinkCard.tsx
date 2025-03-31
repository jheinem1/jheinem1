import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function LinkCard({
  icon,
  label,
  link,
  displayLink,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  link: string;
  displayLink: string;
  children?: React.ReactNode;
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
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <span
        style={{ marginBottom: "0.5rem", color: "#fff", fontWeight: "bold" }}
      >
        {icon || <FaGithub />} {label}
      </span>
      {children && (
        <div style={{ color: "#fff", fontSize: "0.9rem", textAlign: "center" }}>
          {children}
        </div>
      )}
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
