"use client";

import { ctaClass } from "../twClasses";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                {/* Logo and Navigation Links */}
                <div className="flex items-center space-x-8">
                    <a href="/" className="flex items-center">
                        <img src="logo/newkawanlogo_cropped_og.png" alt="Logo" className="w-12 h-12 mr-2" />
                        {/* <span className="text-xl font-bold">Logo</span> */}
                    </a>

                    {/* Navigation Links */}
                    <nav className="flex space-x-8">
                        <a
                            href="about"
                            className="text-base transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="projects"
                            className="text-base transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="testimonials"
                            className="text-base transition-colors"
                        >
                            Testimonials
                        </a>
                    </nav>
                </div>

                {/* CTA Button */}
                <div>
                    <a
                        href="/contact"
                        className={ctaClass}
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}
