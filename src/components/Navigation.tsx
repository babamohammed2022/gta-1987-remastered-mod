import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Info, HelpCircle, Settings, Users, Download, Video, Image, BookOpen } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'info', label: 'Info', icon: Info },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'requirements', label: 'Requirements', icon: Settings },
    { id: 'credits', label: 'Credits', icon: Users },
    { id: 'download', label: 'Download', icon: Download },
    { id: 'trailer', label: 'Trailer', icon: Video },
    { id: 'screenshots', label: 'Gallery', icon: Image },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-heading font-bold text-gradient cursor-pointer" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              GTA SAS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
            
            {/* Manual Link */}
            <Button
              variant="ghost"
              asChild
              className="text-sm font-medium hover:text-primary hover:bg-primary/10"
            >
              <a href="https://gtasasmanual.netlify.app/" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-4 w-4 mr-2" />
                Manual
              </a>
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button
                        key={item.id}
                        variant="ghost"
                        onClick={() => scrollToSection(item.id)}
                        className="justify-start text-left"
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {item.label}
                      </Button>
                    );
                  })}
                  <Button
                    variant="ghost"
                    asChild
                    className="justify-start text-left"
                  >
                    <a href="https://gtasasmanual.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Manual
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;