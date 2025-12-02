import React from "react";
import { Code , User , Briefcase } from "lucide-react";
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold"> Web developer</h3>

            <p className="text-muted-foreground">
              I’m a passionate Web Developer who enjoys creating modern,
              intuitive, and responsive web applications. I love solving
              real-world problems with clean code, thoughtful UI/UX, and
              efficient backend systems. Whether it’s building full-stack
              applications, optimizing user experience, or learning new
              technologies, I’m always excited to grow and bring ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary"/>
                    
                    </div>
                    <div className="text-left ">
                        <h4 className="font-semibold text-lg">Web Developement</h4>
                         
                        <p className="text-muted-foreground">
                            Creating responsive websites and web applications with modern frameworks
                        </p>

                    </div>


                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary"/>
                    
                    </div>
                    <div className="text-left ">
                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                         
                        <p className="text-muted-foreground">
                            Designing intuitive and user-friendly interfaces that enhance user experience and engagement.
                            </p>

                    </div>

                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary"/>
                    
                    </div>
                    <div className="text-left ">
                        <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                         
                        <p className="text-muted-foreground">
                            Combining frontend and backend skills to build complete, end-to-end web applications efficiently.
                        </p>

                    </div> 

                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
