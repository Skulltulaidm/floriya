"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FlowerCarousel } from "@/components/flower-carousel"
import { ChevronRight } from "lucide-react"

export default function Home() {
    // Carousel images
    const carouselImages = [
        { src: "/gallery-one.png?height=500&width=500", alt: "Flower arrangement 1" },
        { src: "/gallery-two.png?height=500&width=500", alt: "Flower arrangement 2" },
        { src: "/gallery-three.png?height=500&width=500", alt: "Flower arrangement 3" },
        { src: "/A1.png?height=500&width=500", alt: "Flower arrangement 3" },
    ]

    return (
        <main className="flex min-h-screen flex-col">
            <SiteHeader activePage="home" />

            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px]">
                <Image
                    src="/hero-one.png?height=500&width=1200"
                    alt="Valentine's Day Flower Collection"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay para difuminación/sombra */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="font-serif italic text-5xl md:text-6xl mb-4">Valentines</h1>
                    <h2 className="font-serif text-4xl md:text-5xl mb-8">collection</h2>
                    <Button className="bg-floriya-red hover:bg-floriya-red/90 rounded-full px-8" asChild>
                        <Link href="/flowers">SHOP HERE</Link>
                    </Button>
                </div>
            </section>

            {/* Flower Carousel - 3 imágenes simultáneas de tamaño controlado */}
            <section className="py-6 px-4 bg-white">
                <FlowerCarousel images={carouselImages} />
            </section>

            {/* Quote Section */}
            <section className="bg-floriya-pink py-12 px-4 text-center">
                <h2 className="font-serif italic text-4xl md:text-5xl mb-2">Flowers</h2>
                <p className="text-2xl md:text-3xl font-light">that speak the language of love.</p>
            </section>

            {/* About Section */}
            <section className="grid md:grid-cols-2 bg-white">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <h2 className="text-2xl font-mono mb-6">EST. 2016</h2>
                    <p className="text-sm leading-relaxed mb-4">
                        Floriya Flowers started in 2016 with a passion for floral design and a commitment to exceptional customer
                        service. Committed to quality and creativity, we do flawless bouquets to create unforgettable moments with
                        fresh, handcrafted arrangements.
                    </p>
                    <Link href="/about" className="text-floriya-red hover:underline inline-flex items-center text-sm mt-4">
                        Learn more about us
                        <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                </div>
                <div className="bg-gray-100 min-h-[300px] relative">
                    <Image src="/contact-us.png?height=400&width=600" alt="Flower arrangement" fill className="object-cover" />
                </div>
            </section>

            {/* Brand Banner */}
            <div className="bg-floriya-blue py-3 px-4 overflow-hidden">
                <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          <span className="text-white text-xl tracking-widest font-serif">
            FLORIYA FLORIYA FLORIYA FLORIYA FLORIYA FLORIYA FLORIYA FLORIYA
          </span>
                </div>
            </div>

            {/* Newsletter */}
            <section className="py-12 px-4 bg-white text-center">
                <h2 className="text-xl font-medium mb-2">JOIN THE FLOWER MOVEMENT</h2>
                <p className="text-sm mb-6">Leave us your email to be the first to know all our news.</p>
                <form
                    className="flex max-w-md mx-auto"
                    onSubmit={(e) => {
                        e.preventDefault()
                        // Handle newsletter signup
                        alert("Thank you for subscribing to our newsletter!")
                        // Clear the form
                        e.currentTarget.reset()
                    }}
                >
                    <Input type="email" placeholder="Email" className="rounded-r-none border-r-0" required />
                    <Button type="submit" variant="outline" className="rounded-l-none border-l-0">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </form>
            </section>

            <SiteFooter />
        </main>
    )
}