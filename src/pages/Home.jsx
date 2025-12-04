import React from "react"
import ThemeToggle from "../components/ThemeToggle"
import { StarBackground } from "../components/Starbackground"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"

import AboutSection from "../components/AboutMe"
import SkillSection from "../components/SkillsSection"
import ProjectSection from "../components/ProjectSection"
import ContactSection from "../components/ContactSection"

const Home =()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden  ">
           {/*     Theme Toggle     */}
           <ThemeToggle/>

            {/*     Background effects    */}
            <StarBackground/>
        

             {/*     Navbar     */}
             <Navbar/>

              {/*     Main content    */}
              <main>
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <ProjectSection/>
                <ContactSection/>

                
              </main>

               {/*     Footer     */}

        </div>
    )
}

export default Home