import React from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-muted-foreground mb-10 max-w-md">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to new opportunities.
          </p>

          <div className="space-y-6">
            
            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="text-primary w-6 h-6" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">Pratyushkhadka69@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="text-primary w-6 h-6" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">+977 9811321046</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MapPin className="text-primary w-6 h-6" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground">Kathmandu</p>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-8">
            <p className="font-semibold mb-3">Connect With Me</p>
            <div className="flex gap-4">
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-primary transition" />
              <Github className="w-6 h-6 cursor-pointer hover:text-primary transition" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-primary transition" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-primary transition" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-6">
          <h3 className="text-2xl font-semibold text-center">Send a Message</h3>

          <div>
            <label className="text-sm text-muted-foreground">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Your Message</label>
            <textarea
              rows="4"
              placeholder="Hello, I’d like to talk about..."
              className="w-full mt-2 p-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
