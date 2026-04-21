import { FC, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import galleryPhoto1 from "@/assets/gallery/photo1.webp";
import galleryPhoto2 from "@/assets/gallery/photo2.webp";
import galleryPhoto3 from "@/assets/gallery/photo3.webp";
import galleryPhoto4 from "@/assets/gallery/photo4.webp";
import galleryPhoto5 from "@/assets/gallery/photo5.webp";
import galleryPhoto6 from "@/assets/gallery/photo6.webp";

const photos = [
  { src: galleryPhoto1, alt: "The band performing live on stage" },
  { src: galleryPhoto2, alt: "Terry and Jock jamming together" },
  { src: galleryPhoto3, alt: "Olivia and Terry performing" },
  { src: galleryPhoto4, alt: "Full band on stage with crowd" },
  { src: galleryPhoto5, alt: "The Outsiders at Dudie's Burger Festival" },
  { src: galleryPhoto6, alt: "Jock and Terry on stage at Coopers" },
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {photos.map((photo, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div
                className="glass-card p-0 overflow-hidden rounded-xl cursor-pointer group hover:scale-105 transition-transform duration-300 hover:glow-amber"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full aspect-[4/3] object-cover"
                />
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
              <img
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PhotosPage;
