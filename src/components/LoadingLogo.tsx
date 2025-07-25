import { motion } from "framer-motion";
import { useLoading } from "@/contexts/LoadingContext";

const LoadingLogo = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

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
        className="h-24 w-24 rounded-full overflow-hidden shadow-elegant"
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