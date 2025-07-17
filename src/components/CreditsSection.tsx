import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Heart, Palette, Camera, Award } from "lucide-react";

const CreditsSection = () => {
  const developmentTeam = [
    { name: "babamohammed2022", role: "Project Owner, Lead Mission Designer, Storywriting", icon: Award, gradient: "from-primary to-primary-dark" },
    { name: "Abdullah", role: "Website Design, Models, Suggestions", icon: Users },
    { name: "FrankoU", role: "Mapping Specialist, Artist, Server Administration, Retexturing, Screenshot Production, Artworks", icon: Palette, gradient: "from-secondary to-secondary-dark" },
    { name: "avixreal", role: "Supervision, AI Voices, Website Assistance, Website Design", icon: Users },
    { name: "The Small Chese", role: "Mission Design, Creative Direction", icon: Users },
    { name: "Armando", role: "AI voices, Sounds, Retexture, Supervisor, Tester, Screenshots, Missions Designer, Administration, Moderation, Suggestions, Videos and Clips, Bug Reports", icon: Star, gradient: "from-accent to-accent-dark" },
    { name: "Mike", role: "Missions, In-game Photography", icon: Camera },
    { name: "Cerdquad", role: "Animations, Modelling, Suggestions, Screenshots, Artistic collaboration", icon: Palette, gradient: "from-destructive to-destructive-dark" },
    { name: "GTAMissionsCreator", role: "Video Production", icon: Users },
    { name: "Noobshakespeare", role: "Retexturing, Mission Testing, Bug Report", icon: Users },
    { name: "karammii", role: "Billboards Design", icon: Users },
    { name: "Jmanuc", role: "Screenshots, Suggestions, Supervision, Optimization, Artworks", icon: Palette, gradient: "from-muted to-muted-dark" },
    { name: "Rayane", role: "Suggestions, Voices, Supervision", icon: Users },
    { name: "Seve267", role: "Scripting Help, DYOM Modder, Bug Fixer, Miscellaneous", icon: Users },
    { name: "Forge", role: "Scripting Help", icon: Users },
    { name: "Elrico", role: "Mission Testing, Promotional Screenshots, Server Contribution", icon: Users },
    { name: "Urafael games", role: "Coding Expertise and ASI Development", icon: Users } 
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
            Development Team
          </h2>
          <p className="text-xl text-muted-foreground">
            The talented creators behind GTA San Andreas Stories
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Core Development Team */}
          <Card className="card-glass hover-lift border-primary/20 shadow-glow">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-lg">
              <CardTitle className="text-2xl font-heading text-gradient flex items-center">
                <Users className="h-7 w-7 mr-3 text-primary animate-pulse-slow" />
                Core Development Team
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {developmentTeam.map((member, index) => {
                  const IconComponent = member.icon || Users;
                  return (
                    <div key={index} className={`group relative overflow-hidden p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                      member.gradient 
                        ? `bg-gradient-to-r ${member.gradient} bg-opacity-10 border border-primary/20 shadow-md` 
                        : 'bg-muted/20 hover:bg-muted/30 border border-muted/30'
                    }`}>
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${member.gradient ? 'bg-white/10' : 'bg-primary/10'}`}>
                          <IconComponent className={`h-5 w-5 ${member.gradient ? 'text-white' : 'text-primary'}`} />
                        </div>
                        <div className="flex-1">
                          <div className={`font-bold text-lg ${member.gradient ? 'text-white' : 'text-foreground'}`}>
                            {member.name}
                          </div>
                          <div className={`text-sm leading-relaxed ${member.gradient ? 'text-white/80' : 'text-muted-foreground'}`}>
                            {member.role}
                          </div>
                        </div>
                      </div>
                      {member.gradient && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Special Contributors */}
          <Card className="card-glass hover-lift border-secondary/20 shadow-glow">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-t-lg">
              <CardTitle className="text-2xl font-heading text-gradient flex items-center">
                <Star className="h-7 w-7 mr-3 text-secondary animate-glow" />
                Special Contributors
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {specialContributors.map((contributor, index) => (
                  <div key={index} className="group relative overflow-hidden p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Star className="h-4 w-4 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-foreground">{contributor.name}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">{contributor.role}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Thanks */}
        <Card className="card-glass hover-lift border-accent/20 shadow-glow">
          <CardHeader className="bg-gradient-to-r from-accent/10 to-destructive/10 rounded-t-lg">
            <CardTitle className="text-2xl font-heading text-gradient flex items-center justify-center">
              <Heart className="h-7 w-7 mr-3 text-accent animate-pulse" />
              Special Thanks
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center p-8">
            <p className="text-muted-foreground mb-6 text-lg">
              This mod integrates work from talented creators including:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {specialThanks.map((name, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-base bg-gradient-to-r from-accent/20 to-primary/20 text-accent border-accent/30 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-md">
                  {name}
                </Badge>
              ))}
            </div>
            <div className="bg-gradient-to-r from-transparent via-accent/10 to-transparent p-4 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                Full credits available in modpack files and many others who contributed to this project.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CreditsSection;
