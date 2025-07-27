import { Button } from "@/components/ui/button";
import { Youtube, MessageCircle, Github } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/t5SjMrAJNh",
      color: "hover:text-blue-400",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@cerdopalo",
      color: "hover:text-red-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "#",
      color: "hover:text-gray-400",
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.name}
            variant="ghost"
            size="icon"
            asChild
            className={`w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/20 hover:scale-110 transition-all duration-300 ${link.color}`}
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;