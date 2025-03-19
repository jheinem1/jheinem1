import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedContainerProps {
  children: ReactNode;
}

function AnimatedContainer({ children }: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      style={{ textAlign: "center", padding: "50px" }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedContainer;
