import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up" 
}: AnimatedSectionProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 60, opacity: 0 };
      case "down":
        return { y: -60, opacity: 0 };
      case "left":
        return { x: -60, opacity: 0 };
      case "right":
        return { x: 60, opacity: 0 };
      default:
        return { y: 60, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;