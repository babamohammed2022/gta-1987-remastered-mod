import { useState, useCallback, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import screenshot5 from "@/assets/screenshot5.webp";
import screenshot6 from "@/assets/screenshot6.webp";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const images = useMemo(
    () => [
      {
        url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/c.png",
        alt: "Grove Street Scene",
      },
      {
        url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/Picsart_24-08-24_12-12-14-625.jpg",
        alt: "Vice City Vibes",
      },
      {
        url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/image.png",
        alt: "Los Santos Skyline",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/refs/heads/main/captura_by_FrankoU_28_2.webp",
        alt: "Gang Territory",
      },
      {
        url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/upscale.PNG",
        alt: "Weapon Selection",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/main/Media_Player_6_8_2025_12_16_01_P%20(1).png",
        alt: "Safe House Interior",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/babamohammed2022/main/2.webp",
        alt: "Vintage Billboard",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/babamohammed2022/main/Template_Paint.NET.webp",
        alt: "Character Lineup",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/small-cheese/main/Media_Player_12_7_2024_8_35_16_PM.webp",
        alt: "Mission Briefing",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/small-cheese/main/captura_by_FrankoU_28_18.webp",
        alt: "Car Chase",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/small-cheese/main/captura_by_FrankoU_28_19.webp",
        alt: "Custom Vehicle",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/refs/heads/main/image.webp",
        alt: "Script UI Preview",
      },
      {
        url: screenshot5,
        alt: "Enhanced Gameplay",
      },
      {
        url: screenshot6,
        alt: "Mission Cutscene",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/image%20(4).png",
        alt: "Screenshot 4 - GTA 1987 Remastered",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/image%20(5).png",
        alt: "Screenshot 5 - GTA 1987 Remastered",
      },
      // Newly added images
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/Media_Player_7_27_2025_9_49_30_A.png",
        alt: "Media Player Screenshot 1",
      },
      {
        url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/Media_Player_7_27_2025_9_49_21_A.png",
        alt: "Media Player Screenshot 2",
      },
    ],
    []
  );

  useEffect(() => {
    images.forEach(({ url }) => {
      const img = new Image();
      img.src = url;
    });
  }, [images]);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentIndex, false);
    }
  }, [currentIndex, carouselApi]);

  useEffect(() => {
    setImageLoaded(false);
    const timer = setTimeout(() => setImageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const toggleAutoplay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  return (
    <section id="gallery" className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gallery-bg via-gallery-bg/95 to-gallery-bg/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gallery-accent-glow)/0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gallery-accent-glow"></div>
            <span className="text-gallery-accent-glow text-sm font-medium tracking-wider uppercase">
              Visual Showcase
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gallery-accent-glow"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient animate-float">
            Gallery
          </h2>
          <p className="text-gallery-card/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore the stunning visuals and immersive scenes from our enhanced gaming experience
          </p>
        </div>

        {/* Main Image Display */}
        <div className="relative mb-12">
          <div className="relative aspect-video max-h-[600px] mx-auto rounded-3xl overflow-hidden shadow-gallery group">
            {/* Image Container with Enhanced Effects */}
            <div className="relative w-full h-full bg-gallery-bg">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                className={`w-full h-full object-contain transition-all duration-700 ease-out ${
                  imageLoaded 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-105"
                }`}
                loading="lazy"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-gallery-bg-overlay/20 via-transparent to-gallery-bg-overlay/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Enhanced Navigation Buttons */}
            <Button
              variant="gallery-nav"
              size="icon"
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 backdrop-blur-md hover:scale-110 transition-all duration-300"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="gallery-nav"
              size="icon"
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 backdrop-blur-md hover:scale-110 transition-all duration-300"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Enhanced Info Panel */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="backdrop-gallery text-white px-4 py-2 rounded-full border border-white/20">
                <span className="text-sm font-medium">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="gallery"
                  size="icon"
                  onClick={toggleAutoplay}
                  className="rounded-full w-10 h-10"
                  aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isAutoPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                
                <div className="backdrop-gallery text-white p-2 rounded-full border border-white/20 hover:border-gallery-accent-glow/50 transition-colors duration-300">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="absolute top-6 left-6 right-6">
              <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gallery-accent to-gallery-accent-glow transition-all duration-700 ease-out shadow-glow"
                  style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Image Title Overlay */}
            <div className="absolute bottom-20 left-6 right-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl font-semibold backdrop-gallery px-6 py-3 rounded-2xl inline-block border border-white/20">
                {images[currentIndex].alt}
              </h3>
            </div>
          </div>
        </div>

        {/* Enhanced Thumbnail Carousel */}
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: isAutoPlaying ? 4000 : 0,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            setApi={setCarouselApi}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8"
                >
                  <button
                    onClick={() => goToImage(index)}
                    className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-300 gallery-card-hover w-full border-2 ${
                      index === currentIndex
                        ? "border-gallery-accent-glow shadow-neon scale-105 animate-glow-pulse"
                        : "border-transparent hover:border-gallery-accent/50 opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Go to image ${index + 1}: ${image.alt}`}
                  >
                    <div className="relative w-full h-full bg-gallery-bg">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                        loading="eager"
                        decoding="async"
                      />
                      
                      {/* Thumbnail Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-gallery-bg-overlay/40 to-transparent transition-opacity duration-300 ${
                        index === currentIndex ? "opacity-0" : "opacity-100 hover:opacity-80"
                      }`} />
                      
                      {/* Active Indicator */}
                      {index === currentIndex && (
                        <div className="absolute inset-0 bg-gradient-to-t from-gallery-accent/20 to-transparent" />
                      )}
                    </div>

                    {/* Thumbnail Number */}
                    <div className="absolute top-2 right-2 bg-gallery-bg-overlay/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {index + 1}
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced Carousel Controls */}
            <CarouselPrevious 
              className="left-0 bg-gallery-bg-overlay/80 border-gallery-accent/30 text-white hover:bg-gallery-accent/20 hover:border-gallery-accent-glow hover:shadow-glow backdrop-blur-md" 
              aria-label="Previous Carousel" 
            />
            <CarouselNext 
              className="right-0 bg-gallery-bg-overlay/80 border-gallery-accent/30 text-white hover:bg-gallery-accent/20 hover:border-gallery-accent-glow hover:shadow-glow backdrop-blur-md" 
              aria-label="Next Carousel" 
            />
          </Carousel>
        </div>

        {/* Enhanced Disclaimer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 backdrop-gallery border border-white/10 rounded-2xl px-8 py-4">
            <div className="w-2 h-2 rounded-full bg-gallery-accent-glow animate-pulse" />
            <p className="text-gallery-card/80 text-sm leading-relaxed max-w-2xl">
              <span className="font-semibold text-gallery-accent-glow">Disclaimer:</span>{" "}
              All images in this gallery are in-game captures and may not reflect the final version. 
              Visual quality may vary based on device specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
