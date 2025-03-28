import { useState } from "react";

interface ExpandableTextBlockProps {
  title: string;
  children: React.ReactNode;
}

export default function ExpandableTextBlock({
  title,
  children,
}: ExpandableTextBlockProps) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#333",
        borderRadius: "20px",
        padding: "1rem",
        margin: "1rem 0",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setOpen(!open)}
    >
      <h2 style={{ cursor: "pointer", color: "#fff", margin: 0 }}>{title}</h2>
      <div
        style={{
          maxHeight: open ? "1000px" : "0",
          opacity: open ? 1 : 0,
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
      >
        <div style={{ color: "#fff", marginTop: "0.5rem" }}>{children}</div>
      </div>
    </div>
  );
}
