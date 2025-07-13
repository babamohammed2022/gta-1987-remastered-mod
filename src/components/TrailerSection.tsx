import { useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const TrailerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="trailer" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Official Trailer
          </h2>
          <p className="text-xl text-muted-foreground">
            Get a taste of the action and atmosphere
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl hover-glow">
            <iframe
              src="https://www.youtube.com/embed/HwAeEBFTvME?autoplay=0&rel=0&modestbranding=1"
              title="GTA San Andreas Stories Trailer"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/2 -left-6 w-4 h-4 bg-accent rounded-full animate-pulse opacity-40"></div>
        </div>

        {/* Video Info */}
        <div className="text-center mt-8">
          <div className="card-glass p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-2 text-secondary">
              Chapter 2 Trailer - Updated
            </h3>
            <p className="text-muted-foreground">
              Watch Ryder navigate the dangerous streets of 1987 Los Santos, facing new enemies 
              and old allies in this action-packed preview of the latest chapter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;