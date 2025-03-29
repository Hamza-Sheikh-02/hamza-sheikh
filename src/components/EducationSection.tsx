import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Intermediate, Pre-Engineering",
    institution:
      "THE CITIZENS FOUNDATION COLLEGE BESIDE SINDH RESERVE POLICE TRAINING CENTER",
    location: "Qayyumabad, Karachi",
    period: "July 2024 - July 2026",
    description:
      "Currently pursuing Intermediate with a focus on Pre-Engineering.",
    achievements: [],
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: "Matriculation, Computer Science",
    institution:
      "T.C.F SECONDARY SCHOOL (CAMPUS SINDH POLICE STATION KORANGI NO. 4)",
    location: "Riaz Tata, Korangi No. 4, Karachi",
    period: "July 2022 - July 2024",
    description:
      "Completed Matriculation with a concentration in Computer Science.",
    achievements: [],
    icon: GraduationCap,
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-card/30 to-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="h-1 w-20 bg-primary mb-8"></div>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <Card
              key={item.id}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                  <div className="text-foreground/70">
                    {item.institution}, {item.location}
                  </div>
                  <div className="flex items-center text-sm text-foreground/60">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((achievement, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-primary/30"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
