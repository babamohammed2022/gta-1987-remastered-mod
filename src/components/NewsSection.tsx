import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NewsSection = () => {
  const { t } = useLanguage();

  const news = [
    {
      id: 1,
      title: "Chapter 2 Released - The Return Continues",
      date: "2025-01-15",
      category: "Release",
      excerpt: "Experience the next chapter of Ryder's journey with enhanced missions, new characters, and improved gameplay mechanics.",
      isNew: true,
    },
    {
      id: 2,
      title: "Modpack Updated - Performance Improvements",
      date: "2025-01-10",
      category: "Update",
      excerpt: "Latest modpack includes bug fixes, performance optimizations, and compatibility improvements for better stability.",
      isNew: true,
    },
    {
      id: 3,
      title: "Community Showcase - Fan Screenshots",
      date: "2025-01-05",
      category: "Community",
      excerpt: "Check out amazing screenshots and videos created by our community members showcasing their Los Santos adventures.",
      isNew: false,
    },
  ];

  return (
    <section id="news" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Latest News & Updates
          </h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest developments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="card-glass hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={item.category === "Release" ? "default" : "secondary"}>
                    {item.category}
                  </Badge>
                  {item.isNew && (
                    <Badge className="bg-red-500 text-white">NEW</Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-heading text-primary">
                  {item.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-primary hover:text-primary-glow transition-colors cursor-pointer">
                  <span className="text-sm font-medium">Read More</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;