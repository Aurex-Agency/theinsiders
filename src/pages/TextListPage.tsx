import { FC, useState } from "react";
import { Phone, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const TextListPage: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*
      TEXT LIST SIGNUP
      Connect this to an SMS service for actual text message delivery.
      Options: Twilio, SimpleTexting, or a similar SMS platform.
      Collect the form data via FormData(e.currentTarget).
    */
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-gradient-gold text-center mb-3">
            Join Our Text List
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Be the first to know when and where we're playing next.
            Sign up to get text updates straight to your phone!
          </p>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto glass-card text-center"
            >
              <div className="text-5xl mb-4">📱</div>
              <h2 className="font-heading text-2xl text-primary mb-2">You're on the list!</h2>
              <p className="text-muted-foreground">
                We will text you when our next show is announced.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto glass-card space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  We will only text you about upcoming shows. No spam, ever.
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Sign Me Up
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default TextListPage;
