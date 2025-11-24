import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const faqs = [
    {
      question: "In what year and location does the mod take place?",
      answer: "The mod is set in 1987 in Los Santos, a city on the brink of chaos where rival gangs, including the notorious Grove Street Families, battle for control."
    },
    {
      question: "Who is the central figure leading the story?",
      answer: 'The main character is Lance "Ryder" Wilson, a loyal member of the Grove Street Families who returns from Vice City to strengthen the gang during CJ\'s absence.'
    },
    {
      question: "What prompted CJ to leave Los Santos originally?",
      answer: "CJ, or Carl Johnson, departed Los Santos after his brother Brian's death, relocating to Liberty City and leaving the Grove Street Families in the care of his brother Sweet and others."
    },
    {
      question: "Which characters serve as the primary antagonists in this narrative?",
      answer: 'Victor "Viper" Mendez is the main antagonist, a merciless drug lord connected to a South American cartel aiming to expand his empire throughout Los Santos, targeting the Grove Street Families.'
    },
    {
      question: "Does the storyline consist of multiple parts or chapters?",
      answer: "Yes, the storyline is structured into three intense chapters featuring brutal gang wars and missions that challenge Ryder and his crew."
    },
    {
      question: "Is there any news about future expansions or additional content?",
      answer: "Plans include downloadable content (DLC) to extend and enrich the mod's storyline and gameplay after the initial release."
    },
    {
      question: "Where can I get the latest news and updates about the mod's development?",
      answer: 'Updates are available on the official Discord server and the YouTube channel named "cerdopalo."'
    },
    {
      question: "How drastically will this mod alter the original Grand Theft Auto: San Andreas experience?",
      answer: "The mod significantly revamps many aspects including missions, characters, gameplay systems, and visuals to create an alternative 1987 Los Santos experience."
    },
    {
      question: "Which gangs are featured within the mod's storyline?",
      answer: "Gangs such as the Grove Street Families, Ballas, La Sombra del Cuervo, Vagos, Seville Boulevard Families, Temple Drive Families, Aztecas, Russian Mafia, and Sindaccos play roles in the story."
    },
    {
      question: "Who allies with the Grove Street Families throughout the story?",
      answer: "Their allies include the Seville Boulevard Families, Temple Drive Families, and Tommy Vercetti."
    },
    {
      question: "What is Ryder's background prior to returning to Los Santos?",
      answer: "Ryder worked for Tommy Vercetti in Vice City before coming back to rejoin the Grove Street Families."
    },
    {
      question: "Are there new characters introduced specifically for this mod?",
      answer: "Yeah, there are some new characters included, like new officers, new enemies (like Victor Mendez), and new allies such as LB."
    },
    {
      question: "Does AI behavior change compared to the original game?",
      answer: "Yes, it partially changes. Some mechanics are now more similar to those in older GTA titles, such as GTA LCS and GTA VCS. For example, the Good Citizen Bonus has been reintroduced with very similar mechanics."
    },
    {
      question: "Are there optional side missions included in the mod?",
      answer: "Yes, side missions like Pizza Delivery, Trash Dash, and an upcoming Drug Bust Operation are featured, with mission vehicles accessible in locations such as Idlewood and Willowfield."
    },
    {
      question: "Does the mod support GInput or controller mods?",
      answer: "No, the mod does not support GInput or controller mods. It is designed for keyboard controls only. If you manage to get a controller working with the mod, please inform the development team or the project owner."
    },
    {
      question: "Can I replay missions or choose mission order?",
      answer: "You can replay missions by restarting the storyline, but the mission order cannot be changed. The storyline remains linear."
    },
    {
      question: "Does the mod work on Windows 10/11 or only older PCs?",
      answer: "From various tests, the mod is confirmed to work on Windows 7 (with solid performance), Windows 10, and Windows 11. It is unknown if the mod works on older operating systems like Windows Vista."
    },
    {
      question: "Where do I install the modpack?",
      answer: "Install the modpack in your main GTA San Andreas folder. It must be a clean installation without SAMP or any other mods."
    },
    {
      question: "Where do I install DYOM and the storyline?",
      answer: "Install DYOM and the storyline into your GTA San Andreas User Files folder (found in Documents). CLEO 5 is required. Do NOT place the storyline into the main game directory or the modpack into the User Files — this will break the mod."
    },
    {
      question: "Can I install DYOM inside the GTA San Andreas directory?",
      answer: "No. DYOM must be installed in Documents/GTA San Andreas User Files, not inside the main game directory. Placing it in the wrong folder will cause crashes or prevent the mod from loading."
    },
    {
      question: "What are the limitations of this mod?",
      answer: "This mod does not support multiplayer (like SAMP), heavy CLEO mods, or total conversion packs. It's built for a single-player gameplay with a focus on custom missions and storyline."
    },
    {
      question: "Are there any special features or hidden easter eggs included in the mod?",
      answer: "Yes, the mod includes several hidden easter eggs such as secret locations, unique dialogue lines, and references to classic GTA lore that players can discover throughout Los Santos."
    },
    {
      question: "Are there special collectibles or hidden items unique to this mod?",
      answer: "Yes, GTA SAS features unique collectibles, such as cigarettes, scattered throughout Los Santos for players to find."
    },
    {
      question: "Are there any rampages inspired by GTA VCS/GTA VC in the mod?",
      answer: "Yes, the modification introduces 10 new rampages inspired by GTA VCS/GTA VC."
    },
    {
      question: "Are there cheat codes or special scripts included?",
      answer: "Yes, the game includes several cheat codes and special scripts, including outfit-changing cheats and weapon access codes."
    },
    {
      question: "Why does a mission softlock or crash?",
      answer: 'If you encounter a mission bug, freeze, or softlock, you can temporarily bypass it by typing the cheat code "SKIP", that allows you to omit the on-going mission. This will allow you to continue playing while the bug is being investigated or fixed.'
    },
    {
      question: "Why does the red mission marker disappear after long play sessions?",
      answer: "This can happen due to engine memory leakage during extended gameplay sessions. Restarting the game is recommended to restore the markers. (Note: Saving your story progress is recommended.)"
    },
    {
      question: "Is the mod playable on GTA SA Definitive Edition?",
      answer: "No, the mod is made solely for GTA San Andreas standard PC. There's an unofficial alpha Android version that could be enhanced in the future."
    },
    {
      question: "Can I use my existing save files with this mod?",
      answer: "No. This mod uses a completely different storyline and setup. Old save files are not compatible."
    },
    {
      question: "Is there a mobile port of the mod?",
      answer: (
        <>
          An unofficial mobile port was created by GTA Mobile Modding. This version is based on an older build and may lack features and improvements from the official release. You can watch a visual representation{" "}
          <a
            href="https://www.youtube.com/watch?v=c1ujc_W_C6M"
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </>
      )
    },
    {
      question: "Does the mod work on the Steam version of GTA SA?",
      answer: "It only works with GTA San Andreas v1.0. Steam users must downgrade before installation."
    },
    {
      question: "Can I free roam outside of missions?",
      answer: "Yes, you can explore Los Santos freely between missions, with side activities and collectibles available."
    },
    {
      question: "Is the mod compatible with other GTA San Andreas modifications?",
      answer: "The team aims to maintain compatibility, but the mod is not compatible with SA-MP or ragdoll-based mods. Installing external mods outside the official modpack is discouraged unless approved by the owner."
    },
    {
      question: "How can I become a tester?",
      answer: "Join the official Discord server and send a direct message to the owner to apply."
    },
    {
      question: "How can I become a developer or helper?",
      answer: "Join the Discord server and open a ticket. A staff member or developer will guide you through the process."
    },
    {
      question: "Are there new weapons and vehicles in the mod?",
      answer: "Yes. The mod adds new vehicles, including classic models like the Deluxo and Sabre Turbo, along with new weapons such as the Taser. Several existing weapons have been adjusted to better match the 1987 setting."
    },
    {
      question: "Are there new mapping updates in the mod?",
      answer: "Yes, new mapping changes have been implemented across Los Santos to represent the 1987 environment and the Stories-style aesthetic."
    },
    {
      question: "Will players be able to add their own mods or skins safely?",
      answer: "Adding external mods or custom skins is strongly discouraged, as improper files can easily break the modpack or cause instability. If you want to see a new skin included, simply suggest it to the project owner, who will review it and decide whether to implement it in an official update."
    }
  ];

  const filteredFAQs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about the mod
          </p>
        </div>

        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card border-border focus:border-primary"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredFAQs.map((faq, index) => (
            <Card key={index} className="card-glass hover-lift">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-primary">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No results found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
