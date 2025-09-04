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
      answer: "Yes, it partially changes. Some mechanics are now more similar to those in older GTA titles, such as GTA LCS and GTA VCS. For example, the Good Citizen Bonus (a small cash reward, usually $50, earned by knocking over criminals or gang members who are being chased by police on foot) has been reintroduced with very similar mechanics."
    },
    {
      question: "Are there optional side missions included in the mod?",
      answer: "Yes, side missions like Pizza Delivery, Trash Dash, and an upcoming Drug Bust Operation are featured, with mission vehicles accessible in locations such as Idlewood and Willowfield."
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
      question: "What are the limitations of this mod?",
      answer: "This mod does not support multiplayer (like SAMP), heavy CLEO mods, or total conversion packs. It's built for a single-player gameplay with a focus on custom missions and storyline."
    },
    {
      question: "Are there any special features or hidden easter eggs included in the mod?",
      answer: "Yes, the mod includes several hidden easter eggs such as secret locations (hint: Visit Big Smoke's crack palace to find something interesting), unique dialogue lines, and references to classic GTA lore that players can discover throughout Los Santos."
    },
    {
      question: "Are there special collectibles or hidden items unique to this mod?",
      answer: "Yes, GTA SAS features unique collectibles, such as cigarettes, scattered throughout Los Santos for players to find."
    },
    {
      question: "Are there any rampages inspired by GTA VCS/GTA VC in the mod?",
      answer: "Yes, the modification introduces 10 new rampages inspired by GTA VCS/GTA VC. These include Killing Rampages, in which the player must eliminate a specified number of enemies within a set time frame, and Vehicle Destroying Rampages, in which the objective is to destroy vehicles within the allotted time."
    },
    {
      question: "Are there cheat codes or special scripts included?",
      answer: "Yes, the game does include several cheat codes and special scripts. Among these are codes that allow players to change outfits, as well as others that provide access to various weapons."
    },
    {
      question: "Is there a mobile port of the mod?",
      answer: "An unofficial mobile port was created by GTA Mobile Modding. This version is based on an older build and may lack features and improvements from the official release. You can watch a visual representation of the first version of this fan project <a href='https://www.youtube.com/watch?v=c1ujc_W_C6M' style='text-decoration: underline;' target='_blank'>here</a>.";"
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

        {/* Search Bar */}
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

        {/* FAQ Grid */}
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
            <p className="text-muted-foreground text-lg">
              No results found
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
