import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Image from 'next/image';

export default function AllEvents() {
    const allEvents = [
        {
            id: "bmw-pioneering-tomorrow",
            brand: "BMW",
            title: "BMW - Pioneering Tomorrow's Mobility",
            description:
                "Experience the future of automotive excellence with BMW's latest innovations and technological breakthroughs.",
            date: "March 15, 2023",
            location: "Munich, Germany",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            id: "porsche-engineering-perfection",
            brand: "Porsche",
            title: "Porsche - Engineering Perfection",
            description:
                "Discover the pinnacle of performance engineering and luxury sports car manufacturing.",
            date: "June 20, 2023",
            location: "Stuttgart, Germany",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            id: "mini-urban-innovation",
            brand: "MINI",
            title: "MINI - Urban Innovation Redefined",
            description:
                "Explore how MINI is revolutionizing urban mobility with style and sustainability.",
            date: "October 10, 2022",
            location: "Oxford, UK",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            id: "tesla-future-of-driving",
            brand: "Tesla",
            title: "Tesla - The Future of Autonomous Driving",
            description:
                "Join us for an exclusive look at Tesla's latest developments in autonomous vehicle technology.",
            date: "December 15, 2023",
            location: "Austin, Texas",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            id: "audi-sustainable-luxury",
            brand: "Audi",
            title: "Audi - Sustainable Luxury Redefined",
            description:
                "Experience how Audi is combining luxury with sustainability in their latest vehicle lineup.",
            date: "January 20, 2024",
            location: "Ingolstadt, Germany",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            id: "volkswagen-electric-revolution",
            brand: "Volkswagen",
            title: "Volkswagen - Electric Revolution",
            description:
                "Discover VW's commitment to electric mobility and sustainable transportation.",
            date: "September 5, 2023",
            location: "Wolfsburg, Germany",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            id: "mercedes-innovation-summit",
            brand: "Mercedes",
            title: "Mercedes-Benz Innovation Summit",
            description:
                "A showcase of cutting-edge automotive technology and luxury innovation.",
            date: "August 12, 2023",
            location: "Stuttgart, Germany",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            id: "volvo-safety-first",
            brand: "Volvo",
            title: "Volvo - Safety First Technology",
            description:
                "Exploring Volvo's latest advancements in vehicle safety and protection systems.",
            date: "July 8, 2023",
            location: "Gothenburg, Sweden",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
        {
            id: "lexus-design-awards",
            brand: "Lexus",
            title: "Lexus Design Awards 2023",
            description:
                "Celebrating innovation in automotive design and sustainable materials.",
            date: "June 25, 2023",
            location: "Tokyo, Japan",
            image: "/placeholders/impala.jpg",
            link: "#",
        },
    ];

    const EventCard = ({ event }) => (
        <a
            href={`/projects/${event.id}`}
            className="relative group overflow-hidden rounded-lg block bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            <div className="relative w-full h-48">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                    priority={false}
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 ease-in-out" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h3 className="text-lg font-semibold text-white">
                    <span className="block group-hover:hidden">{event.brand}</span>
                    <span className="hidden group-hover:block">{event.title}</span>
                </h3>
            </div>
        </a>
    );

    return (
        <div className="font-body">
            <Navbar />

            {/* Hero Section */}
            <Hero
                title="All Events"
                subtitle="Browse through our complete collection of events and projects."
                backgroundImage="/placeholders/impala.jpg"
                textPosition="center"
            />

            {/* All Events Grid */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allEvents.map((event, index) => (
                            <EventCard key={index} event={event} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 