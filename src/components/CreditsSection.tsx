import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CreditsSection = () => {
  const { t } = useLanguage();
  const developmentTeam = [
    { name: "babamohammed2022", role: "Project Owner, Lead Mission Designer, Storywriting" },
    { name: "Abdullah", role: "Website Design, Models, Suggestions, Programming" },
    { name: "FrankoU", role: "Mapping Specialist, Artist, Server Administration, Retexturing, Screenshot Production, Artworks" },
    { name: "avixreal", role: "Supervision, AI Voices, Website Assistance, Website Design" },
    { name: "The Small Chese", role: "Mission Design, Creative Direction" },
    { name: "Armando", role: "AI voices, Sounds, Retexture, Supervisor, Tester, Screenshots, Missions Designer, Administration, Moderation, Suggestions, Videos and Clips, Bug Reports" },
    { name: "Mike", role: "Missions, In-game Photography" },
    { name: "Cerdquad", role: "Animations, Modelling, Suggestions, Screenshots, Artistic collaboration" },
    { name: "GTAMissionsCreator", role: "Video Production" },
    { name: "Noobshakespeare", role: "Retexturing, Mission Testing, Bug Report" },
    { name: "karammii", role: "Billboards Design" },
    { name: "Jmanuc", role: "Screenshots, Suggestions, Supervision, Optimization, Artworks" },
    { name: "Rayane", role: "Suggestions, Voices, Supervision" },
    { name: "Seve267", role: "Scripting Help, DYOM Modder, Bug Fixer, Miscellaneous" },
    { name: "Forge", role: "Scripting Help" },
    { name: "Elrico", role: "Mission Testing, Promotional Screenshots, Server Contribution" },
    { name: "Urafael games", role: "Coding Expertise and ASI Development" } 
  ];

  const specialContributors = [
    { name: "Rule Breakers", role: "Environmental Mapping" },
    { name: "Bolszewik", role: "In-game Photography" },
    { name: "14todoeltiempodc", role: "Weapon Retextures" },
    { name: "NorthStationX", role: "Billboards Design, Logo Creation" },
    { name: "FrankoU", role: "Special Mods (Vehicles Parked in Airport LS, Beta Sweet House, and others)" },
    { name: "Lost MC Claude", role: "Bug Testing" },
    { name: "Cerdquad", role: "Fixed radar icons" },
    { name: "MAHMOGAMER", role: "Project Supervision" },
    { name: "MaxMakoShark", role: "Server Supervision" },
    { name: "Tix", role: "Gameplay Testing" },
    { name: "Raul", role: "Visual Enhancements, Mission Testing and Enhancing, Storyline Improvements, Video Recording, Supervision, Bug Reports" }
  ];

  const specialThanks = [
    "Endochronic", "SASquad", "Yucark", "TheMadeMan"
  ];

  return (
    <section id="credits" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            {t('credits.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('credits.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Core Development Team */}
          <Card className="card-glass hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary flex items-center">
                <Users className="h-6 w-6 mr-2" />
                {t('credits.coreTeam')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {developmentTeam.map((member, index) => (
                  <div key={index} className="flex flex-col space-y-1 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20">
                    <div className="font-semibold text-primary">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Special Contributors */}
          <Card className="card-glass hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary flex items-center">
                <Star className="h-6 w-6 mr-2" />
                {t('credits.contributors')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specialContributors.map((contributor, index) => (
                  <div key={index} className="flex flex-col space-y-1 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20">
                    <div className="font-semibold text-primary">{contributor.name}</div>
                    <div className="text-sm text-muted-foreground">{contributor.role}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Thanks */}
        <Card className="card-glass hover-lift">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary flex items-center justify-center">
              <Heart className="h-6 w-6 mr-2" />
              {t('credits.thanks')}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              {t('credits.thanksDesc')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {specialThanks.map((name, index) => (
                <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {name}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              {t('credits.fullCredits')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CreditsSection;
