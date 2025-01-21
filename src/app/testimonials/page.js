import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TestimonialCard from "../components/TestimonialCard";
import Grid from "../components/Grid";

const testimonials = [
    {
        name: "John Doe",
        position: "CEO, Tech Innovations",
        quote:
            "This platform has completely transformed how we operate. The efficiency and productivity gains are remarkable!",
        image: "../globe.svg",
    },
    {
        name: "Jane Smith",
        position: "Marketing Director, Creative Co.",
        quote:
            "Absolutely fantastic service and support. Highly recommend it to anyone looking for top-notch solutions.",
        image: "../globe.svg",
    },
    {
        name: "Emily Davis",
        position: "Freelancer",
        quote:
            "The user experience is seamless, and the team behind this platform is incredibly supportive and knowledgeable.",
        image: "../globe.svg",
    },
];

export default function Testimonials() {
    return (
        <div className="font-body">
            <Navbar />

            {/* Hero Section */}
            <Hero
                backgroundImage="/path-to-your-image.jpg" // Add a suitable background image
                title="Testimonials"
                subtitle="Hear from our satisfied clients and partners."
                buttons={[
                    { href: "#share-feedback", text: "Share Your Feedback" },
                ]}
                textPosition="center"
            />

            {/* Testimonials Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
                        What Our Clients Say
                    </h2>

                    <Grid
                        items={testimonials}
                        renderItem={(item) => <TestimonialCard {...item} />}
                        preserveSize={false}
                    />

                </div>
            </section>

            {/* Share Feedback Section */}
            <Hero
                backgroundColor="bg-orange-600"
                title="Your Feedback Matters"
                subtitle="Have you worked with us? We'd love to hear about your experience and showcase it here."
                buttons={[
                    { href: "/contact", text: "Share Feedback" },
                ]}
                textPosition="center"
            />

            <Footer />
        </div>
    );
}
