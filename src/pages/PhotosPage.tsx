import { FC, useState } from "react";
import { X, ChevronLeft, ChevronRight, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

/*
  PHOTO GALLERY
  To add real photos, replace the placeholder entries below with objects containing:
  - src: the image URL or imported path
  - alt: descriptive alt text for accessibility
  
  Example:
  { src: "/images/band-photo-1.jpg", alt: "The band performing at Blue Note Lounge" }
*/

const photos = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: "", // Replace with actual image path
  alt: `Band photo ${i + 1}`,
}));

const PhotosPage: FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  const nextPhoto = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-gradient-gold text-center mb-3">
            Snapshots from the Stage
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Whether we're inside or outside, we always look good doing it.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <AnimatedSection key={photo.id} delay={index * 0.05}>
              <div
                className="glass-card aspect-square flex items-center justify-center cursor-pointer group hover:scale-105 transition-transform duration-300 hover:glow-amber overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                    <Music className="w-10 h-10" />
                    <span className="text-xs">Photo Coming Soon</span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-foreground hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div
              className="max-w-3xl max-h-[80vh] w-full mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              {photos[lightboxIndex].src ? (
                <img
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].alt}
                  className="w-full h-full object-contain rounded-xl"
                />
              ) : (
                <div className="glass-card aspect-video flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-muted-foreground">
                    <Music className="w-16 h-16" />
                    <span>Photo Coming Soon</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PhotosPage;
