import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Settings, Cpu, HardDrive, Monitor } from "lucide-react";

const requirements = [
  { icon: Settings, label: "Game Version", value: "GTA San Andreas v1.0 HOODLUM EXE" },
  { icon: Download, label: "DYOM", value: "DYOM 8.1 (included in the modpack)" },
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

const RequirementItem = ({
  icon: Icon,
  label,
  value
}: {
  icon: any;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
      <Icon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
      <div>
        <div className="font-semibold text-foreground">{label}</div>
        <div className="text-sm text-muted-foreground">{value}</div>
      </div>
    </div>
  );
};

const DownloadItem = ({
  name,
  description,
  url,
  color
}: {
  name: string;
  description: string;
  url: string;
  color: string;
}) => {
  return (
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
};

const RequirementsSection = () => {
  return (
    <section id="requirements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Requirements
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to run GTA San Andreas Stories smoothly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* REQUIREMENTS */}
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
                  <strong>Note:</strong> Use a clean GTA San Andreas v1.0 installation for best results.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* DOWNLOADS */}
          <Card className="card-glass hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-secondary">
                Additional Downloads
              </CardTitle>
            </CardHeader>

            <CardContent>

              {/* DOWNLOAD LIST FIRST */}
              <div className="space-y-3">
                {downloads.map((dl, idx) => (
                  <DownloadItem key={idx} {...dl} />
                ))}
              </div>

              {/* IMPORTANT (AFTER DOWNLOADS, BEFORE SUPPORT) */}
              <div className="mt-6 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> GTA San Andreas Stories already includes all required dependencies.
                  The storyline is built on DYOM 8.1, which is already included and fully configured within the modpack.
                  <br /><br />
                  These downloads are provided only for debugging, manual troubleshooting, compatibility testing,
                  or advanced users who need individual components.
                  <br /><br />
                  A standard installation does not require any additional downloads.
                </p>
              </div>

              {/* SUPPORT */}
              <p className="mt-6 text-sm text-center text-muted-foreground">
                For support, join our Discord server and report any issues for troubleshooting assistance.
              </p>

              {/* BADGE */}
              <div className="mt-6 text-center">
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  No additional downloads required
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
