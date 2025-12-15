"use client";
import { SectionDescription } from "@/components/ui/SectionDescription";
import Subscribe from "./Subscribe";
import Contact from "./Contact";
import SocialIcon from "@/components/SocialIcon";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Connect() {
  return (
    <section className="py-10" id="connect">
      <div className="container py-10 max-w-6xl mx-auto px-4">
        <SectionDescription
          title="Let's build something amazing."
          description="Whether you have a question, a project proposal, or just want to discuss the latest in React,Node.js and Cloud technologies, I'm all ears."
        />

        {/* Grid layout for Newsletter + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Newsletter */}
          <Subscribe />

          {/* Contact Form */}
          <Contact />
        </div>
        {/* Social Links can be added here in the future */}
        <div className="items-center flex flex-col gap-2 py-10">
          {/* Social icons would go here */}
          <p className="text-gray-600 mt-4">Or connect with me on</p>
          <div className="flex justify-center mt-3 gap-4">
            {/* Social media icons */}
            <SocialIcon
              icon={<FaSquareXTwitter />}
              link="https://x.com/siva_padmanaban"
            />
            <SocialIcon
              icon={<FaLinkedin />}
              link="https://www.linkedin.com/in/siva-padmanaban/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
