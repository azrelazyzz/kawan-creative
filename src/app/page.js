"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import IconCard from "./components/IconCard";

import { buttonClass } from "./twClasses";

const services = [
  {
    title: "Event Planning",
    description: "Full-service event planning and coordination.",
    icon: "globe.svg",
  },
  {
    title: "Venue Selection",
    description: "Choose the perfect venue for your event.",
    icon: "globe.svg",
  },
  {
    title: "Catering & Beverages",
    description: "Delicious food and drinks tailored to your needs.",
    icon: "globe.svg",
  },
  {
    title: "Décor & Styling",
    description: "Beautiful décor to match the theme of your event.",
    icon: "globe.svg",
  },
  {
    title: "Entertainment",
    description: "Live performances and activities to entertain your guests.",
    icon: "globe.svg",
  },
  {
    title: "Logistics & Coordination",
    description: "Efficient handling of all event logistics.",
    icon: "globe.svg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero
        videoSource="newkawanmedia/Mini Electric - GIIAS 2022.MP4"
        title="Your Vision, Our Expertise."
        subtitle="We specialize in planning and executing weddings, corporate events, and private parties that leave a lasting impression."
        buttons={[{ href: "about", text: "Learn More" }]}
        textPosition="center"
        imagePosition="center"
      />

      <Hero
        backgroundColor="black"
        title="Placeholder Title"
        subtitle="This is a placeholder description that can be updated later with actual content."
        textPosition="center"
      />

      <Hero backgroundImage="/giias2024/FA-C1ST7099.jpg" priority={true} />

      <div className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-2">What We Offer</h2>
          <p className="text-lg">
            Our expert team provides a wide range of services to make your event
            unforgettable.
          </p>
        </div>
        <Grid items={services} renderItem={(item) => <IconCard {...item} />} />
        <div className="text-center mt-8">
          <a href="/about" className={buttonClass}>
            Learn More
          </a>
        </div>
      </div>

      <Hero videoSource="newkawanmedia/Highlight BMW i7.MP4" />

      <Hero backgroundImage="/porsche-roughroads/editors_images_1716370302386-Porsche+Roughroads+Guoco+Midtown+pic2.jpg" />

      <Hero videoSource="newkawanmedia/ASTRA FINANCIAL -17.08.2022.MP4" />

      <Hero
        backgroundColor="black"
        title="Placeholder Title"
        subtitle="This is a placeholder description that can be updated later with actual content."
        textPosition="center"
      />

      <Hero backgroundImage="/newkawanmedia/1.jpg" />

      <Hero videoSource="porsche-taycan-launch/Porsche Taycan Marketing Campaign.mp4" />

      <Hero backgroundImage="/giias2024/mini-launch/IMG_8492.JPG" />

      <Hero
        backgroundColor="black"
        title="Placeholder Title"
        subtitle="This is a placeholder description that can be updated later with actual content."
        textPosition="center"
      />

      <Hero videoSource="newkawanmedia/Highlight - Porsche Ausome Kreatif Indonesia R3.mp4" />

      <Hero videoSource="newkawanmedia/BMW X JEFF KOONS.MP4" />

      <Hero backgroundImage="/newkawanmedia/IMG_2261.JPG" />

      <Hero
        backgroundColor="black"
        title="Placeholder Title"
        subtitle="This is a placeholder description that can be updated later with actual content."
        textPosition="center"
      />

      <Hero backgroundImage="/newkawanmedia/P90535296_highRes_mini-pitstop-at-one-.jpg" />

      <Hero backgroundImage="/newkawanmedia/20220311_BMW_2SERIES_LAUNCH_216.jpg" />

      <Hero backgroundImage="/GJAW2024/IKO01904.jpg" />

      <Footer />
    </>
  );
}
