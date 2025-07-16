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
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] z-40 rounded-xl shadow-card border border-border/20 bg-card overflow-hidden flex flex-col sm:w-96 sm:right-6 sm:bottom-24 max-sm:right-4 max-sm:bottom-20 max-sm:w-[calc(100vw-2rem)] max-sm:h-[70vh]">
          {/* Chat Header */}
          <div className="bg-gradient-primary p-3 text-primary-foreground flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="font-heading font-medium text-sm">SAS-GPT</span>
              </div>
              <Button
                onClick={toggleChat}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-white/10 h-5 w-5 p-0"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Chatbot Iframe */}
          <div className="flex-1 min-h-0">
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