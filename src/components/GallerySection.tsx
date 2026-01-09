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
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const images = useMemo(
    () => [
      { url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/c.png", alt: "Grove Street Scene" },
      { url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/Picsart_24-08-24_12-12-14-625.jpg", alt: "Vice City Vibes" },
      { url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/image.png", alt: "Los Santos Skyline" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/refs/heads/main/captura_by_FrankoU_28_2.webp", alt: "Gang Territory" },
      { url: "https://raw.githubusercontent.com/AdevAbdullah/Mod-website/main/upscale.PNG", alt: "Weapon Selection" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/main/Media_Player_6_8_2025_12_16_01_P%20(1).png", alt: "Safe House Interior" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/babamohammed2022/main/2.webp", alt: "Vintage Billboard" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/babamohammed2022/main/Template_Paint.NET.webp", alt: "Character Lineup" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/small-cheese/main/Media_Player_12_7_2024_8_35_16_PM.webp", alt: "Mission Briefing" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/small-cheese/main/captura_by_FrankoU_28_18.webp", alt: "Car Chase" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/small-cheese/main/captura_by_FrankoU_28_19.webp", alt: "Custom Vehicle" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/CLEO_Snippet_Fetcher/refs/heads/main/image.webp", alt: "Script UI Preview" },
      { url: screenshot5, alt: "Enhanced Gameplay" },
      { url: screenshot6, alt: "Mission Cutscene" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/image%20(4).png", alt: "Screenshot 4 - GTA 1987 Remastered" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/image%20(5).png", alt: "Screenshot 5 - GTA 1987 Remastered" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/oold.png", alt: "Old GTA 1987 Remastered Screenshot" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/Media_Player_12_10_2024_10_11_09.png", alt: "Media Player Screenshot 3" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/Media_Player_7_27_2025_9_49_30_A.png", alt: "Media Player Screenshot 1" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/Media_Player_7_27_2025_9_49_21_A.png", alt: "Media Player Screenshot 2" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/image%20(6).png", alt: "Screenshot 6 - GTA 1987 Remastered" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/captura_by_FrankoU_28.png", alt: "FrankoU Capture Screenshot" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/image%20(7).png", alt: "Screenshot 7 - GTA 1987 Remastered" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/image%20(8).png", alt: "Screenshot 8 - GTA 1987 Remastered" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/Media_Player_8_11_2025_1_04_40_P.png", alt: "Media Player Screenshot 4" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/WIP.png", alt: "Media Player Screenshot 5" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/NO_cleanup%20(1).png", alt: "Media Player Screenshot 6" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/san.png", alt: "San Andreas Retro Scene" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/image%20(15).png", alt: "Screenshot 15 - GTA 1987 Remastered" },
      { url: "https://raw.githubusercontent.com/babamohammed2022/gta-1987-remastered-mod/main/src/assets/image%20(16).png", alt: "Screenshot 16 - GTA 1987 Remastered" },
    ],
    []
  );

  useEffect(() => {
    images.forEach(({ url }) => {
      const img = new Image();
      img.src = typeof url === "string" ? url : url.src || url;
    });
  }, [images]);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentIndex, false);
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
    <section id="gallery" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Gallery
          </h2>
        </div>

        {/* Main Image Display */}
        <div className="relative mb-8">
          <div className="relative aspect-video max-h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out transform"
              loading="lazy"
              decoding="async"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
            <div className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full">
              <ZoomIn className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Scrolling Thumbnail Carousel */}
        <div className="mb-8">
          <Carousel
            opts={{ align: "start", loop: true, skipSnaps: false, dragFree: true }}
            plugins={[
              Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }),
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
                        ? "ring-2 ring-primary shadow-neon scale-105"
                        : "opacity-70 hover:opacity-100 hover:scale-105"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <img src={image.url} alt={image.alt} className="w-full h-full object-cover" loading="eager" decoding="async" />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" aria-label="Previous Carousel" />
            <CarouselNext className="right-0" aria-label="Next Carousel" />
          </Carousel>
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            <strong>Disclaimer:</strong> All images in this gallery are in-game and may not reflect the final version.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
