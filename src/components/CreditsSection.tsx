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
    <section id="credits" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Credits
          </h2>
          {/* Paragraph removed */}
        </div>

        {/* Core Team & Contributors */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Core Development Team */}
          <Card className="card-glass hover-lift border border-purple-600/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-purple-400 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Core Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {developmentTeam.map((member, index) => (
                  <div key={index} className="flex flex-col p-4 rounded-xl bg-purple-900/10 hover:bg-purple-700/20 transition-all border border-purple-600/20 shadow-sm">
                    <div className="font-semibold text-purple-300">{member.name}</div>
                    <div className="text-sm text-gray-300">{member.role}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Special Contributors */}
          <Card className="card-glass hover-lift border border-yellow-500/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-yellow-400 flex items-center">
                <Star className="h-6 w-6 mr-2" />
                Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specialContributors.map((contributor, index) => (
                  <div key={index} className="flex flex-col p-4 rounded-xl bg-yellow-900/10 hover:bg-yellow-700/20 transition-all border border-yellow-500/20 shadow-sm">
                    <div className="font-semibold text-yellow-300">{contributor.name}</div>
                    <div className="text-sm text-gray-300">{contributor.role}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Thanks */}
        <Card className="card-glass hover-lift border border-pink-500/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-pink-400 flex items-center justify-center">
              <Heart className="h-6 w-6 mr-2" />
              Special Thanks
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-300 mb-4">
              We want to express our deepest gratitude to everyone who supported this project.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {specialThanks.map((name, index) => (
                <Badge key={index} variant="outline" className="bg-pink-900/20 text-pink-400 border-pink-500/30">
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
