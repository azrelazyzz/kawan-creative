import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { ctaClass } from '../twClasses';

export default function Projects() {
    const events = [
        {
            title: "Tech Conference 2023",
            description:
                "An immersive tech experience featuring keynote speakers, workshops, and networking opportunities.",
            date: "March 15, 2023",
            location: "San Francisco, CA",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            title: "AI Innovations Summit",
            description:
                "Explore the latest trends in AI technology and learn from industry leaders.",
            date: "June 20, 2023",
            location: "New York, NY",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            title: "Startup Expo 2022",
            description:
                "Showcasing groundbreaking ideas and startups redefining the future.",
            date: "October 10, 2022",
            location: "Austin, TX",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
    ];

    return (
        <div className="font-body">

            <Navbar />

            {/* Hero Section */}
            <Hero
                title="Our Projects & Events"
                subtitle="Explore our past and upcoming events that drive innovation and impact."
                backgroundImage="/events-hero.jpg"
                textPosition="center"
            />

            {/* Notable Events Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        Notable Past Events
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {event.date} &bull; {event.location}
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        {event.description}
                                    </p>
                                    <a
                                        href={event.link}
                                        className="text-orange-500 hover:text-orange-700 transition"
                                    >
                                        Learn More &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 bg-gray-100 text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Ready to Join Us?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Be part of our future events and projects. Together, we can create
                        meaningful impact.
                    </p>
                    <a href="/contact" className={ctaClass}>
                        Get in Touch
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}