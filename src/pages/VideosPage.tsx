import { FC } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

/*
  VIDEO GALLERY
  All videos come from the band's Facebook page.
  To add a video, replace VIDEO_URL_HERE with the full Facebook video URL.
  
  Example Facebook video URL format:
  https://www.facebook.com/watch/?v=123456789
  or
  https://www.facebook.com/profile.php?id=61578316648590/videos/123456789
  
  The URL must be encoded for the iframe src parameter.
*/

const videos = [
  { id: 1, url: "", title: "Live Performance 1" },
  { id: 2, url: "", title: "Live Performance 2" },
  { id: 3, url: "", title: "Live Performance 3" },
  { id: 4, url: "", title: "Live Performance 4" },
  { id: 5, url: "", title: "Behind the Scenes" },
  { id: 6, url: "", title: "Rehearsal Jam" },
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
                <div className="aspect-video bg-muted/30 rounded-lg overflow-hidden mb-3">
                  {video.url ? (
                    /*
                      Facebook video embed.
                      Replace VIDEO_URL_HERE below with the actual encoded Facebook video URL.
                    */
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=560`}
                      width="100%"
                      height="100%"
                      style={{ border: "none", overflow: "hidden" }}
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={video.title}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🎬</div>
                        <p className="text-sm">Video Coming Soon</p>
                      </div>
                    </div>
                  )}
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
