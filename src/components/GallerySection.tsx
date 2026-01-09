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
      { url: screenshot5, alt: "Enhanced Gameplay" },
      { url: screenshot6, alt: "Mission Cutscene" },
      // ... add the rest of your images here
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
    if (carouselApi) carouselApi.scrollTo(currentIndex, false);
  }, [currentIndex, carouselApi]);

  const nextImage = useCallback(() => setCurrentIndex((prev) => (prev + 1) % images.length), [images.length]);
  const prevImage = useCallback(() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length), [images.length]);
  const goToImage = useCallback((index: number) => setCurrentIndex(index), []);

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Gallery
          </h2>
        </div>

        {/* Main Image Display */}
        <div className="relative mb-8">
          <div className="relative aspect-video max-h-[28rem] mx-auto rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              loading="lazy"
              decoding="async"
            />

            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white shadow-lg rounded-full"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white shadow-lg rounded-full"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              {currentIndex + 1} / {images.length}
            </div>

            <div className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full shadow-md">
              <ZoomIn className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Scrolling Thumbnail Carousel */}
        <div className="mb-8">
          <Carousel
            opts={{ align: "start", loop: true, skipSnaps: false, dragFree: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })]}
            setApi={setCarouselApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/6">
                  <button
                    onClick={() => goToImage(index)}
                    className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-200 will-change-transform w-full ${
                      index === currentIndex
                        ? "ring-2 ring-purple-500 shadow-neon scale-105"
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
          <p className="text-sm text-gray-400 italic">
            <strong>Disclaimer:</strong> All images in this gallery are in-game and may not reflect the final version.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
