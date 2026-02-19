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
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const DownloadSection = () => {
  const [downloadingStates, setDownloadingStates] = useState<Record<string, boolean>>({});

  const downloads = [
    {
      id: "modpack",
      title: "Modpack",
      status: "LATEST · 19 February 2026",
      description:
        "February 2026 Major Update. Includes performance optimizations, new character models, refined lighting, improved stability, and multiple gameplay enhancements.",
      url: "https://www.mediafire.com/file/qm1wxxizo9vsvf5/GTA_SAS_february_2026.rar/file",
      icon: Package,
      required: true,
      available: true,
      highlight: true,
    },
    {
      id: "storyline",
      title: "Storyline",
      status: "UPDATED · 25 September 2025",
      description:
        "Main storyline files with crash fixes, stability patches, and improved narrative flow for Chapter 1 and Chapter 2.",
      url: "https://drive.google.com/file/d/1c_-TU1DVh1u2GGYDausrpa-Jy8mYbuSp/view?usp=sharing",
      icon: BookOpen,
      required: true,
      available: true,
    },
    {
      id: "patch",
      title: "Patch",
      status: "v1.0.0",
      description: "Optional hotfixes and minor improvements.",
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
    }, 1400);
  };

  return (
    <section
      id="download"
      className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20"
    >
      {/* Background glow effects */}
      <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
            Download Center
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Grab the essential files below and experience the complete 1987 Los Santos storyline.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {downloads.map((item) => {
            const Icon = item.icon;
            const isDownloading = downloadingStates[item.id] || false;

            return (
              <Card
                key={item.id}
                className={`relative overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${
                  item.highlight ? "ring-2 ring-primary/50 shadow-primary/20 shadow-2xl" : ""
                } ${!item.available ? "opacity-70" : ""}`}
              >
                {item.highlight && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary text-white flex items-center gap-1 px-3 py-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Recommended
                    </Badge>
                  </div>
                )}

                {item.required && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      Required
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.status}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.available ? (
                    <Button
                      onClick={() => handleDownload(item.id, item.url)}
                      disabled={isDownloading}
                      size="lg"
                      className="w-full rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105"
                    >
                      {isDownloading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Preparing Download...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Download className="w-5 h-5" />
                          Download {item.title}
                        </div>
                      )}
                    </Button>
                  ) : (
                    <Button disabled size="lg" className="w-full rounded-xl">
                      <Clock className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Installation Guide */}
        <Card className="border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl">
          <CardContent className="p-10 space-y-10">
            <div className="text-center">
              <Package className="mx-auto w-10 h-10 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-3">Installation Guide</h3>
              <p className="text-muted-foreground">
                Follow these steps carefully to ensure proper setup.
              </p>
            </div>

            <div className="space-y-5 max-w-4xl mx-auto">
              {[
                "Download all required files above.",
                "Extract the Modpack into your GTA San Andreas main directory.",
                "Extract the Storyline into 'GTA San Andreas User Files' (Documents folder).",
                "Read the README file carefully before launching.",
                "Launch the game and enjoy the full experience.",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/20 font-bold text-primary">
                    {idx + 1}
                  </div>
                  <p className="pt-2 text-sm md:text-base">{step}</p>
                </div>
              ))}
            </div>

            {/* Notices */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      Important Notice
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Use a clean GTA San Andreas installation for best compatibility.
                      Always backup your saves before installing mods.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-yellow-100 border border-yellow-300">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-yellow-700 mb-2">
                      DYOM is Case Sensitive
                    </h4>
                    <p className="text-sm text-yellow-700">
                      Rename the folder of the chapter you want to play to
                      <code className="mx-1 font-semibold">DSL</code>.
                      Example: rename <code>"DSL Chapter 1"</code> to
                      <code>"DSL"</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-primary font-medium flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Ready to relive 1987 Los Santos.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DownloadSection;
