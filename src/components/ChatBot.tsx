import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

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

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] z-40 rounded-xl shadow-card border border-border/20 bg-card overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-primary p-4 text-primary-foreground">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span className="font-heading font-semibold">SAS-GPT</span>
              </div>
              <Button
                onClick={toggleChat}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-white/10 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Chatbot Iframe */}
          <div className="h-full">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/nbc_Bja1rJfenTKjTtFjm"
              width="100%"
              height="100%"
              frameBorder="0"
              title="SAS-GPT Chatbot"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Backdrop */}
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