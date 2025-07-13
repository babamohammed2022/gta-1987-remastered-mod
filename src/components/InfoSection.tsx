import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const InfoSection = () => {
  return (
    <section id="info" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Mod Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into the streets of 1987 Los Santos with this immersive total conversion
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Info Card */}
          <Card className="card-glass hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">
                About the Mod
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">GTA San Andreas Stories</strong>, also known as 
                <strong className="text-secondary"> GTA San Andreas Stories: The Return of Ryder</strong> or 
                <strong className="text-accent"> GTA San Andreas Stories: 1987</strong>, is a fan-made mod 
                developed by <strong className="text-primary">babamohammed2022</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                This mod utilizes <strong className="text-foreground">DYOM 8.1</strong> and focuses on 
                Ryder's return to Los Santos in 1987, embarking on new adventures while reconnecting 
                with familiar faces from the past.
              </p>

              <div className="pt-4">
                <Button 
                  asChild
                  className="btn-gaming w-full sm:w-auto"
                >
                  <a href="https://discord.gg/t5SjMrAJNh" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Join Discord Community
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card className="card-glass hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-secondary">
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Set in 1987 Los Santos during CJ's absence
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Play as Lance "Ryder" Wilson returning from Vice City
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Three intense chapters of gang warfare
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  New missions and side activities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Enhanced graphics and retextures
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  Multiple gang factions and alliances
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Compatibility Warning */}
        <Alert className="border-warning bg-warning/10">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <AlertDescription className="text-warning-foreground">
            <strong className="font-semibold">Important Compatibility Notes:</strong>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• <strong>Widescreen mod</strong> may cause crashes - remove from Modloader</li>
              <li>• <strong>SAMP (San Andreas Multiplayer)</strong> is incompatible</li>
              <li>• <strong>Animation/Ragdoll mods</strong> not supported</li>
              <li>• <strong>Recommended:</strong> Clean GTA San Andreas v1.0 installation</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default InfoSection;