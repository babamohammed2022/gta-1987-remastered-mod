import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium hover:text-primary hover:bg-primary/10 transition-colors"
    >
      <Globe className="h-4 w-4 mr-2" />
      {language.toUpperCase()}
    </Button>
  );
};

export default LanguageToggle;