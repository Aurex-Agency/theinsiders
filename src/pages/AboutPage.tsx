import { FC } from "react";
import { Mic, Music, Headphones, Volume2, Disc3, AudioLines } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const members = [
  { name: "Jock Adams", role: "Lead Guitar & Vocals", icon: Music },
  { name: "Olivia Christensen", role: "Lead Vocals", icon: Mic },
  { name: "Fred Calmes", role: "Bass & Vocals", icon: AudioLines },
  { name: "Jody Lacky", role: "Saxophone", icon: Volume2 },
  { name: "Bill Wilson", role: "Drums", icon: Disc3 },
  { name: "Terry Morgan", role: "Keyboard & Vocals", icon: Headphones },
];

const AboutPage: FC = () => {
  return (
    <Layout>
      {/* Band Bio */}
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-gradient-gold text-center mb-12">
            About the Band
          </h1>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto glass-card space-y-6 text-foreground/90 leading-relaxed">
          <p>
            Individually, they have decades of experience playing across Mississippi, Tennessee,
            Alabama, Florida, and beyond. Together, they have decided to join forces and create
            something special. Born from a shared love of Jazz, Rock, Soul, and everything in
            between, The Insiders (or The Outsiders, depending on the venue) are six musicians
            who prove that when seasoned talent meets raw passion, magic happens.
          </p>
          <p>
            From smoky jazz clubs to sun-drenched outdoor festivals, this band brings an
            electrifying energy that gets audiences on their feet. Their setlist spans generations
            and genres, seamlessly weaving together classic soul grooves, bluesy rock anthems,
            smooth jazz standards, and funky jams that keep the dance floor packed all night long.
            Whether it's an intimate indoor lounge set or a wide-open outdoor concert, The
            Insiders / The Outsiders adapt their sound to fit the moment while never losing the
            fire that makes them unforgettable.
          </p>
          <p>
            Available for private events, weddings, corporate gatherings, festivals, bar and
            restaurant gigs, and everything in between. If you've got a stage (indoors or out),
            they've got the music. Get in touch and let's make your next event one to remember.
          </p>
        </AnimatedSection>
      </section>

      {/* Meet the Band */}
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-heading text-gradient-gold text-center mb-3">
            Meet the Band
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Six musicians. One unstoppable groove.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {members.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="glass-card text-center group hover:scale-105 transition-transform duration-300 hover:glow-amber">
                  {/* Placeholder image area. Replace with actual member photos */}
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-colors">
                    <IconComponent className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
