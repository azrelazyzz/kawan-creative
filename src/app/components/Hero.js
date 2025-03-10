// components/Hero.js

import { buttonClass } from "../twClasses";
import Image from "next/image";

export default function Hero({
    backgroundImage = "", // URL of the background image
    videoSource = "", // URL of the background video
    backgroundColor = "bg-black-200", // Tailwind CSS class for background color
    title = "",
    subtitle = "",
    buttons = [], // [{ href: "#", text: "Button 1" }, { href: "#", text: "Button 2" }]
    textPosition = "center", // "left", "right", or "center"
    priority = false, // Whether to prioritize loading this image
}) {
    // Map textPosition prop to Tailwind classes
    const positionClasses = {
        left: "items-center justify-start text-left",
        right: "items-center justify-end text-left", // Ensure text inside is left-aligned
        center: "items-center justify-center text-center",
    };

    return (
        <div
            className={`relative w-full h-screen flex group ${positionClasses[textPosition]} ${
                !backgroundImage && !videoSource && backgroundColor
            }`}
        >
            {/* Render video if videoSource is provided */}
            {videoSource && (
                <video
                    className="absolute inset-0 w-full h-full object-cover filter grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
                    src={videoSource}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            )}

            {/* Background Image */}
            {backgroundImage && !videoSource && (
                <div className="absolute inset-0 group">
                    <Image
                        src={backgroundImage}
                        alt={title || "Background image"}
                        fill
                        priority={priority}
                        sizes="100vw"
                        className="object-cover filter grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
                        quality={90}
                    />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col px-4 max-w-4xl space-y-6">
                {title && <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>}
                {subtitle && <p className="text-lg md:text-2xl">{subtitle}</p>}
                {buttons.length > 0 && (
                    <div className={`flex space-x-4 ${textPosition === "center" ? "justify-center" : ""}`}>
                        {buttons.map((button, index) => (
                            <a
                                key={index}
                                href={button.href}
                                className={buttonClass}
                            >
                                {button.text}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* Overlay for better contrast */}
            {(backgroundImage || videoSource) && (
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out"></div>
            )}
        </div>
    );
}
