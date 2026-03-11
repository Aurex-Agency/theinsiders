import { FC, useState } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Festival",
  "Private Party",
  "Bar/Restaurant",
  "Other",
];

const BookUsPage: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [venueType, setVenueType] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*
      FORM SUBMISSION
      Connect this to a backend service for email delivery.
      Options: Formspree, EmailJS, Supabase Edge Function, or similar.
      The form data can be collected via FormData(e.currentTarget).
    */
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-gradient-gold text-center mb-3">
            Book The Insiders / The Outsiders
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Interested in having us play your next event? Fill out the form below and we will get back to you!
          </p>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto glass-card text-center"
            >
              <div className="text-5xl mb-4">🎶</div>
              <h2 className="font-heading text-2xl text-primary mb-2">Thanks for reaching out!</h2>
              <p className="text-muted-foreground">We will be in touch soon.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto glass-card space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Event Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Event Type *</label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Indoor or Outdoor? *</label>
                <div className="flex gap-4">
                  {["Indoor", "Outdoor", "Not Sure Yet"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="venueType"
                        value={option}
                        onChange={(e) => setVenueType(e.target.value)}
                        className="accent-primary"
                        required
                      />
                      <span className="text-sm text-foreground">{option}</span>
                    </label>
                  ))}
                </div>
                <AnimatePresence>
                  {venueType === "Indoor" && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-primary mt-2 italic"
                    >
                      Looks like you need The Insiders! 🎤
                    </motion.p>
                  )}
                  {venueType === "Outdoor" && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-secondary mt-2 italic"
                    >
                      Sounds like a job for The Outsiders! 🎸
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Venue Name and Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Blue Note Lounge, Jackson, MS"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Additional Details / Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Tell us more about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Submit Booking Request
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default BookUsPage;
