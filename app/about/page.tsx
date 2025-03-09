import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader activePage="about" />

      {/* About Hero Section */}
      <section className="relative">
        <div className="grid md:grid-cols-2">
          <div className="bg-[#f5f5f5] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Lauren Parker</h1>

            <div className="space-y-4 text-sm">
              <p>
                Floriya Flowers started in 2016 with a passion for floral artistry, turning a small dream into a
                thriving boutique. What began as a small endeavor quickly flourished into a well-loved floral
                destination, known for its elegant, handcrafted arrangements and unwavering commitment to quality.
              </p>

              <p>
                At Floriya, we believe that flowers have the power to convey emotions, tell stories, and create
                unforgettable moments. Every bouquet we design is more than just an arrangement—it's a carefully curated
                expression of love, joy, and celebration. Whether it's a simple gesture of appreciation, a romantic
                surprise, or a grand event, we bring creativity and heart into every floral creation.
              </p>

              <p>
                Our team of skilled florists takes pride in selecting the freshest, highest- quality blooms sourced from
                the best growers. We pay close attention to detail, from seasonal availability to unique floral
                varieties. Each floral arrangement reflects both artistry and meaning. Floriya Flowers isn't just about
                selling flowers—it's about crafting moments, elevating experiences, and spreading happiness through
                nature's most beautiful creations. As we continue to grow, we remain committed to excellence,
                sustainability, and the artistry that defines our brand.
              </p>
            </div>
          </div>

          <div className="h-[600px] md:h-auto">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Lauren Parker, founder of Floriya Flowers"
              width={600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-6">SERVICES</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            We create unique experiences that will make your days more special and memorable.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Events */}
            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Event floral arrangements"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center">Events</h3>
              <p className="text-sm text-center">
                Customized floral designs for weddings, corporate events, and private parties.
              </p>
            </div>

            {/* Subscriptions */}
            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Flower subscription"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center">Subscriptions</h3>
              <p className="text-sm text-center">
                Choose weekly or monthly plans to keep your space blooming year-round.
              </p>
            </div>

            {/* Deliveries */}
            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Flower delivery"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center">Deliveries</h3>
              <p className="text-sm text-center">
                Delivery service for handcrafted floral arrangements for any occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

