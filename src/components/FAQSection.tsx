import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    },
    {
      question: t('faq.q6'),
      answer: t('faq.a6')
    },
    {
      question: t('faq.q7'),
      answer: t('faq.a7')
    },
    {
      question: t('faq.q8'),
      answer: t('faq.a8')
    },
    {
      question: t('faq.q9'),
      answer: t('faq.a9')
    },
    {
      question: t('faq.q10'),
      answer: t('faq.a10')
    },
    {
      question: t('faq.q11'),
      answer: t('faq.a11')
    },
    {
      question: t('faq.q12'),
      answer: t('faq.a12')
    },
    {
  question: "How do I become a developer/staff?",
  answer: "Join the Discord server and open a ticket to apply for staff/developer positions. Share at least one of your works, and the owner/staff will decide if you are in or not."
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
      answer: "This mod does not support multiplayer (like SAMP), heavy CLEO mods, or total conversion packs."
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
            {t('faq.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder={t('faq.search')}
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
              {t('faq.noResults')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
