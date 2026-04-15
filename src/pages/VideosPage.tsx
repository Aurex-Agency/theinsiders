import { FC } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const STORAGE_BASE = "https://joorommxxorctcjssegc.supabase.co/storage/v1/object/public/videos";

const videos = [
  { id: 1, src: `${STORAGE_BASE}/performance-1.mp4`, title: "Live Performance 1" },
  { id: 2, src: `${STORAGE_BASE}/performance-2.mp4`, title: "Live Performance 2" },
  { id: 3, src: `${STORAGE_BASE}/performance-3.mp4`, title: "Live Performance 3" },
  { id: 4, src: `${STORAGE_BASE}/performance-4.mp4`, title: "Live Performance 4" },
];

const VideosPage: FC = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-gradient-gold text-center mb-3">
            Watch Us Play
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Live performances, behind the scenes moments, and more.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <AnimatedSection key={video.id} delay={index * 0.1}>
              <div className="glass-card overflow-hidden">
                <div className="aspect-video rounded-lg overflow-hidden mb-3">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover"
                    title={video.title}
                  />
                </div>
                <p className="text-sm font-medium text-foreground">{video.title}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default VideosPage;
