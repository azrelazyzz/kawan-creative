import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Contact() {
    return (
        <>
            <Navbar />

            <Hero
                backgroundImage="/placeholders/bmw.jpg"
                title="Placeholder Title"
                subtitle="Placeholder Subtitle"
            />

            <Footer />
        </>
    );
};