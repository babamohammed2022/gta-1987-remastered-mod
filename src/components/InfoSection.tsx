import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const FEATURES = [
  { color: "bg-primary", text: "Set in 1987 Los Santos during CJ's absence" },
  { color: "bg-secondary", text: 'Play as Lance "Ryder" Wilson returning from Vice City' },
  { color: "bg-accent", text: "Three intense chapters of gang warfare" },
  { color: "bg-primary", text: "New missions and side activities" },
  { color: "bg-secondary", text: "Enhanced graphics and retextures" },
  { color: "bg-accent", text: "Multiple gang factions and alliances" },
];

const COMPATIBILITY_NOTES = [
  "Widescreen mods may cause crashes - having multiple widescreen mods at once can create conflicts",
  "SAMP (San Andreas Multiplayer) is incompatible",
  "Animation/Ragdoll mods are not supported",
  "Highly suggested: Avoid adding multiple modpacks as this may cause compatibility issues, crashes or other problems",
  "Recommended: Clean GTA San Andreas v1.0 installation",
];

const InfoSection = () => {
  return (
    <section id="info" aria-labelledby="info-title" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2
            id="info-title"
            className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient"
          >
            Mod Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into the streets of 1987 Los Santos
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* About Card */}
          <Card className="card-glass hover-lift">
            <article>
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  About the Mod
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">GTA San Andreas Stories</strong>, also known as{' '}
                  <strong className="text-secondary">GTA San Andreas Stories: The Return of Ryder</strong>{' '}
                  or{' '}
                  <strong className="text-accent">GTA San Andreas Stories: 1987</strong>, is a fan-made prequel
                  to the classic{' '}
                  <strong className="text-primary">Grand Theft Auto: San Andreas</strong>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  This mod utilizes <strong className="text-foreground">DYOM 8.1</strong> and focuses on
                  Ryder's return to Los Santos in 1987, embarking on new adventures while reconnecting
                  with familiar faces from the past.
                </p>

                <div className="pt-4">
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <a
                      href="https://discord.gg/t5SjMrAJNh"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Join the GTA San Andreas Stories Discord community"
                    >
                      <svg
                        aria-hidden="true"
                        className="mr-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.565 18.565 0 0 0-5.487 0 12.246 12.246 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.246.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z" />
                      </svg>
                      Join Discord Community
                    </a>
                  </Button>
                </div>
              </CardContent>
            </article>
          </Card>

          {/* Features Card */}
          <Card className="card-glass hover-lift">
            <article>
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-secondary">
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  {FEATURES.map((feature) => (
                    <li key={feature.text} className="flex items-start">
                      <span
                        aria-hidden="true"
                        className={`w-2 h-2 ${feature.color} rounded-full mt-2.5 mr-3 flex-shrink-0`}
                      />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </article>
          </Card>
        </div>

        {/* Compatibility Alert */}
        <Alert className="border-warning bg-warning/10">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <AlertDescription className="text-warning-foreground">
            <strong className="font-semibold">Important Compatibility Notes:</strong>
            <ul className="mt-2 space-y-1 text-sm">
              {COMPATIBILITY_NOTES.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default memo(InfoSection);
