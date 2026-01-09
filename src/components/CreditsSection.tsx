import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Heart } from "lucide-react";

const CreditsSection = () => {
  const developmentTeam = [
    { name: "babamohammed2022", role: "Scripting, In-game Photography, Supervision, Optimization" },
    { name: "Abdullah", role: "Website Design, Models, Suggestions, Programming" },
    { name: "FrankoU", role: "Mapping Specialist, Artist, Server Administration, Retexturing, Screenshot Production, Artworks" },
    { name: "avixreal", role: "Supervision, Website Assistance, Website Design" },
    { name: "The Small Chese", role: "Mission Design, Creative Direction" },
    { name: "Armando", role: "Sounds, Retexture, Supervisor, Tester, Screenshots, Missions Designer, Administration, Moderation, Suggestions, Videos and Clips, Bug Reports" },
    { name: "Mike", role: "Missions, In-game Photography" },
    { name: "JoGamer", role: "Animations, Modelling, Suggestions, Screenshots, Artistic collaboration" },
    { name: "GTAMissionsCreator", role: "Video Production" },
    { name: "Noobshakespeare", role: "Retexturing, Mission Testing, Bug Report" },
    { name: "karammii", role: "Billboards Design" },
    { name: "Jmanuc", role: "Screenshots, Suggestions, Supervision, Optimization, Artworks, Atmosphere Enhancements, Research" },
    { name: "Rayane", role: "Suggestions, Supervision" },
    { name: "Seve267", role: "Scripting Help, DYOM Modder, Bug Fixer, Miscellaneous" },
    { name: "Forge", role: "Scripting Help" },
    { name: "Elrico", role: "Mission Testing, Promotional Screenshots, Server Contribution" },
    { name: "Reaper", role: "HUD improvements, Weapon Icons, Supervision" },
    { name: "Sadie", role: "Supervision" },
  ];

  const specialContributors = [
    { name: "Rule Breakers", role: "Environmental Mapping" },
    { name: "Bolszewik", role: "In-game Photography" },
    { name: "14todoeltiempodc", role: "Weapon Retextures" },
    { name: "NorthStationX", role: "Billboards Design, Logo Creation" },
    { name: "FrankoU", role: "Special Mods (Vehicles Parked in Airport LS, Beta Sweet House, and others)" },
    { name: "Lost MC Claude", role: "Bug Testing" },
    { name: "JoGamer", role: "Fixed radar icons" },
    { name: "MAHMOGAMER", role: "Project Supervision" },
    { name: "MaxMakoShark", role: "Server Supervision" },
    { name: "Tix", role: "Gameplay Testing" },
    { name: "Raul", role: "Visual Enhancements, Mission Testing and Enhancing, Storyline Improvements, Video Recording, Supervision, Bug Reports" },
    { name: "Urafael Games", role: "Coding Expertise and ASI Development" },
    { name: "Fikan", role: "Remapping Artist" }
  ];

  const specialThanks = [
    "Endochronic", "SASquad", "Yucark", "TheMadeMan"
  ];

  return (
    <section id="credits" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Credits
          </h2>
          <p className="text-xl text-muted-foreground">
            Meet the amazing team behind this project who made everything possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Core Development Team */}
          <Card className="card-glass hover-lift border border-gray-700/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-red-500 flex items-center">
                <Users className="h-6 w-6 mr-2 text-red-400" />
                Core Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {developmentTeam.map((member, index) => (
                  <div key={index} className="flex flex-col space-y-1 p-3 rounded-lg bg-gray-800/10 hover:bg-gray-800/20 transition-colors border border-gray-700/20">
                    <div className="font-semibold text-white">{member.name}</div>
                    <div className="text-sm text-gray-300">{member.role}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Special Contributors */}
          <Card className="card-glass hover-lift border border-gray-700/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-red-500 flex items-center">
                <Star className="h-6 w-6 mr-2 text-yellow-400" />
                Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specialContributors.map((contributor, index) => (
                  <div key={index} className="flex flex-col space-y-1 p-3 rounded-lg bg-gray-800/10 hover:bg-gray-800/20 transition-colors border border-gray-700/20">
                    <div className="font-semibold text-white">{contributor.name}</div>
                    <div className="text-sm text-gray-300">{contributor.role}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Thanks */}
        <Card className="card-glass hover-lift border border-gray-700/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-red-500 flex items-center justify-center">
              <Heart className="h-6 w-6 mr-2 text-pink-400" />
              Special Thanks
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-300 mb-4">
              We want to express our deepest gratitude to everyone who supported this project.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {specialThanks.map((name, index) => (
                <Badge key={index} variant="outline" className="bg-gray-800/10 text-white border-gray-600/30">
                  {name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CreditsSection;
