import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Package, BookOpen, Wrench, Clock, Info } from "lucide-react";

const DownloadSection = () => {
  const downloads = [
    {
      id: "modpack",
      title: "Modpack",
      status: "UPDATED · 23 July 2025",
      description: "Essential modpack for GTA San Andreas Stories, including all the files needed to play.",
      url: "https://mega.nz/file/LrwUwKCQ#4WBJR25lvqsWcv3XvvGyoJeXCUOzvdKUwd9x3r6PuFk",
      icon: Package,
      required: true,
      available: true
    },
    {
      id: "storyline",
      title: "Storyline",
      status: "UPDATED · 19 June 2025",
      description: "Main storyline files to play missions.",
      url: "https://drive.google.com/file/d/1w81owBoehbU3ianyG5Czmj-qNobUoAxi/view?usp=sharing",
      icon: BookOpen,
      required: true,
      available: true
    },
    {
      id: "patch",
      title: "Patch",
      status: "v1.0.0",
      description: "Optional fixes or enhancements.",
      url: "#",
      icon: Wrench,
      required: false,
      available: false
    }
  ];

  return (
    <section id="download" className="py-12 md:py-20 px-4 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Downloads
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Grab the essential files and gear up to dive into the immersive storyline. Download now and embark on your journey through Los Santos!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {downloads.map((item) => {
            const Icon = item.icon;
            const isUpdated = item.status.includes("UPDATED");
            return (
              <Card
                key={item.id}
                className={`relative transition-all duration-300 hover:-translate-y-1.5 ${
                  !item.available ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                }`}
                title={item.available ? item.description : "Coming soon..."}
                tabIndex={item.available ? 0 : -1}
                aria-disabled={!item.available}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      {item.title}
                    </CardTitle>
                    <Badge
                      variant={isUpdated ? "default" : "secondary"}
                      className={`whitespace-nowrap px-2 py-1 md:px-3 rounded-full text-xs md:text-sm font-medium ${
                        isUpdated
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                      aria-label={item.status}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  {item.required && (
                    <Badge
                      variant="outline"
                      className="bg-red-500/10 text-red-500 border-red-500/30 w-fit mt-1 text-xs md:text-sm font-medium"
                      aria-label="Required download"
                    >
                      Required
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.description}</p>

                  {item.available ? (
                    <Button asChild className="w-full group" variant="default" size="lg">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" tabIndex={0}>
                        <Download className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:animate-bounce" />
                        <span className="text-sm md:text-base">Download {item.title}</span>
                      </a>
                    </Button>
                  ) : (
                    <Button
                      disabled
                      className="w-full opacity-60 cursor-not-allowed flex items-center justify-center gap-2"
                      variant="secondary"
                      size="lg"
                      aria-label={`${item.title} coming soon`}
                      title="This download will be available soon"
                    >
                      <Clock className="h-4 w-4 md:h-5 md:w-5 animate-pulse" />
                      <span className="text-sm md:text-base">Coming Soon</span>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-14 md:mt-20 text-center">
          <div className="bg-background p-6 md:p-8 max-w-3xl mx-auto border border-primary/20 rounded-xl shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-7 text-foreground flex items-center justify-center gap-3">
              <Package className="inline-block h-6 w-6 md:h-8 md:w-8 text-primary" />
              How to Install
            </h3>
            <div className="text-left space-y-4 md:space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              {[
                "Download all the required files.",
                "Extract the modpack into your GTA San Andreas folder. The storyline files should be extracted into the 'GTA San Andreas User Files' directory, which is usually located in the user's Documents folder.",
                "Follow any included README instructions carefully.",
                "Start the game and enjoy the storyline."
              ].map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 md:space-x-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 md:w-9 md:h-9 bg-primary/10 text-primary rounded-full font-bold text-sm md:text-lg select-none mt-0.5">
                    {idx + 1}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 md:mt-8 text-center text-xs md:text-sm text-muted-foreground italic flex items-center justify-center">
              <Info className="mr-2 h-3 w-3 md:h-4 md:w-4 text-primary" />
              Make sure your installation folder is a clean GTA San Andreas setup without other mods for best compatibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
