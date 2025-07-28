import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Package, BookOpen, Wrench, Clock, Info, CheckCircle } from "lucide-react";

const DownloadSection = () => {
  const downloads = [
    {
      id: "modpack",
      title: "Modpack",
      status: "UPDATED · 23 July 2025",
      description: "Essential mods and resources for the storyline.",
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
    <section id="download" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-3 text-gradient animate-gradient-xy">
            Downloads
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Grab the essential files and gear up to dive into the immersive storyline. Download now and embark on your journey through Los Santos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item) => {
            const Icon = item.icon;
            const isUpdated = item.status.includes("UPDATED");
            return (
              <Card
                key={item.id}
                className={`card-glass hover-lift relative transition-transform hover:scale-[1.03] ${
                  !item.available ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                }`}
                title={item.available ? item.description : "Coming soon..."}
                tabIndex={item.available ? 0 : -1}
                aria-disabled={!item.available}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-heading text-primary flex items-center gap-2">
                      <Icon className="h-6 w-6 text-primary animate-bounce-slow" />
                      {item.title}
                    </CardTitle>
                    <Badge
                      variant={isUpdated ? "default" : "secondary"}
                      className={`whitespace-nowrap px-3 py-1 rounded-full font-semibold ${
                        isUpdated
                          ? "bg-primary text-primary-foreground animate-pulse"
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
                      className="bg-red-500/20 text-red-500 border-red-500/40 w-fit mt-2 font-semibold"
                      aria-label="Required download"
                    >
                      Required
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="space-y-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>

                  {item.available ? (
                    <Button asChild className="w-full btn-gaming shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2" aria-label={`Download ${item.title}`}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" tabIndex={0}>
                        <Download className="h-5 w-5" />
                        Download {item.title}
                      </a>
                    </Button>
                  ) : (
                    <Button
                      disabled
                      className="w-full opacity-60 cursor-not-allowed flex items-center justify-center gap-2"
                      aria-label={`${item.title} coming soon`}
                      title="This download will be available soon"
                    >
                      <Clock className="h-5 w-5 animate-pulse" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="card-glass p-8 max-w-3xl mx-auto border border-primary/40 shadow-lg shadow-primary/10">
            <h3 className="text-3xl font-heading font-bold mb-6 text-secondary flex items-center justify-center gap-2">
              <Package className="inline-block h-8 w-8 text-secondary animate-spin-slow" />
              How to Install
            </h3>
            <div className="text-left space-y-6 text-muted-foreground text-lg leading-relaxed">
              {[
                "Download all the required files.",
                'Extract the modpack into your GTA San Andreas folder, while the storyline should be extracted into the "GTA San Andreas User Files" directory, which is usually located in the user\'s Documents folder.',
                "Follow any README instructions if included.",
                "Start the game and enjoy the storyline.",
              ].map((step, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <span className="flex items-center justify-center w-9 h-9 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-md shadow-primary/40 select-none">
                    <CheckCircle className="h-5 w-5" />
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground italic">
              <Info className="inline-block mr-1 h-4 w-4 text-primary" />
              Make sure your installation folder is a clean GTA San Andreas setup without other mods for best compatibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
