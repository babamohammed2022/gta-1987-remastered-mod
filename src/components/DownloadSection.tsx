import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Package, BookOpen, Wrench, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DownloadSection = () => {
  const { t } = useLanguage();
  
  const downloads = [
    {
      id: "modpack",
      title: t('dl.modpack'),
      status: t('dl.updated'),
      description: t('dl.modpackDesc'),
      url: "https://drive.google.com/file/d/1dAkfNU57kns57v0UWPkNs6mLBlKZYSN6/view",
      icon: Package,
      required: true,
      available: true
    },
    {
      id: "storyline",
      title: t('dl.storyline'),
      status: t('dl.updated'),
      description: t('dl.storylineDesc'),
      url: "https://drive.google.com/file/d/1w81owBoehbU3ianyG5Czmj-qNobUoAxi/view?usp=sharing",
      icon: BookOpen,
      required: true,
      available: true
    },
    {
      id: "patch",
      title: t('dl.patch'),
      status: "v1.0.0",
      description: t('dl.patchDesc'),
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
            {t('dl.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('dl.subtitle')}
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
                    <Badge variant={item.status === t('dl.updated') ? "default" : "secondary"} 
                           className={item.status === t('dl.updated') ? "bg-primary text-primary-foreground" : ""}>
                      {item.status}
                    </Badge>
                  </div>
                  {item.required && (
                    <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20 w-fit">
                      {t('dl.required')}
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.available ? (
                    <Button 
                      asChild
                      className="w-full btn-gaming"
                    >
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        {t('download')} {item.title}
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      disabled
                      className="w-full opacity-50 cursor-not-allowed"
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {t('dl.comingSoon')}
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
              {t('dl.installTitle')}
            </h3>
            <div className="text-left space-y-3 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                <span>{t('dl.step1')}</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                <span>{t('dl.step2')}</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                <span>{t('dl.step3')}</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
                <span>{t('dl.step4')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;