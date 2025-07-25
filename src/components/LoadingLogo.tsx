import { motion } from "framer-motion";

interface LoadingLogoProps {
  size?: "sm" | "md" | "lg";
}

const LoadingLogo = ({ size = "md" }: LoadingLogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-16 w-16", 
    lg: "h-24 w-24"
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          },
          scale: {
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className={`${sizeClasses[size]} rounded-full overflow-hidden shadow-elegant`}
      >
        <img 
          src="/lovable-uploads/40e6e913-3446-4cab-aea5-9aeea3a131c4.png" 
          alt="Loading..." 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default LoadingLogo;