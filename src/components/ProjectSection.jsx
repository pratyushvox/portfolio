import React from "react";

const projects = [
  {
    id: 1,
    title: "MediHub clinic management system",
    description:
      "MediHub is a user-friendly Clinic Management System that streamlines appointments, patient and doctor management, medical records, lab reports, invoices, and reminders through dedicated dashboards for admins, doctors, and patients.",
    image: "/projects/Project1.png",
    tags: ["React", "Tailwindcss", "mongodb", "express", "nodejs"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Padhaihub student management system",
    description:
      "PadhaiHub is a simple and efficient Student Management System that helps manage students, courses, attendance, results, and teacher information in one place.",
    image: "/projects/Project2.png",
    tags: ["React", "Tailwindcss", "Typescript", "mongodb", "express", "nodejs"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one is crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 text-left">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <a href={project.demoUrl} className="text-primary underline">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="text-primary underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
