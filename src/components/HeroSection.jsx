import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-light">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Pratyush
            </span>{" "}
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Khadka
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 mt-3">
            I’m a Full-Stack Developer specializing in building modern,
            responsive, and user-focused web applications.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>

        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 trasnform-translatex-1/2 flex flex-col items-center animate-bounce ">
      <span className="text0sm text-muted-foreground mb-2">Scroll</span>
    <ArrowDown className = "h-5 w-5 text-primary"/>

      </div>
    </section>
  );
};

export default HeroSection;
