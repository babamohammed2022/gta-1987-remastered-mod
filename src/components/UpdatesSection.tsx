import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, AlertCircle } from "lucide-react";

const UpdatesSection = () => {
  const updates = [
    {
      version: "v2.1.0",
      date: "2024-01-15",
      type: "Major Update",
      title: "New Mission Pack Released",
      description: "Added 5 new missions with enhanced AI voices and improved graphics.",
      changes: [
        "New mission: 'Desert Storm' with custom vehicles",
        "Enhanced voice acting for main characters",
        "Improved texture quality for San Andreas landscapes",
        "Bug fixes for mission checkpoints"
      ]
    },
    {
      version: "v2.0.5",
      date: "2024-01-08",
      type: "Hotfix",
      title: "Critical Bug Fixes",
      description: "Resolved several game-breaking issues reported by the community.",
      changes: [
        "Fixed crash during mission 'Grove Street Home'",
        "Corrected audio sync issues",
        "Improved mod compatibility",
        "Performance optimizations"
      ]
    },
    {
      version: "v2.0.0",
      date: "2023-12-20",
      type: "Major Release",
      title: "Complete Overhaul",
      description: "Major update with completely redesigned missions and enhanced gameplay.",
      changes: [
        "Redesigned all 15 core missions",
        "New AI voice system implementation",
        "Updated graphics and textures",
        "Improved vehicle handling and physics",
        "New soundtrack and sound effects"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Major Update":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Major Release":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Hotfix":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section id="updates" className="py-20 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            Latest Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest improvements, bug fixes, and new features for GTA SAS.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {updates.map((update, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className={`px-3 py-1 font-semibold ${getTypeColor(update.type)}`}>
                        {update.type}
                      </Badge>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {update.version}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {update.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(update.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">{update.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-primary" />
                    What's Changed:
                  </h4>
                  <ul className="space-y-1 ml-6">
                    {update.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="text-sm text-muted-foreground relative before:content-['•'] before:text-primary before:font-bold before:absolute before:-left-4">
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            <AlertCircle className="h-4 w-4 inline mr-2" />
            Updates are managed by the development team. Check back regularly for new releases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;