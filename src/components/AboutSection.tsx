import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in-from-left">
            <p className="text-lg mb-6 text-foreground/80">
              Hello! I&apos;m a passionate full-stack developer with a strong focus
              on creating elegant, efficient, and user-friendly applications. My
              journey in web development started 1 year ago, and I&apos;ve been
              constantly learning and growing since then.
            </p>
            <p className="text-lg mb-6 text-foreground/80">
              I specialize in modern JavaScript frameworks like Next.js, along
              with a robust tech stack including Sanity for content management,
              PostgreSQL for database, and Clerk for authentication. I&apos;m also
              proficient in TypeScript, which helps me write more reliable and
              maintainable code.
            </p>
            <p className="text-lg text-foreground/80">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <p className="text-foreground/70">
                  Creating beautiful and responsive user interfaces with modern
                  technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <p className="text-foreground/70">
                  Developing scalable APIs and well-structured databases to
                  drive powerful applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
                <p className="text-foreground/70">
                  Crafting interfaces that are both beautiful and highly
                  functional.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Optimization</h3>
                <p className="text-foreground/70">
                  Ensuring applications are fast, secure, and scalable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
