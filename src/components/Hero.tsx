import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Play } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/refs/heads/main/file_00000000ff5461fa9664a4620095ba2b_conversation_id67fce5d9-13d0-800c-906f-586df3adde0bmessage_ide03c0d3b-617e-4327-81f3-013a4e376e40.webp')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--background)/0.85)] backdrop-brightness-75" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src="https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/lenchmobnigga.png" 
            alt="GTA San Andreas Stories Logo"
            className="mx-auto h-32 md:h-48 object-contain filter drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-heading font-black mb-6 text-gradient animate-glow">
          The Return of Ryder (1987)
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience a whole new gangsta storyline in Los Santos, 1987. 
          Ryder returns from Vice City to help the Grove Street Families during CJ's absence. 
          <span className="text-primary font-semibold"> New gangs. New missions. Same chaos.</span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <Button
            onClick={() => scrollToSection('download')}
            className="btn-gaming text-lg px-8 py-4 hover-lift"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Now
          </Button>
          <Button
            onClick={() => scrollToSection('trailer')}
            variant="outline"
            className="btn-gaming-outline text-lg px-8 py-4"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Trailer
          </Button>
          {/* News button removed */}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <ChevronDown 
            className="h-8 w-8 text-primary mx-auto cursor-pointer hover:text-primary-glow transition-colors"
            onClick={() => scrollToSection('info')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
