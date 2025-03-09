"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Minus, Plus } from "lucide-react"

// Sample product data - in a real app, this would come from an API or database
const products = [
  {
    id: "1",
    name: "Ela's",
    price: 218,
    image: "/A2.png?height=600&width=600",
    description:
      "A stunning arrangement of premium seasonal flowers in soft pastel tones, perfect for any special occasion.",
  },
  {
    id: "2",
    name: "Sweet Orchid",
    price: 124,
    image: "/A1.png?height=600&width=600",
    description:
      "Elegant orchids arranged with complementary greenery, creating a sophisticated and long-lasting gift.",
  },
  {
    id: "3",
    name: "Gratitude Bouquet",
    price: 104,
    image: "/A4.png?height=600&width=600",
    description: "Express your thanks with this thoughtful arrangement of mixed flowers in cheerful colors.",
  },
  {
    id: "4",
    name: "White Blooms",
    price: 160,
    image: "/A8.png?height=600&width=600",
    description: "Pure and elegant white flowers create a timeless arrangement perfect for any occasion.",
  },
  {
    id: "5",
    name: "Velvet Crush",
    price: 160,
    image: "/A9.png?height=600&width=600",
    description: "Rich red and burgundy blooms create a romantic and luxurious bouquet that makes a bold statement.",
  },
  {
    id: "6",
    name: "Yellow Love",
    price: 140,
    image: "/A7.png?height=600&width=600",
    description: "Bright and cheerful yellow flowers bring sunshine and joy to any space or occasion.",
  },
  {
    id: "7",
    name: "Endless Love",
    price: 100,
    image: "/A3.png?height=600&width=600",
    description: "A romantic arrangement symbolizing eternal love, featuring classic blooms in soft colors.",
  },
  {
    id: "8",
    name: "Majestic Melody",
    price: 220,
    image: "/A5.png?height=600&width=600",
    description: "A premium arrangement featuring a harmonious blend of luxury blooms in pastel purples and pinks.",
  },
  {
    id: "9",
    name: "Deep Desire",
    price: 110,
    image: "/gallery-three.png?height=600&width=600",
    description: "Bold and passionate arrangement featuring striking red anthuriums and complementary blooms.",
  },
  {
    id: "10",
    name: "Sweet Symphony",
    price: 68,
    image: "/gallery-two.png?height=600&width=600",
    description:
      "A delicate arrangement of pink roses and complementary flowers, creating a sweet and harmonious display.",
  },
  {
    id: "11",
    name: "Sunshine Bouquet",
    price: 86,
    image: "/A6.png?height=600&width=600",
    description: "Bright yellow blooms bring warmth and happiness, perfect for brightening someone's day.",
  },
  {
    id: "12",
    name: "Amore Infinito",
    price: 114,
    image: "/gallery-one.png?height=600&width=600",
    description: "A romantic mix of soft pink and white flowers symbolizing infinite love and affection.",
  },
]

export default function ProductPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, the product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <a href="/flowers">Back to Flowers</a>
            </Button>
          </div>
        </div>
        <SiteFooter />
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={product.image || "/placeholder.png"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
              <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>

              <p className="text-gray-600 mb-8">{product.description}</p>

              <div className="flex items-center mb-8">
                <span className="mr-4">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-2 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <Button className="bg-floriya-red hover:bg-floriya-red/90 text-white py-6 mb-4" onClick={handleAddToCart}>
                Add to Cart
              </Button>

              <div className="mt-8">
                <h2 className="font-medium mb-2">Details</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Handcrafted by our expert florists</li>
                  <li>Fresh flowers sourced from local growers</li>
                  <li>Available for same-day delivery</li>
                  <li>Vase not included unless specified</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}

