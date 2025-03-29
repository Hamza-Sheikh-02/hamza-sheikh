import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#hero" className="text-2xl font-bold gradient-text">
              HAMZA
            </Link>
            <p className="text-foreground/60 mt-2">
              Building digital experiences with modern technologies.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/Hamza-Sheikh-02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hamza-sheikh-a0b12b354/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://x.com/HAMZASHEIK61099"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <FaXTwitter size={20} />
            </Link>
            <a
              href="mailto:hamzahamza.sheikh2009@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Hamza Sheikh. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-foreground/60 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
