"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/hero1.jpg","/hero-image-4.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 animate-fadeIn">
            Transform Event Photos with <span className="text-primary">AI-Powered Sharing</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600 animate-slideIn">Convert event attendees into powerful marketers with real-time, AI-driven photo distribution</p>
          <Link
            href="#interest-form"
            className="btn-primary  bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300;"
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 relative h-[400px]">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`AI-Powered Event Photo Sharing ${index + 1}`}
              fill
              style={{
                objectFit: "cover",
                opacity: index === currentImage ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
