import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Settings, Cpu, HardDrive, Monitor } from "lucide-react";

const requirements = [
  { icon: Settings, label: "Game Version", value: "GTA San Andreas v1.0 HOODLUM EXE" },
  { icon: Download, label: "DYOM", value: "DYOM 8.1 (included below)" },
  { icon: Monitor, label: "Operating System", value: "Windows XP or higher" },
  { icon: Cpu, label: "RAM", value: "1GB minimum (2GB recommended)" },
  { icon: HardDrive, label: "Graphics", value: "1GB VRAM minimum" },
  { icon: HardDrive, label: "Storage", value: "At least 6GB free space" },
];

const downloads = [
  {
    name: "CLEO 5",
    description: "Required for running CLEO scripts.",
    url: "https://github.com/cleolibrary/CLEO5/releases",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    name: "DYOM 8.1",
    description: "Design Your Own Mission tool for GTA SA.",
    url: "https://www.gtagarage.com/mods/download.php?f=35188",
    color: "bg-orange-600 hover:bg-orange-700"
  },
  {
    name: "CLEO+",
    description: "Enhances CLEO with more opcodes and features.",
    url: "https://www.mixmods.com.br/2023/10/cleoplus/",
    color: "bg-purple-600 hover:bg-purple-700"
  },
  {
    name: "NewOpcodes",
    description: "Adds additional opcodes for CLEO compatibility and gameplay enhancements.",
    url: "https://www.mixmods.com.br/2020/10/newopcodes-cleo-v2-1/",
    color: "bg-green-600 hover:bg-green-700"
  }
];

// Subcomponent for a single requirement
const RequirementItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
    <Icon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" aria-hidden="true" />
    <div>
      <div className="font-semibold text-foreground">{label}</div>
      <div className="text-sm text-muted-foreground">{value}</div>
    </div>
  </div>
);

// Subcomponent for a single download item
const DownloadItem = ({ name, description, url, color }: { name: string; description: string; url: string; color: string }) => (
  <div className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/20 transition-colors">
    <div>
      <div className="font-semibold text-foreground">{name}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
    <Button
      asChild
      size="sm"
      className={`${color} text-white hover:scale-105 transition-transform`}
      aria-label={`Download ${name}`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Download className="h-4 w-4 mr-1" />
        Get
      </a>
    </Button>
  </div>
);

const RequirementsSection = () => {
  return (
    <section id="requirements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Requirements
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to run GTA San Andreas Stories smoothly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Requirements List */}
          <Card className="card-glass hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">
                Minimum Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requirements.map((req, idx) => (
                  <RequirementItem key={idx} {...req} />
                ))}
              </div>

              <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-sm text-warning-foreground">
                  <strong>Note:</strong> Use a clean GTA SA installation for best results.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Downloads */}
          <Card className="card-glass hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-secondary">
                Additional Downloads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Download these tools to enhance your GTA San Andreas Stories setup.
              </p>

              <div className="space-y-3">
                {downloads.map((dl, idx) => (
                  <DownloadItem key={idx} {...dl} />
                ))}
              </div>

              <p className="mt-6 text-sm text-center text-muted-foreground">
                For more information, join our{" "}
                <a
                  href="https://discord.com/invite/t5SjMrAJNh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-muted-foreground hover:text-blue-500"
                >
                  Discord server
                </a>
                . Report any issues on Discord for adjustments.
              </p>

              <div className="mt-6 text-center">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Clean installation is highly recommended
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
