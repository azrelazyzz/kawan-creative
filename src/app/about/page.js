// AboutPage.js
"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Image from 'next/image';
import { buttonClass, ctaClass } from "../twClasses";

export default function About() {
  return (
    <div className="font-body">
      <Navbar />

      {/* Hero Section */}
      <Hero
        backgroundImage="/giias2024/FA-C1ST7099.jpg"
        title="About Kawan Creative"
        subtitle="Crafting exceptional automotive experiences through innovation and creativity."
        buttons={[
          { href: "#contact", text: "Get in Touch" },
        ]}
        textPosition="center"
        priority={true}
      />

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-gray-300">
            <p className="text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Event Management</h3>
              <p className="text-gray-600">
                From concept to execution, we handle every aspect of automotive events with precision and creativity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Creative Solutions</h3>
              <p className="text-gray-600">
                Innovative approaches to automotive marketing and brand experiences that captivate audiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Brand Activation</h3>
              <p className="text-gray-600">
                Strategic brand activations that create meaningful connections between brands and their audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-300">
                Pushing boundaries and exploring new possibilities in automotive experiences.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-300">
                Delivering the highest quality in every aspect of our work.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Creativity</h3>
              <p className="text-gray-300">
                Bringing unique and memorable ideas to life.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-300">
                Operating with honesty and transparency in all our dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to bring your automotive vision to life.
          </p>
          <a
            href="/contact"
            className={buttonClass}
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
