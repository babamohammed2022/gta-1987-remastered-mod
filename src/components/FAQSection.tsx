import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      question: "Where is the setting of the mod?",
      answer: "The mod is set in 1987 in the city of Los Santos, a place on the brink of chaos where gangs, including the Grove Street Families, battle for control."
    },
    {
      question: "Who is the main protagonist of the story?",
      answer: "The protagonist is Lance \"Ryder\" Wilson, a loyal member of the Grove Street Families who returns to Los Santos from Vice City to help the gang during CJ's absence."
    },
    {
      question: "Why did CJ leave Los Santos?",
      answer: "CJ, or Carl Johnson, left Los Santos after the tragic death of his brother, Brian. He went to Liberty City to cope with the loss, leaving Sweet and the others behind to handle the gang."
    },
    {
      question: "Who are the main antagonists in the game?",
      answer: "The primary antagonist is Victor \"Viper\" Mendez, a dangerous drug kingpin aiming to expand his empire in Los Santos, seeing the Grove Street Families as a major obstacle."
    },
    {
      question: "Are there multiple chapters in the storyline?",
      answer: "Yes, the mod is divided into three chapters, each featuring intense gang warfare and missions that push Ryder and the Grove Street Families to their limits."
    },
    {
      question: "Is there any word on additional content or expansions?",
      answer: "Yes, once the mod is finished, there are plans for downloadable content (DLC) to further enrich the storyline and features."
    },
    {
      question: "How do I stay updated about the progress?",
      answer: "You can find updates on the official Discord server or by following the YouTube channel \"cerdopalo.\""
    },
    {
      question: "Will this mod significantly change GTA San Andreas?",
      answer: "Yes, the mod will overhaul many aspects of the game, including missions, characters, gameplay mechanics, and graphics, offering a fresh experience set in 1987 Los Santos."
    },
    {
      question: "What gangs are involved in the storyline?",
      answer: "The game features several gangs, such as the Grove Street Families, Ballas, La Sombra del Cuervo, Vagos, Seville Boulevard Families, Temple Drive Families, Aztecas, Russian Mafia, and Sindaccos."
    },
    {
      question: "Who are the Grove Street Families' allies?",
      answer: "The Grove Street Families are allied with the Seville Boulevard Families, Temple Drive Families, and Tommy Vercetti."
    },
    {
      question: "What is Ryder's history in Vice City?",
      answer: "Ryder worked for Tommy Vercetti in Vice City before returning to Los Santos to reconnect with the Grove Street Families and continue his role in the gang."
    },
    {
      question: "Are there any side missions in the mod?",
      answer: "Yes, the mod includes side missions like Pizza Delivery, Trash Dash, and Drug Bust Operation, with vehicles available at various locations around the map, including Idlewood and Willowfield."
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
            Everything you need to know about the mod
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
              No FAQs found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;