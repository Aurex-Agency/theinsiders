import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ToggleLeft, ToggleRight, Calendar, Loader2, Mic, Music, Headphones, Volume2, Disc3, AudioLines } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ShowCard from "@/components/ShowCard";
import { useShows } from "@/hooks/useShows";
import bandHero from "@/assets/band-hero.jpg";
import jockImg from "@/assets/members/jock.jpg";
import oliviaImg from "@/assets/members/olivia.jpg";
import fredImg from "@/assets/members/fred.jpg";
import jodyImg from "@/assets/members/jody.jpg";
import terryImg from "@/assets/members/terry.jpg";

const members = [
  { name: "Jock Adams", role: "Lead Guitar & Vocals", icon: Music, image: jockImg },
  { name: "Olivia Christensen", role: "Lead Vocals", icon: Mic, image: oliviaImg },
  { name: "Fred Calmes", role: "Bass & Vocals", icon: AudioLines, image: fredImg },
  { name: "Jody Lacky", role: "Saxophone", icon: Volume2, image: jodyImg },
  { name: "Bill Wilson", role: "Drums", icon: Disc3, image: "" },
  { name: "Terry Morgan", role: "Keyboard & Vocals", icon: Headphones, image: terryImg },
];

const HomePage: FC = () => {
  const { data: upcomingShows = [], isLoading } = useShows(3);
  const [isOutside, setIsOutside] = useState(false);

  return (
    <Layout lightMode={isOutside ? "outside" : "inside"}>
      {/* Hero Section */}
      <section className="min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center px-4 pt-8 pb-12 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bandHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.25,
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        />
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl sm:text-6xl lg:text-8xl font-heading mb-4 sm:mb-6 transition-all duration-700 leading-tight ${
              isOutside ? "text-gradient-cool" : "text-gradient-gold"
            }`}
          >
            {isOutside ? "The Outsiders" : "The Insiders"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
          >
            If we're inside, we're The Insiders. If we're outside, we're The Outsiders.
            Either way, we bring the groove.
          </motion.p>

          {/* Inside/Outside Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-4 glass-card cursor-pointer select-none"
            onClick={() => setIsOutside(!isOutside)}
          >
            <span className={`text-sm font-medium transition-colors ${!isOutside ? "text-primary" : "text-muted-foreground"}`}>
              Inside
            </span>
            {isOutside ? (
              <ToggleRight className="w-10 h-10 text-secondary transition-colors" />
            ) : (
              <ToggleLeft className="w-10 h-10 text-primary transition-colors" />
            )}
            <span className={`text-sm font-medium transition-colors ${isOutside ? "text-secondary" : "text-muted-foreground"}`}>
              Outside
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4"
          >
            <p className="text-xs text-muted-foreground italic mb-6">Toggle to switch the vibe!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/text-list"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                Join Our Text List
              </Link>
              <Link
                to="/book-us"
                className="px-6 py-3 rounded-lg border border-primary/50 text-primary font-medium hover:bg-primary/10 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                Book Us for a Show
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Band */}
      <AnimatedSection className="container mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-heading text-center text-gradient-gold mb-3">
          Meet the Band
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Six musicians. One unstoppable groove.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {members.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <AnimatedSection key={member.name} delay={index * 0.08}>
                <div className="glass-card text-center group hover:scale-105 transition-transform duration-300 p-0 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-[3/4] bg-muted/50 flex items-center justify-center">
                      <IconComponent className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  )}
                  <div className="p-3">
                    <h3 className="font-heading text-sm sm:text-base text-foreground mb-0.5">{member.name}</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Facebook Feed Section */}
      <AnimatedSection className="container mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-heading text-center text-gradient-gold mb-3">
          Straight From The Stage
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          The latest updates from the band
        </p>
        <div className="max-w-2xl mx-auto glass-panel rounded-xl overflow-hidden flex justify-center" style={{ padding: 0 }}>
          {/* Mobile-sized embed */}
          <iframe
            className="block sm:hidden"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61578316648590&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
            style={{ border: "none", overflow: "hidden", width: "100%", maxWidth: "100%", display: "block" }}
            height="500"
            scrolling="no"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="The Insiders / The Outsiders Facebook Feed"
          />
          {/* Desktop-sized embed */}
          <iframe
            className="hidden sm:block"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61578316648590&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
            style={{ border: "none", overflow: "hidden", width: "100%", maxWidth: "100%", display: "block" }}
            height="600"
            scrolling="no"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="The Insiders / The Outsiders Facebook Feed"
          />
        </div>
      </AnimatedSection>

      {/* Upcoming Shows Preview */}
      <AnimatedSection className="container mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-heading text-center text-gradient-gold mb-3">
          Upcoming Shows
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Catch us live, inside or out
        </p>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : upcomingShows.length > 0 ? (
          <div className="max-w-2xl mx-auto space-y-3">
            {upcomingShows.map((show, index) => (
              <AnimatedSection key={show.date + show.venue} delay={index * 0.1}>
                <ShowCard show={show} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto glass-card text-center">
            <p className="text-muted-foreground">No upcoming shows scheduled yet. Check back soon!</p>
          </div>
        )}
        <div className="text-center mt-6">
          <Link
            to="/shows"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Calendar className="w-4 h-4" />
            See All Shows
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default HomePage;
