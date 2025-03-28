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

  return (
    <div>
      <h2 onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
        {title}
      </h2>
      {open && <div>{children}</div>}
    </div>
  );
}
