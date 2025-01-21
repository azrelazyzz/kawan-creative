// AboutPage.js
"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import { ctaClass } from "../twClasses"; // Assuming you've set up your custom class for CTA

export default function About() {
  return (
    <div className="font-body">
      <Navbar />
      {/* Hero Section */}
      <Hero
        backgroundImage="/path-to-your-image.jpg" // Add a suitable background image
        title="About Us"
        subtitle="We are a passionate team delivering innovative solutions."
        buttons={[
          { href: "#contact", text: "Get in Touch" },
        ]}
        textPosition="center"
      />

      <Hero 
        backgroundColor="bg-black-100" // Add a suitable background image
        title="Our mission"
        subtitle="
                We aim to bring innovative solutions that help businesses thrive in
                today's digital world. Our team believes in delivering high-quality
                services while making a positive impact on our clients and the community."
        buttons={[
          { href: "#contact", text: "Get in Touch" },
        ]}
        textPosition="center"
      />

      {/* Meet the Team */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <img
                src="/team-member1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/team-member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/team-member3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Sara Lee</h3>
              <p className="text-gray-600">UX/UI Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section for Values */}
      <Hero
        backgroundColor="bg-black-100"
        title="Our Values & Vision"
        subtitle="We believe in integrity, innovation, and collaboration."
        buttons={[
          { href: "#contact", text: "Learn More" },
        ]}
        textPosition="center"
      />

      <Footer />
    </div>
  );
}
