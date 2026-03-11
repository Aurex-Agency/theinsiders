import { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const ShowsPage: FC = () => {
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

        <AnimatedSection className="max-w-4xl mx-auto glass-card overflow-hidden">
          {/*
            Google Calendar embed in agenda view.
            Calendar: oliviasings2@gmail.com
            IMPORTANT: The calendar must be set to public in Google Calendar settings for it to display.
            To do this: Google Calendar > Settings > Settings for "oliviasings2@gmail.com" calendar > 
            Access permissions > Make available to public.
            Replace src below if the calendar ID changes.
          */}
          <iframe
            src="https://calendar.google.com/calendar/embed?src=oliviasings2%40gmail.com&ctz=America/Chicago&mode=AGENDA&showTitle=0&showPrint=0&showCalendars=0&showTabs=0"
            width="100%"
            height="600"
            style={{ border: "none" }}
            title="The Insiders / The Outsiders Show Calendar"
          />
        </AnimatedSection>

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
