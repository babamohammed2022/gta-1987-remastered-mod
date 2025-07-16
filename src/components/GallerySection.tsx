import { useState, useCallback, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const images = useMemo(() => [
    {
      url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/c.png",
      alt: "Grove Street Scene"
    },
    {
      url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/Picsart_24-08-24_12-12-14-625.jpg",
      alt: "Vice City Vibes"
    },
    {
      url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/image.png",
      alt: "Los Santos Skyline"
    },
    {
      url: "https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/refs/heads/main/captura_by_FrankoU_28_2.webp",
      alt: "Gang Territory"
    },
    {
      url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/upscale.PNG",
      alt: "Weapon Selection"
    },
    {
      url: "https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/main/Media_Player_6_8_2025_12_16_01_P%20(1).png",
      alt: "Safe House Interior"
    },
    {
      url: "https://raw.githubusercontent.com/babamohammed2022/babamohammed2022/main/2.webp",
      alt: "Vintage Billboard"
    },
    {
      url: "https://raw.githubusercontent.com/babamohammed2022/babamohammed2022/main/Template_Paint.NET.webp",
      alt: "Character Lineup"
    },
    {
      url: "https://raw.githubusercontent.com/babamohammed2022/small-cheese/main/Media_Player_12_7_2024_8_35_16_PM.webp",
      alt: "Mission Briefing"
    },
    {
      url: "https://raw.githubusercontent.com/babamohammed2022/small-cheese/main/captura_by_FrankoU_28_18.webp",
      alt: "Car Chase"
    },
    {
      url: "https://raw.githubusercontent.com/babamohammed2022/small-cheese/main/captura_by_FrankoU_28_19.webp",
      alt: "Custom Vehicle"
    },
    {
      url: "https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/refs/heads/main/image.webp",
      alt: "Script UI Preview"
    },
    {
      url: screenshot5,
      alt: "Enhanced Gameplay"
    },
    {
      url: screenshot6,
      alt: "Mission Cutscene"
    }
  ], []);

  useEffect(() => {
    if (carouselApi) {
      setTimeout(() => {
        carouselApi.scrollTo(currentIndex, false);
      }, 100);
    }
  }, [currentIndex, carouselApi]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section id="screenshots" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Game Gallery
          </h2>
        </div>

        {/* Main Image Display with Scrolling Effect */}
        <div className="relative mb-8 overflow-hidden rounded-2xl shadow-2xl max-w-5xl mx-auto aspect-video">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover shrink-0 grow-0 basis-full"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Zoom Icon */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full z-10">
            <ZoomIn className="h-4 w-4" />
          </div>
        </div>

        {/* Scrolling Thumbnail Carousel */}
        <div className="mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            setApi={setCarouselApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/6">
                  <button
                    onClick={() => goToImage(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-200 will-change-transform w-full ${
                      index === currentIndex 
                        ? 'ring-2 ring-primary shadow-neon scale-105' 
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            <strong>Disclaimer:</strong> This mod is not affiliated with Rockstar Games in any way. 
            It's a fan-made project created purely for entertainment purposes, with no monetization involved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
