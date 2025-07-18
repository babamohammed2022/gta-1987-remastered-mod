import { Card, CardContent } from "@/components/ui/card";
import { Download, Users, Star, Calendar, MapPin, Gamepad2 } from "lucide-react";

const StatisticsSection = () => {
  const statistics = [
    {
      icon: Download,
      title: "Total Downloads",
      value: "25,847",
      description: "Downloads across all platforms",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Active Players",
      value: "3,200+",
      description: "Monthly active community members",
      color: "text-green-400"
    },
    {
      icon: Star,
      title: "Community Rating",
      value: "4.8/5",
      description: "Average user rating score",
      color: "text-yellow-400"
    },
    {
      icon: Calendar,
      title: "Development Time",
      value: "18 Months",
      description: "Total development duration",
      color: "text-purple-400"
    },
    {
      icon: MapPin,
      title: "New Missions",
      value: "15+",
      description: "Custom missions designed",
      color: "text-red-400"
    },
    {
      icon: Gamepad2,
      title: "Game Compatibility",
      value: "100%",
      description: "San Andreas compatibility rate",
      color: "text-cyan-400"
    }
  ];

  return (
    <section id="statistics" className="py-20 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            Project Statistics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers showcasing the impact and reach of our GTA San Andreas modification project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="group border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500`}>
                      <Icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-full ${stat.color.replace('text-', 'bg-')}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {stat.title}
                    </h3>
                    <div className={`text-4xl font-bold font-heading ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-card/30 backdrop-blur-sm border border-border/30 rounded-full px-6 py-3">
            <Calendar className="h-4 w-4" />
            <span>Statistics updated monthly • Last update: January 2024</span>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Mission Completion</span>
              <span className="text-foreground font-semibold">92%</span>
            </div>
            <div className="w-full bg-border/30 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse" style={{ width: '92%' }} />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Community Growth</span>
              <span className="text-foreground font-semibold">78%</span>
            </div>
            <div className="w-full bg-border/30 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-pulse" style={{ width: '78%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;