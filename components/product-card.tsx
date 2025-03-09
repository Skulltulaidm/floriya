"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { ShoppingBag } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
    })
  }

  return (
    <div className="flex flex-col group">
      <Link href={`/flowers/${id}`} className="block overflow-hidden rounded-lg relative">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={image || "/placeholder.svg?height=300&width=300"}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
      </Link>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full hover:bg-floriya-pink/20"
          onClick={handleAddToCart}
          aria-label={`Add ${name} to cart`}
        >
          <ShoppingBag size={18} />
        </Button>
      </div>
    </div>
  )
}

