import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const StickyWhatsApp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mb-4 p-4 bg-background border border-border rounded-lg shadow-elegant max-w-sm"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MT</span>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Maximillian Toheeb</h4>
                <p className="text-xs text-muted-foreground">Usually responds instantly</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setIsExpanded(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Hi there! 👋 Ready to grow your business online? Let's chat!
          </p>
          <div className="space-y-2">
            <Button 
              asChild 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <a href="https://wa.me/2348130270031" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start WhatsApp Chat
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <a href="mailto:Milliantoheeb@gmil.com">
                Send Email Instead
              </a>
            </Button>
          </div>
        </motion.div>
      )}
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>
    </motion.div>
  );
};

export default StickyWhatsApp;