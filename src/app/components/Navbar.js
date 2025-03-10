"use client";

import { ctaClass } from "../twClasses";
import { useState } from "react";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img src="/logo/newkawanlogo_cropped_og.png" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 mr-2" />
                </a>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex space-x-8">
                        <a
                            href="/about"
                            className="text-base transition-colors hover:text-gray-600"
                        >
                            About
                        </a>
                        <a
                            href="/projects"
                            className="text-base transition-colors hover:text-gray-600"
                        >
                            Projects
                        </a>
                        <a
                            href="/testimonials"
                            className="text-base transition-colors hover:text-gray-600"
                        >
                            Testimonials
                        </a>
                    </nav>

                    <a
                        href="/contact"
                        className={ctaClass}
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Mobile Navigation */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 flex-col bg-white shadow-lg py-4`}>
                    <nav className="flex flex-col">
                        <a
                            href="/about"
                            className="px-6 py-2 text-base transition-colors hover:bg-gray-100"
                        >
                            About
                        </a>
                        <a
                            href="/projects"
                            className="px-6 py-2 text-base transition-colors hover:bg-gray-100"
                        >
                            Projects
                        </a>
                        <a
                            href="/testimonials"
                            className="px-6 py-2 text-base transition-colors hover:bg-gray-100"
                        >
                            Testimonials
                        </a>
                        <a
                            href="/contact"
                            className="px-6 py-2 text-base transition-colors hover:bg-gray-100"
                        >
                            Get in Touch
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
