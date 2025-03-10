import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard";
import Grid from "../components/Grid";
import Image from "next/image";
import { buttonClass } from "../twClasses";

const testimonials = [
    {
        name: "Placeholder",
        position: "Marketing Director, BMW Indonesia",
        quote:
            "Kawan Creative's attention to detail and creative vision brought our BMW launch event to life. Their team's professionalism and innovative approach exceeded our expectations.",
        image: "/newkawanmedia/IMG_2261.JPG",
        rating: 5,
    },
    {
        name: "Placeholder",
        position: "Event Manager, Porsche Asia Pacific",
        quote:
            "Working with Kawan Creative on our Porsche Roughroads event was exceptional. Their expertise in automotive events and commitment to excellence made all the difference.",
        image: "/porsche-roughroads/editors_images_1716370302386-Porsche+Roughroads+Guoco+Midtown+pic2.jpg",
        rating: 5,
    },
    {
        name: "Placeholder",
        position: "Brand Director, MINI Indonesia",
        quote:
            "The MINI pitstop event organized by Kawan Creative was a perfect blend of innovation and brand essence. Their team's creativity and execution were outstanding.",
        image: "/newkawanmedia/P90535296_highRes_mini-pitstop-at-one-.jpg",
        rating: 5,
    },
    {
        name: "Placeholder",
        position: "Head of Events, GIIAS",
        quote:
            "Kawan Creative has been instrumental in elevating our GIIAS events. Their comprehensive approach to event management and creative solutions is truly impressive.",
        image: "/giias2024/FA-C1ST7099.jpg",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <div className="font-body">
            <Navbar />

            {/* Hero Section */}
            <Hero
                backgroundImage="/giias2024/mini-launch/IMG_8492.JPG"
                title="Client Testimonials"
                subtitle="Discover what our clients say about their experiences with Kawan Creative."
                buttons={[
                    { href: "#share-feedback", text: "Share Your Experience" },
                ]}
                textPosition="center"
                priority={true}
            />

            {/* Testimonials Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                        We take pride in delivering exceptional experiences. Here's what some of our valued clients have to say about working with us.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-lg mb-6 italic">"{testimonial.quote}"</p>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                                        <p className="text-gray-600">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Share Feedback Section */}
            <section className="py-20 px-6 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Share Your Experience
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Have you worked with us? We'd love to hear about your experience and showcase it here.
                    </p>
                    <a
                        href="/contact"
                        className={buttonClass}
                    >
                        Share Your Story
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
