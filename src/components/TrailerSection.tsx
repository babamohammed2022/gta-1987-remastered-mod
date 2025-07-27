import { useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TrailerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="trailer" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            {t('trailer.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('trailer.subtitle')}
          </p>
        </div>

        {/* Main Trailer */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl hover-glow">
            <iframe
              src="https://www.youtube.com/embed/HwAeEBFTvME?autoplay=0&rel=0&modestbranding=1"
              title="GTA San Andreas Stories – Official Trailer"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/2 -left-6 w-4 h-4 bg-accent rounded-full animate-pulse opacity-40"></div>
        </div>

        {/* Description and Extra Links */}
        <div className="text-center mt-10">
          <div className="card-glass p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-2 text-secondary">
              {t('trailer.chapterTitle')}
            </h3>
            <p className="text-muted-foreground">
              {t('trailer.description')}
            </p>
            <p className="mt-4 text-muted-foreground">
              If you’d like to dive deeper, check out these extra videos:
              <br />
              <a
                href="https://www.youtube.com/watch?v=dxGCcrt5jFU"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mod Overview
              </a>{" "}
              – A full breakdown of the mod’s content and structure.
              <br />
              <a
                href="https://www.youtube.com/watch?v=O9SIIMx9lW0"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Introduction
              </a>{" "}
              – A short intro explaining the story background.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;
