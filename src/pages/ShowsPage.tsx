import { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ShowCard from "@/components/ShowCard";
import { useShows } from "@/hooks/useShows";

const ShowsPage: FC = () => {
  const { data: shows = [], isLoading } = useShows();

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-gradient-gold text-center mb-3">
            Catch Us Live
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Check below to see where we're playing next. Inside or outside, we'll be there.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : shows.length > 0 ? (
            <div className="space-y-3">
              {shows.map((show, index) => (
                <AnimatedSection key={show.date + show.venue} delay={index * 0.08}>
                  <ShowCard show={show} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="glass-card text-center">
              <p className="text-muted-foreground">No upcoming shows scheduled yet. Check back soon!</p>
            </div>
          )}
        </div>

        <AnimatedSection className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Want us at your event? Head over to our booking page!
          </p>
          <Link
            to="/book-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Book Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default ShowsPage;
