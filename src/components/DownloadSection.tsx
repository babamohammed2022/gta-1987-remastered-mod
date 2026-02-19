import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Package,
  BookOpen,
  Wrench,
  Clock,
  Info,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

const DownloadSection = () => {
  const [downloadingStates, setDownloadingStates] = useState<Record<string, boolean>>({});

  const downloads = [
    {
      id: "modpack",
      title: "Modpack",
      status: "UPDATED · 19 February 2026",
      description:
        "February 2026 update including performance improvements, new models, optimizations, and additional bug fixes.",
      url: "https://www.mediafire.com/file/qm1wxxizo9vsvf5/GTA_SAS_february_2026.rar/file",
      icon: Package,
      required: true,
      available: true,
    },
    {
      id: "storyline",
      title: "Storyline",
      status: "UPDATED · 25 September 2025",
      description:
        "Main storyline files with minor fixes and patched bugs that prevented crashes. Includes Chapter 1 and Chapter 2 improvements.",
      url: "https://drive.google.com/file/d/1c_-TU1DVh1u2GGYDausrpa-Jy8mYbuSp/view?usp=sharing",
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

    setTimeout(() => {
      setDownloadingStates((prev) => ({ ...prev, [id]: false }));
      window.open(url, "_blank", "noopener,noreferrer");
    }, 1500);
  };

  return (
    <section
      id="download"
      className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-background via-muted/5 to-muted/20"
    >
      {/* Background effects (original style) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient leading-tight animate-fadeIn">
            Get Started
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-200">
            Download the essential files and gear up to dive into the immersive storyline.
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
                className={`group relative overflow-hidden border-0 card-glass hover:shadow-2xl hover:scale-[1.02] shadow-lg transition-transform duration-500 ${
                  !item.available ? "opacity-70" : ""
                } ${item.required ? "ring-1 ring-primary/30" : ""}`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                {item.required && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                      Required
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading font-bold">
                        {item.title}
                      </CardTitle>
                      <Badge
                        variant={isUpdated ? "default" : "secondary"}
                        className="text-xs mt-1"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.available ? (
                    <Button
                      onClick={() => handleDownload(item.id, item.url)}
                      disabled={isDownloading}
                      className="w-full btn-gaming rounded-xl"
                      size="lg"
                    >
                      {isDownloading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Preparing...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Download {item.title}
                        </div>
                      )}
                    </Button>
                  ) : (
                    <Button
                      disabled
                      variant="secondary"
                      className="w-full"
                      size="lg"
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Installation Guide */}
        <Card className="relative overflow-hidden border-0 card-glass shadow-xl">
          <CardContent className="p-8 md:p-10 space-y-8">
            <div className="text-center">
              <Package className="mx-auto w-8 h-8 text-primary mb-4" />
              <h3 className="text-3xl font-heading font-bold mb-3">
                Installation Guide
              </h3>
              <p className="text-muted-foreground">
                Follow these steps to properly install the mod.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                "Download all required files above.",
                "Extract the Modpack into your GTA San Andreas folder.",
                "Extract Storyline into 'GTA San Andreas User Files' in Documents.",
                "Read the README instructions carefully.",
                "Launch the game and enjoy.",
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/20 text-primary rounded-xl font-bold">
                    {idx + 1}
                  </div>
                  <p className="pt-2 text-sm md:text-base">{step}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">
                    Important Notice
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use a clean GTA San Andreas installation for best compatibility.
                    Always backup your save files before installing mods.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-yellow-100 border border-yellow-300 rounded-xl">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">
                    DYOM is Case Sensitive
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Rename the chapter folder to <code>DSL</code>.
                    Example: <code>"DSL Chapter 1"</code> → <code>"DSL"</code>.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-primary">
              <CheckCircle className="w-4 h-4" />
              Ready to enjoy 1987 Los Santos
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DownloadSection;
