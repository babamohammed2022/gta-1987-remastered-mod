import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
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
            Dive deep into the streets of 1987 Los Santos
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
                <strong className="text-accent"> GTA San Andreas Stories: 1987</strong>, is a fan-made prequel 
                to the classic <strong className="text-primary">Grand Theft Auto: San Andreas</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                This mod utilizes <strong className="text-foreground">DYOM 8.1</strong> and focuses on 
                Ryder's return to Los Santos in 1987, embarking on new adventures while reconnecting 
                with familiar faces from the past.
              </p>

              <div className="pt-4">
                <Button 
                  asChild
                  className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white border-sky-500 hover:border-sky-600 font-semibold"
                >
                  <a href="https://discord.gg/t5SjMrAJNh" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.565 18.565 0 0 0-5.487 0 12.246 12.246 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.246.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.201 0 2.176 1.068 2.157 2.38 0 1.311-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.201 0 2.176 1.068 2.157 2.38 0 1.311-.956 2.38-2.157 2.38z"/>
                    </svg>
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
              <li>• <strong>Widescreen mods</strong> may cause crashes - having multiple widescreen mods at once can create conflicts</li>
              <li>• <strong>SAMP (San Andreas Multiplayer)</strong> is incompatible</li>
              <li>• <strong>Animation/Ragdoll mods</strong> are not supported</li>
              <li>• <strong>Highly suggested:</strong> Avoid adding multiple modpacks as this may cause compatibility issues, crashes or other problems</li>
              <li>• <strong>Recommended:</strong> Clean GTA San Andreas v1.0 installation</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default InfoSection;
