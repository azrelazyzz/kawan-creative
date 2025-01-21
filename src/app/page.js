import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Grid from "./components/Grid";
import TestimonialCard from "./components/TestimonialCard";
import IconCard from "./components/IconCard";
import Card from "./components/Card";

import { buttonClass } from "./twClasses";

const imageList = [
  '/placeholders/bmw.jpg',
  '/placeholders/bmw.jpg',
  '/placeholders/bmw.jpg',
  '/placeholders/bmw.jpg',
];

const testimonials = [
  { quote: "This product is amazing!", author: "John Doe", image: "./globe.svg", rating: 5 },
  { quote: "I love using this every day.", author: "Jane Smith", image: "./globe.svg", rating: 5 },
  { quote: "Highly recommend to everyone.", author: "Sam Wilson", image: "./globe.svg", rating: 5 },
  { quote: "Outstanding quality and support.", author: "Chris Evans", image: "/globe.svg", rating: 5 },
  { quote: "Outstanding quality and support.", author: "Chris Evans", image: "/globe.svg", rating: 5 }
];

const services = [
  { title: "Event Planning", description: "Full-service event planning and coordination.", icon: "globe.svg" },
  { title: "Venue Selection", description: "Choose the perfect venue for your event.", icon: "globe.svg" },
  { title: "Catering & Beverages", description: "Delicious food and drinks tailored to your needs.", icon: "globe.svg" },
  { title: "Décor & Styling", description: "Beautiful décor to match the theme of your event.", icon: "globe.svg" },
  { title: "Entertainment", description: "Live performances and activities to entertain your guests.", icon: "globe.svg" },
  { title: "Logistics & Coordination", description: "Efficient handling of all event logistics.", icon: "globe.svg" }
];

const cardsData = [
  {
    heading: 'Product X',
    subheading: 'The future of innovation',
    image: '/placeholders/placeholder1.jpg',
    description: 'Product X revolutionizes the way we interact with technology. With cutting-edge features and design, it\'s built for the future.',
  },
  {
    heading: 'Product Y',
    subheading: 'Innovation meets practicality',
    image: '/placeholders/placeholder1.jpg',
    description: 'Product Y brings innovative technology with a focus on practicality, ideal for everyday use.',
  },
  {
    heading: 'Product Z',
    subheading: 'Built for performance',
    image: '/placeholders/placeholder1.jpg',
    description: 'Product Z is designed for top-tier performance, delivering exceptional results in every use case.',
  }
];

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero
        // backgroundImage="placeholders/impala.jpg"
        videoSource="mini-electric-pik-launch/MINI Electric 1 Minute.mp4"
        title="Your Vision, Our Expertise."
        subtitle="We specialize in planning and executing weddings, corporate events, and private parties that leave a lasting impression."
        buttons={[
          { href: "about", text: "Learn More" }
        ]}
        textPosition="center"
        imagePosition="center"
      />

      <Hero
        backgroundImage=""
        title="Placeholder Title"
        subtitle="Placeholder Subtitle"
      // link={{ href: "about", text: "Learn More" }}
      />

      <Hero backgroundImage="porsche-roughroads/editors_images_1716370302386-Porsche+Roughroads+Guoco+Midtown+pic2.jpg" />

      <div className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-2">What We Offer</h2>
          <p className="text-lg">Our expert team provides a wide range of services to make your event unforgettable.</p>
        </div>
        <Grid
          items={services}
          renderItem={(item) => <IconCard {...item} />}
        />
        <div className="text-center mt-8">
          <a
            href="/about"
            className={buttonClass}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* <div className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-2">Our Work Speaks for Itself</h2>
        </div>
        <Carousel images={imageList} />
        <div className="text-center mt-8">
          <a
            href="/projects"
            className={buttonClass}
          >
            See More Events
          </a>
        </div>
      </div> */}

      <Hero
        // backgroundImage="placeholders/impala.jpg"
        videoSource="porsche-taycan-launch/Porsche Taycan Marketing Campaign.mp4"
        // title="Placeholder"
        // subtitle="We specialize in planning and executing weddings, corporate events, and private parties that leave a lasting impression."
        textPosition="center"
        imagePosition="center"
      />

      <Hero
        backgroundImage="giias2024/FA-C1ST7099.jpg"
      />

      <Hero
        backgroundImage="giias2024/C1ST8485.JPG"
      />

      {/* Testimonials Section */}
      {/* <section className="py-16 px-6 bg-gray-50">
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

      <Grid
        items={cardsData}
        renderItem={(item) => <Card {...item} />}
      /> */}

      <Hero
        backgroundImage=""
        title="Placeholder Title"
        subtitle="Placeholder Subtitle"
        link={{ href: "about", text: "Learn More" }}
      />

      <Hero
        videoSource="bmw-i7/BMW I7 EVENT 2023.MOV"
      />

      <Hero backgroundImage="giias2024/mini-launch/IMG_8492.JPG" />

      <Hero backgroundImage="giias2024/mini-launch/GIAS7848.jpg" />

      <Hero
        backgroundImage=""
        title="Placeholder Title"
        subtitle="Placeholder Subtitle"
        link={{ href: "about", text: "Learn More" }}
      />

      <Hero
        videoSource="porschegt3/Ausome Porche GT3  1 Menit.mp4"
      />

      <Hero backgroundImage="GJAW2024/IKO01904.jpg" />

      <Footer />
    </>
  );
}
