import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ToggleLeft, ToggleRight, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import bandHero from "@/assets/band-hero.jpg";

const HomePage: FC = () => {
  const [isOutside, setIsOutside] = useState(false);

  return (
    <Layout lightMode={isOutside ? "outside" : "inside"}>
      {/* Hero Section */}
      <section className="min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center px-4 pt-8 pb-12 relative overflow-hidden">
        {/* Band photo background */}
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
            className={`text-5xl sm:text-7xl lg:text-8xl font-heading mb-6 transition-all duration-700 ${
              isOutside ? "text-gradient-cool" : "text-gradient-gold"
            }`}
          >
            {isOutside ? "The Outsiders" : "The Insiders"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
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
            <p className="text-xs text-muted-foreground italic">Toggle to switch the vibe!</p>
          </motion.div>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <AnimatedSection className="container mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-heading text-center text-gradient-gold mb-3">
          Straight From The Stage
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          The latest updates from the band
        </p>
        <div className="max-w-lg mx-auto glass-card overflow-hidden">
          {/* 
            Facebook Page Plugin embed.
            Update the href parameter below if the band gets a custom Facebook URL.
          */}
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61578316648590&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
            width="100%"
            height="600"
            style={{ border: "none", overflow: "hidden" }}
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
        <div className="max-w-2xl mx-auto glass-card overflow-hidden">
          {/*
            Google Calendar embed showing upcoming events in agenda view.
            The calendar oliviasings2@gmail.com must be set to public for this to display.
          */}
          <iframe
            src="https://calendar.google.com/calendar/embed?src=oliviasings2%40gmail.com&ctz=America/Chicago&mode=AGENDA&showTitle=0&showNav=0&showPrint=0&showCalendars=0&showTabs=0&height=300"
            width="100%"
            height="300"
            style={{ border: "none" }}
            title="Upcoming Shows Calendar"
          />
        </div>
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
