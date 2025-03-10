import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ctaClass } from '../../twClasses';

// This would typically come from a database or API
const events = {
    "bmw-pioneering-tomorrow": {
        id: "bmw-pioneering-tomorrow",
        brand: "BMW",
        title: "BMW - Pioneering Tomorrow's Mobility",
        description:
            "Experience the future of automotive excellence with BMW's latest innovations and technological breakthroughs.",
        date: "March 15, 2023",
        location: "Munich, Germany",
        image: "/giias2024/FA-C1ST7099.jpg",
        link: "#",
        details: [
            "Showcase of BMW's latest electric vehicle lineup",
            "Interactive displays demonstrating autonomous driving technology",
            "Expert-led workshops on sustainable mobility",
            "Networking opportunities with industry leaders",
        ],
    },
    "porsche-engineering-perfection": {
        id: "porsche-engineering-perfection",
        brand: "Porsche",
        title: "Porsche - Engineering Perfection",
        description:
            "Discover the pinnacle of performance engineering and luxury sports car manufacturing.",
        date: "June 20, 2023",
        location: "Stuttgart, Germany",
        image: "/porsche-roughroads/editors_images_1716370302386-Porsche+Roughroads+Guoco+Midtown+pic2.jpg",
        link: "#",
        details: [
            "Exclusive preview of Porsche's latest models",
            "Behind-the-scenes look at Porsche's manufacturing process",
            "Performance driving demonstrations",
            "Engineering innovation showcase",
        ],
    },
    "mini-urban-innovation": {
        id: "mini-urban-innovation",
        brand: "MINI",
        title: "MINI - Urban Innovation Redefined",
        description:
            "Explore how MINI is revolutionizing urban mobility with style and sustainability.",
        date: "October 10, 2022",
        location: "Oxford, UK",
        image: "/newkawanmedia/P90535296_highRes_mini-pitstop-at-one-.jpg",
        link: "#",
        details: [
            "Urban mobility solutions showcase",
            "Sustainable design exhibition",
            "City driving experience",
            "Future of compact cars presentation",
        ],
    },
};

export default function EventPage({ params }) {
    const event = events[params.id];

    if (!event) {
        return (
            <div className="font-body">
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
                        <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
                        <a href="/projects" className={ctaClass}>
                            Return to Projects
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="font-body">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
                        <p className="text-xl md:text-2xl">{event.date} • {event.location}</p>
                    </div>
                </div>
            </div>

            {/* Event Details Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">About the Event</h2>
                        <p className="text-gray-600 mb-8">{event.description}</p>
                        
                        <div className="whitespace-pre-line text-gray-600">
                            {event.details.join('\n')}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <a href="/projects" className={ctaClass}>
                                Back to Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 