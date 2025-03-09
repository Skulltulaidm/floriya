import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

// Product type definition
type FlowerProduct = {
  id: string
  name: string
  price: number
  image: string
}

export default function FlowersPage() {
  // Sample product data
  const products: FlowerProduct[] = [
    { id: "1", name: "Ela's", price: 218, image: "/A2.png?height=300&width=300" },
    { id: "2", name: "Sweet Orchid", price: 124, image: "/A1.png?height=300&width=300" },
    { id: "3", name: "Gratitude Bouquet", price: 104, image: "/A4.png?height=300&width=300" },
    { id: "4", name: "White Blooms", price: 160, image: "/A8.png?height=300&width=300" },
    { id: "5", name: "Velvet Crush", price: 160, image: "/A9.png?height=300&width=300" },
    { id: "6", name: "Yellow Love", price: 140, image: "/A7.png?height=300&width=300" },
    { id: "7", name: "Endless Love", price: 100, image: "/A3.png?height=300&width=300" },
    { id: "8", name: "Majestic Melody", price: 220, image: "/A5.png?height=300&width=300" },
    { id: "9", name: "Deep Desire", price: 110, image: "/gallery-three.png?height=300&width=300" },
    { id: "10", name: "Sweet Symphony", price: 68, image: "/gallery-two.png?height=300&width=300" },
    { id: "11", name: "Sunshine Bouquet", price: 86, image: "/A6.png?height=300&width=300" },
    { id: "12", name: "Amore Infinito", price: 114, image: "/gallery-one.png?height=300&width=300" },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader activePage="flowers" />

      {/* Products Grid */}
      <section className="bg-floriya-pink-light py-12 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>

          {/* More Button */}
          <div className="flex justify-center mt-16">
            <Button className="bg-floriya-red hover:bg-floriya-red/90 rounded-full px-12 py-2 text-white">MORE</Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

