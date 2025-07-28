import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Package, BookOpen, Wrench, Clock } from "lucide-react";

const DownloadSection = () => {
  const downloads = [
    {
      id: "modpack",
      title: "Modpack",
      status: "UPDATED · 23 July 2025",
      description: "A curated collection of essential mods and resources that breathe life into the storyline. Must be installed in your GTA San Andreas CLEAN folder to work flawlessly.",
      url: "https://mega.nz/file/LrwUwKCQ#4WBJR25lvqsWcv3XvvGyoJeXCUOzvdKUwd9x3r6PuFk",
      icon: Package,
      required: true,
      available: true
    },
    {
      id: "storyline",
      title: "Storyline",
      status: "UPDATED · 19 June 2025",
      description: "The core storyline files that bring the missions to life. Place these in your GTA San Andreas USER FILES folder, typically found in the Documents directory on your PC.",
      url: "https://drive.google.com/file/d/1w81owBoehbU3ianyG5Czmj-qNobUoAxi/view?usp=sharing",
      icon: BookOpen,
      required: true,
      available: true
    },
    {
      id: "patch",
      title: "Patch",
      status: "v1.0.0",
      description: "Optional fixes and enhancements designed to improve your gameplay experience. Stay tuned for updates!",
      url: "#",
      icon: Wrench,
      required: false,
      available: false
    }
  ];

  return (
    <section id="download" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Ready to Dive In? Download Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to jump straight into the action. Follow the steps carefully to ensure a smooth setup and an unforgettable experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className={`card-glass hover-lift relative ${!item.available ? 'opacity-75' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-heading text-primary flex items-center">
                      <Icon className="h-5 w-5 mr-2" />
                      {item.title}
                    </CardTitle>
                    <Badge 
                      variant={item.status.includes("UPDATED") ? "default" : "secondary"} 
                      className={item.status.includes("UPDATED") ? "bg-primary text-primary-foreground" : ""}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  {item.required && (
                    <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20 w-fit mt-2">
                      Required
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.available ? (
                    <Button asChild className="w-full btn-gaming">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Download ${item.title}`}>
                        <Download className="mr-2 h-4 w-4" />
                        Download {item.title}
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full opacity-50 cursor-not-allowed" aria-disabled="true">
                      <Clock className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="card-glass p-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4 text-secondary">
              Installation Guide — Follow These Steps
            </h3>
            <div className="text-left space-y-4 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                <span>Download all the <strong>required</strong> files listed above.</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                <span>
                  Extract the <strong>Modpack</strong> into your GTA San Andreas <em>clean</em> installation folder — this is where the game is installed, without modifications.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                <span>
                  Place the <strong>Storyline</strong> files inside your GTA San Andreas <em>user files</em> folder, typically located in <code>Documents\GTA San Andreas User Files</code> on your PC.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
                <span>If included, follow any additional README instructions for patch or optional files.</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
                <span>Launch the game and immerse yourself in the epic new storyline!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
