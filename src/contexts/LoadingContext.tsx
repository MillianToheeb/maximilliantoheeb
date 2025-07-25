import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface LoadingContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    console.log("🟡 Starting loading...");
    setIsLoading(true);
  };
  
  const stopLoading = () => {
    console.log("🟢 Stopping loading...");
    setIsLoading(false);
  };

  // Force stop loading on mount to ensure clean state
  useEffect(() => {
    console.log("📊 LoadingProvider mounted, ensuring clean state");
    setIsLoading(false);
  }, []);

  console.log("📊 Current loading state:", isLoading);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};