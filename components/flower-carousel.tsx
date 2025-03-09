"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FlowerCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  autoplayInterval?: number
}

export function FlowerCarousel({ images, autoplayInterval = 5000 }: FlowerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [next, autoplayInterval])

  if (images.length === 0) return null

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={prev}
          className="absolute left-2 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-floriya-dark" />
        </button>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-2 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-floriya-dark" />
        </button>
      </div>
    </div>
  )
}

