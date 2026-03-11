import { FC } from "react";
import { Link } from "react-router-dom";
import { Music, Facebook } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 glass-panel mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Music className="w-6 h-6 text-primary" />
              <span className="font-heading text-lg text-primary">
                The Insiders / The Outsiders
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Jazz. Rock. Soul. Whatever the venue, we bring the groove.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-foreground mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/shows", label: "Shows" },
                { to: "/photos", label: "Photos" },
                { to: "/videos", label: "Videos" },
                { to: "/book-us", label: "Book Us" },
                { to: "/text-list", label: "Text List" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-foreground mb-3">Follow Us</h4>
            {/* Update this URL if the band gets a custom Facebook URL */}
            <a
              href="https://www.facebook.com/profile.php?id=61578316648590"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 The Insiders / The Outsiders. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground italic">
            See you on stage, inside or out.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
