import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Settings, Cpu, HardDrive, Monitor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RequirementsSection = () => {
  const { t } = useLanguage();
  
  const requirements = [
    { icon: Settings, label: t('req.gameVersion'), value: "GTA San Andreas v1.0 HOODLUM EXE" },
    { icon: Download, label: t('req.dyom'), value: "DYOM 8.1 (included below)" },
    { icon: Monitor, label: t('req.os'), value: "Windows XP or higher" },
    { icon: Cpu, label: t('req.ram'), value: "1GB minimum (2GB recommended)" },
    { icon: HardDrive, label: t('req.graphics'), value: "1GB VRAM minimum" },
    { icon: HardDrive, label: t('req.storage'), value: "At least 6GB free space" },
  ];

  const downloads = [
    {
      name: t('req.cleo5'),
      description: t('req.cleo5Desc'),
      url: "https://github.com/cleolibrary/CLEO5/releases/download/v5.0.0-RC2/SA.CLEO_v5.0.0-RC2+Silent_ASI_Loader.zip",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "DYOM 8.1",
      description: t('req.dyomDesc'),
      url: "https://www.gtagarage.com/mods/download.php?f=35188",
      color: "bg-orange-600 hover:bg-orange-700"
    },
    {
      name: t('req.cleoPlus'),
      description: t('req.cleoPlusDesc'),
      url: "https://www.mixmods.com.br/2023/10/cleoplus/",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      name: t('req.essentials'),
      description: t('req.essentialsDesc'),
      url: "https://www.mediafire.com/file/pw94wuhxg49xli6/GTA_SAS_essentials_pack.rar/file",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  return (
    <section id="requirements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            {t('req.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('req.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Requirements List */}
          <Card className="card-glass hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">
                {t('req.minimum')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requirements.map((req, index) => {
                  const Icon = req.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/20">
                      <Icon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground">{req.label}</div>
                        <div className="text-muted-foreground text-sm">{req.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-sm text-warning-foreground">
                  <strong>Note:</strong> {t('req.note')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Tools */}
          <Card className="card-glass hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-secondary">
                {t('req.additional')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {t('req.description')}
              </p>
              
              <div className="space-y-3">
                {downloads.map((download, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                    <div>
                      <div className="font-semibold text-foreground">{download.name}</div>
                      <div className="text-sm text-muted-foreground">{download.description}</div>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className={`${download.color} text-white hover:scale-105 transition-transform`}
                    >
                      <a href={download.url} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-1" />
                        {t('get')}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {t('req.cleanInstall')}
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