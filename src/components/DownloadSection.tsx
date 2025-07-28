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
      available: true
    },
    {
      id: "storyline",
      title: "Storyline",
      status: "UPDATED · 19 June 2025",
      description: "Main storyline files to play missions.",
      url: "https://drive.google.com/file/d/1w81owBoehbU3ianyG5Czmj-qNobUoAxi/view?usp=sharing",
      icon: BookOpen,
      available: true
    },
    {
      id: "patch",
      title: "Patch",
      status: "v1.0.0",
      description: "Optional fixes or enhancements.",
      url: "#",
      icon: Wrench,
      available: false
    }
  ];

  return (
    <section id="download" className="py-16 px-4 bg-muted/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Downloads</h2>
          <p className="text-muted-foreground text-lg">
            Get the files you need to start playing the storyline.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map(({ id, title, status, description, url, icon: Icon, available }) => (
            <Card key={id} className={available ? "" : "opacity-60"}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    <Icon className="h-5 w-5 text-primary" />
                    {title}
                  </CardTitle>
                  <Badge>{status}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{description}</p>
                {available ? (
                  <Button asChild className="w-full">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="w-full">
                    <Clock className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto p-6 border rounded-md bg-background">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Package className="h-6 w-6" />
            How to Install
          </h3>

          <div className="space-y-4 text-base text-muted-foreground">
            {[
              "Download all the files.",
              "Extract the modpack into your GTA San Andreas folder.",
              "Put the storyline files in 'GTA San Andreas User Files' under Documents.",
              "Follow the instructions if included.",
              "Start the game and enjoy!"
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <p>{step}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground italic flex items-center justify-center">
            <Info className="h-4 w-4 mr-1 text-primary" />
            For best compatibility, use a clean GTA San Andreas installation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
