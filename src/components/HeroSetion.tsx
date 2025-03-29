import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/0 pointer-events-none" />

      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="order-2 md:order-1 max-w-3xl">
            <p className="text-primary mb-4 font-mono">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Hamza Sheikh.</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground/80 mb-6">
              I build things for the web.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
              I'm a full-stack developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products using modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            <div className="flex space-x-6">
              <Link
                href="https://github.com/Hamza-Sheikh-02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hamza-sheikh-a0b12b354/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://x.com/HAMZASHEIK61099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <FaXTwitter size={24} />
              </Link>
              <Link
                href="mailto:hamzahamza.sheikh2009@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <Avatar className="h-48 w-48 md:h-72 md:w-72 border-4 border-primary/20 shadow-xl">
              <AvatarImage
                src="/hamza.jpg"
                alt="Hamza Sheikh"
              />
              <AvatarFallback className="text-4xl font-bold">HS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="#about"
          className="text-foreground/60 hover:text-primary transition-colors"
        >
          <ChevronDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
