import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHATBASE_ID = "nbc_Bja1rJfenTKjTtFjm"; // Replace with your actual Chatbase ID

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);

    // Toggle the chatbot visibility via Chatbase API
    if (typeof window !== "undefined" && window.chatbase) {
      window.chatbase("toggle");
    }
  };

  // Load Chatbase script on first open
  useEffect(() => {
    if (isOpen && !scriptLoaded) {
      const existingScript = document.getElementById("chatbase-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "chatbase-script";
        script.src = "https://www.chatbase.co/embed.min.js";
        script.async = true;
        script.setAttribute("chatbase", CHATBASE_ID);
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
      } else {
        setScriptLoaded(true);
      }
    }
  }, [isOpen, scriptLoaded]);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary-glow shadow-neon hover:shadow-glow transition-all duration-300 hover:scale-110"
          size="icon"
          aria-label="Toggle ChatBot"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary-foreground" />
          ) : (
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          )}
        </Button>
      </div>

      {/* Optional Backdrop for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={toggleChat}
        />
      )}
    </>
  );
};

export default ChatBot;
