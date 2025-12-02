import React from "react";
import { Code, Server, Database, Layers, Zap, Figma } from "lucide-react";

const SkillSection = () => {
  const skills = [
    // Frontend
    { name: "HTML & CSS", level: 90, icon: <Code className="h-6 w-6 text-primary" /> },
    { name: "JavaScript", level: 85, icon: <Code className="h-6 w-6 text-primary" /> },
    { name: "React.js", level: 75, icon: <Layers className="h-6 w-6 text-primary" /> },
    { name: "UI/UX Design", level: 70, icon: <Figma className="h-6 w-6 text-primary" /> },

    // Backend
    { name: "Node.js", level: 75, icon: <Server className="h-6 w-6 text-primary" /> },
    { name: "MongoDB", level: 70, icon: <Database className="h-6 w-6 text-primary" /> },

    // Tools
   { name: "Git & GitHub", level: 85, icon: <Zap className="h-6 w-6 text-primary" /> },

   
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="gradient-border p-6 card-hover flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">{skill.icon}</div>
                <h4 className="font-semibold text-lg">{skill.name}</h4>
              </div>
              <div className="w-full bg-primary/10 rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-muted-foreground">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
