import { Button } from "@/components/ui/button";

// Discord SVG (brand look) and YouTube SVG
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.565 18.565 0 0 0-5.487 0 12.246 12.246 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104 13.084 13.084 0 0 1-1.872-.894c-.127-.07-.13-.222-.024-.306a.073.073 0 0 1 .075-.011c3.927 1.79 8.18 1.79 12.062 0a.073.073 0 0 1 .076.01c.105.084.102.236-.025.307a12.79 12.79 0 0 1-1.872.893.076.076 0 0 0-.041.105c.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .085.027 20.013 20.013 0 0 0 6.003-2.979.077.077 0 0 0 .03-.054c.5-4.97-.838-9.393-3.549-13.442a.06.06 0 0 0-.032-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.958-2.418 2.157-2.418 1.21 0 2.173 1.096 2.157 2.418 0 1.334-.958 2.419-2.157 2.419zm7.974 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.957-2.418 2.157-2.418 1.21 0 2.173 1.096 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
    <path d="M23.498 6.186a2.972 2.972 0 0 0-2.09-2.099C19.21 3.5 12 3.5 12 3.5s-7.21 0-9.408.587a2.972 2.972 0 0 0-2.09 2.1C0 8.383 0 12 0 12s0 3.617.502 5.814a2.972 2.972 0 0 0 2.09 2.1C4.79 20.5 12 20.5 12 20.5s7.21 0 9.408-.587a2.972 2.972 0 0 0 2.09-2.099C24 15.617 24 12 24 12s0-3.617-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: <DiscordIcon />,
      url: "https://discord.gg/t5SjMrAJNh",
      bg: "bg-[#5865F2] hover:bg-[#4752C4]",
    },
    {
      name: "YouTube",
      icon: <YouTubeIcon />,
      url: "https://www.youtube.com/@cerdopalo2394",
      bg: "bg-[#FF0000] hover:bg-[#CC0000]",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="ghost"
          size="icon"
          asChild
          className={`${link.bg} text-white shadow-lg hover:scale-110 transition-all`}
          aria-label={link.name}
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
