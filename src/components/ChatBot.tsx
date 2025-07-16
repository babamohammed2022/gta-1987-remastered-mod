import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      const existingScript = document.getElementById("nbc_Bja1rJfenTKjTtFjm");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "nbc_Bja1rJfenTKjTtFjm";
        script.setAttribute("chatbase", "nbc_Bja1rJfenTKjTtFjm"); // optional for custom config
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary-glow shadow-neon hover:shadow-glow transition-all duration-300 hover:scale-110"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary-foreground" />
          ) : (
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          )}
        </Button>
      </div>

      {/* Optional Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleChat}
        />
      )}
    </>
  );
};

export default ChatBot;
