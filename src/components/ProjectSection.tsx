"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Avion",
    description:
      "A full-featured e-commerce platform built with Next.js, Sanity, and Clerk authentication.",
    longDescription:
      "This comprehensive e-commerce solution features product listings, search functionality, cart management, secure checkout, and user accounts. It uses Next.js for the frontend, Sanity for the content management, and Clerk for authentication. The admin dashboard allows for easy product and order management.",
    image: "/avion.png",
    tags: ["Next.js", "Sanity", "Clerk", "TypeScript", "Tailwind CSS"],
    demoLink: "https://avion-02.vercel.app/",
    githubLink:
      "https://github.com/Hamza-Sheikh-02/marketplace-builder-hackathon",
  },
  {
    id: 2,
    title: "Sole Arcade",
    description:
      "A headless CMS built with Sanity, Next.js, and TypeScript for modern content workflows.",
    longDescription:
      "This custom CMS provides an intuitive interface for managing diverse content types. Built with Sanity as the content backend and Next.js for the presentation layer, it offers real-time collaboration, content versioning, and a customizable publishing workflow. The TypeScript implementation ensures type safety throughout the application.",
    image: "/sole-arcade.png",
    tags: ["Sanity", "Next.js", "TypeScript", "shadcn/ui"],
    demoLink: "https://sole-arcade-02.vercel.app/",
    githubLink: "https://github.com/Hamza-Sheikh-02/sole-arcade",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-background/70 backdrop-blur-sm hover:bg-background/90"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Maximize2 size={16} />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubLink} target="_blank">
                    <Github size={16} className="mr-2" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demoLink} target="_blank">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            <div className="relative h-56 sm:h-64 overflow-hidden rounded-md">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <DialogDescription className="text-foreground/80">
              {selectedProject.longDescription}
            </DialogDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProject.tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" asChild>
                <Link href={selectedProject.githubLink} target="_blank">
                  <Github size={16} className="mr-2" />
                  View Code
                </Link>
              </Button>
              <Button asChild>
                <Link href={selectedProject.demoLink} target="_blank">
                  <ExternalLink size={16} className="mr-2" />
                  View Live Demo
                </Link>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
