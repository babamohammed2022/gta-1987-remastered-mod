import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="animate-float">
          <img 
            src="https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/lenchmobnigga.png" 
            alt="GTA San Andreas Stories Logo"
            className="mx-auto h-24 md:h-32 object-contain filter drop-shadow-2xl"
          />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-bold text-gradient">
            Loading Los Santos...
          </h2>
          <p className="text-muted-foreground">
            Preparing your 1987 experience
          </p>
        </div>

        <div className="space-y-2">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;