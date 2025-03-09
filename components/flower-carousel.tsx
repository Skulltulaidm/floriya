// Archivo: components/no-ssr-carousel.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FlowerCarouselProps {
    images: {
        src: string
        alt: string
    }[]
    autoplay?: boolean
    interval?: number
}

export function FlowerCarousel({
                                   images,
                                   autoplay = true,
                                   interval = 2000
                               }: FlowerCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const totalImages = images.length;
    const displayCount = 3;

    // Asegurarnos de tener suficientes imágenes
    const displayImages = images.length >= displayCount
        ? images
        : [...images, ...images, ...images].slice(0, displayCount);

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
    };

    // Autoplay del carrusel
    useEffect(() => {
        if (!autoplay || isPaused) return;

        const timer = setInterval(() => {
            next();
        }, interval);

        return () => clearInterval(timer);
    }, [autoplay, interval, isPaused]);

    // Preparar imágenes para mostrar correctamente
    const getVisibleImages = () => {
        if (totalImages <= displayCount) return displayImages;

        const result = [];
        for (let i = 0; i < displayCount; i++) {
            const index = (currentIndex + i) % totalImages;
            result.push(images[index]);
        }
        return result;
    };

    return (
        <div
            className="relative w-full max-w-6xl mx-auto px-4 py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="relative w-full">
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
                    aria-label="Previous"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {getVisibleImages().map((image, idx) => (
                        <div
                            key={`${currentIndex}-${idx}`}
                            className="aspect-square relative rounded-lg overflow-hidden"
                        >
                            <Image
                                src={image.src.replace(/\?height=\d+&width=\d+/, "?height=500&width=500")}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
                    aria-label="Next"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            {totalImages > displayCount && (
                <div className="flex justify-center mt-4 gap-1">
                    {Array.from({ length: totalImages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                idx === currentIndex ? "bg-black" : "bg-gray-300"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}