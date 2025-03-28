import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { To, useNavigate } from "react-router-dom";

interface NavButtonProps {
  navigateTo: To;
  children: ReactNode;
}

function NavButton({ navigateTo, children }: NavButtonProps) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <motion.button
      onClick={() => navigate(navigateTo)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...buttonStyle, background: hover ? "#4CAF50" : "#008CBA" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  border: "none",
  color: "white",
  transition: "background 0.3s ease-in-out",
  borderRadius: "5px",
};

export default NavButton;
