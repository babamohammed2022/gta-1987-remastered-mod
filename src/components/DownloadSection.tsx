import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Package, BookOpen, Wrench, Clock, AlertTriangle, Check, Zap } from "lucide-react";

const DownloadSection = () => {
  const downloads = [
    {
      id: "modpack",
      title: "Modpack",
      status: "UPDATED · 23 July 2025",
      version: "v2.3.1",
      description: "Essential mods and resources for the storyline. Includes all required assets, textures, and gameplay modifications.",
      url: "https://mega.nz/file/LrwUwKCQ#4WBJR25lvqsWcv3XvvGyoJeXCUOzvdKUwd9x3r6PuFk",
      icon: Package,
      required: true,
      available: true,
    },
    {
      id: "storyline",
      title: "Storyline",
      status: "UPDATED · 19 June 2025",
      version: "v1.4.0",
      description: "Main storyline files to play missions. Contains 45+ custom missions with voice acting and cinematic cutscenes.",
      url: "https://drive.google.com/file/d/1w81owBoehbU3ianyG5Czmj-qNobUoAxi/view?usp=sharing",
      icon: BookOpen,
      required: true,
      available: true,
    },
    {
      id: "patch",
      title: "Patch",
      status: "COMING SOON",
      version: "v1.0.0",
      description: "Optional fixes and enhancements including bug fixes, performance improvements, and quality-of-life changes.",
      url: "#",
      icon: Wrench,
      required: false,
      available: false,
    }
  ];

  return (
    <section id="download" className="py-20 px-4 bg-gradient-to-b from-muted/10 to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
            <Zap className="h-4 w-4 mr-2" />
            Ready to Play
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Download & Install
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get everything you need to start your 1987 Los Santos adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className={`relative overflow-hidden group transition-all duration-300 pt-16 pb-8 ${!item.available ? 'opacity-80' : 'hover:shadow-lg hover:-translate-y-2'}`}
              >
                {/* Glow effect for available items */}
                {item.available && (
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                )}

                {/* Ribbon for required items */}
                {item.required && (
                  <div className="absolute -right-10 -top-3 w-40 bg-red-500 text-white text-sm font-bold text-center py-2 transform rotate-45 shadow-lg z-10 tracking-wider">
                    REQUIRED
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-heading flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${item.available ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div>{item.title}</div>
                        <div className="text-sm font-normal text-muted-foreground">
                          {item.version}
                        </div>
                      </div>
                    </CardTitle>
                    <Badge
                      variant={item.status.includes("UPDATED") ? "default" : "secondary"}
                      className={`text-xs ${item.status.includes("UPDATED") ? 'bg-green-500/20 text-green-400' : 'bg-purple-500/20 text-purple-400'}`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 mt-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.available ? (
                    <Button asChild className="w-full mt-14 h-16 text-lg font-semibold rounded-lg">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-6 w-6 transition-transform group-hover:animate-bounce" />
                        Download Now
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full mt-14 opacity-75 cursor-not-allowed h-16 text-lg font-semibold rounded-lg">
                      <Clock className="mr-2 h-6 w-6 animate-pulse" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-muted/20 to-muted/50 p-0.5">
            <div className="bg-background rounded-[11px] p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-gradient inline-flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                Installation Guide
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h4 className="font-medium">Download Files</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Get all required files (marked with red badge). Make sure you have enough disk space.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                    <div>
                      <h4 className="font-medium">Follow Instructions</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Check included README files for specific installation notes or requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                    <div>
                      <h4 className="font-medium">Extract to GTA Folder</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Place all files in your clean GTA San Andreas installation directory.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">4</div>
                    <div>
                      <h4 className="font-medium">Launch and Enjoy</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Start the game through the new launcher and begin your story.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg border border-muted">
                <strong>Note:</strong> For best performance, ensure your game is patched to version 1.0 and running on Windows 10/11. 
                Some antivirus may flag mod files - add exceptions if needed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
