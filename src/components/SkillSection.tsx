import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "shadcn/ui", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "PostgreSQL", level: 80 },
        { name: "Neon", level: 75 },
        { name: "Node.js", level: 85 },
        { name: "Sanity", level: 90 },
      ],
    },
    {
      category: "Tools & Services",
      items: [
        { name: "Sanity", level: 85 },
        { name: "Clerk", level: 80 },
        { name: "Git", level: 90 },
        { name: "Vercel", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-foreground/80">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary/30 rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Redux",
              "Figma",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "shadcn/ui",
              "PostgreSQL",
              "Neon",
              "Clerk",
              "Git",
              "Vercel",
              "Node.js",
              "Docker",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-foreground/80 border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
