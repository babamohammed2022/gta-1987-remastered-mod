import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Package, BookOpen, Wrench, Clock, Info, CheckCircle } from "lucide-react";
import { useState } from "react";

const DownloadSection = () => {
  const [downloadingStates, setDownloadingStates] = useState<Record<string, boolean>>({});

  const downloads = [
    {
      id: "modpack",
      title: "Modpack",
      status: "UPDATED · 23 July 2025",
      description: "Essential modpack for GTA San Andreas Stories, including all the files needed to play.",
      url: "https://mega.nz/file/LrwUwKCQ#4WBJR25lvqsWcv3XvvGyoJeXCUOzvdKUwd9x3r6PuFk",
      icon: Package,
      required: true,
      available: true,
    },
    {
      id: "storyline",
      title: "Storyline",
      status: "UPDATED · 19 June 2025",
      description: "Main storyline files to play missions.",
      url: "https://drive.google.com/file/d/1w81owBoehbU3ianyG5Czmj-qNobUoAxi/view?usp=sharing",
      icon: BookOpen,
      required: true,
      available: true,
    },
    {
      id: "patch",
      title: "Patch",
      status: "v1.0.0",
      description: "Optional fixes or enhancements.",
      url: "#",
      icon: Wrench,
      required: false,
      available: false,
    },
  ];

  const handleDownload = (id: string, url: string) => {
    if (!url || url === "#") return;

    setDownloadingStates((prev) => ({ ...prev, [id]: true }));

    // Simulate download time
    setTimeout(() => {
      setDownloadingStates((prev) => ({ ...prev, [id]: false }));
      window.open(url, "_blank", "noopener,noreferrer");
    }, 1500);
  };

  return (
    <section id="download" className="relative py-16 md:py-24 px-4 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient leading-tight">
            Get Started
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Grab the essential files and gear up to dive into the immersive storyline. Download now and embark on
            your journey through Los Santos!
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {downloads.map((item, index) => {
            const Icon = item.icon;
            const isUpdated = item.status.includes("UPDATED");
            const isDownloading = downloadingStates[item.id] || false;

            return (
              <Card
                key={item.id}
                className={`group relative overflow-hidden border-0 card-glass hover-lift ${
                  !item.available ? "opacity-70" : ""
                } ${item.required ? "ring-1 ring-primary/30" : ""}`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                {/* Required Badge */}
                {item.required && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-medium">Required</Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-heading font-bold text-foreground mb-1">{item.title}</CardTitle>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge
                            variant={isUpdated ? "default" : "secondary"}
                            className={`text-xs font-medium ${
                              isUpdated
                                ? "bg-primary/20 text-primary border-primary/30"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>

                  {/* Download Button */}
                  {item.available ? (
                    <Button
                      onClick={() => handleDownload(item.id, item.url)}
                      disabled={isDownloading}
                      className={`w-full btn-gaming relative overflow-hidden ${
                        isDownloading ? "cursor-not-allowed" : ""
                      }`}
                      size="lg"
                      aria-live="polite"
                    >
                      <div
                        className={`flex items-center justify-center gap-2 transition-all duration-300 ${
                          isDownloading ? "scale-95" : ""
                        }`}
                      >
                        {isDownloading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            <span>Preparing...</span>
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 group-hover:animate-bounce" />
                            <span>Download {item.title}</span>
                          </>
                        )}
                      </div>
                    </Button>
                  ) : (
                    <Button
                      disabled
                      className="w-full bg-muted/20 text-muted-foreground cursor-not-allowed border border-muted/30"
                      variant="secondary"
                      size="lg"
                    >
                      <Clock className="h-4 w-4 mr-2 animate-pulse" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Installation Guide */}
        <Card className="relative overflow-hidden border-0 card-glass">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl" />

          <CardContent className="relative p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-foreground">Installation Guide</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Follow these simple steps to get started with your GTA San Andreas Stories experience
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                "Download all the required files from the links above.",
                "Extract the modpack into your GTA San Andreas folder. The storyline files should be extracted into the 'GTA San Andreas User Files' directory, which is usually located in the user's Documents folder.",
                "Follow any included README instructions carefully for proper setup.",
                "Start the game and enjoy the immersive storyline experience!",
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-primary/20 text-primary rounded-xl font-bold text-lg transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                    {idx + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-foreground text-base leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Warning */}
            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Important Notice</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Make sure your installation folder is a clean GTA San Andreas setup without other mods for best
                    compatibility. Always backup your save files before installing any modifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Success indicator */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary">
              <CheckCircle className="w-4 h-4" />
              <span>Download these files and enjoy 1987 Los Santos</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DownloadSection;
