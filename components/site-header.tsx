"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Cart } from "@/components/cart"
import { useCart } from "@/context/cart-context"

interface SiteHeaderProps {
  activePage?: "home" | "about" | "flowers"
}

export function SiteHeader({ activePage }: SiteHeaderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <>
      <nav className="bg-floriya-dark text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className={`text-sm hover:underline ${activePage === "home" ? "font-medium" : ""}`}>
            home
          </Link>
          <Link href="/about" className={`text-sm hover:underline ${activePage === "about" ? "font-medium" : ""}`}>
            about
          </Link>
        </div>
        <Link href="/" className="text-2xl font-serif tracking-wider">
          FLORIYA
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/flowers" className={`text-sm hover:underline ${activePage === "flowers" ? "font-medium" : ""}`}>
            flowers
          </Link>
          <button onClick={() => setIsCartOpen(true)} className="relative hover:opacity-80" aria-label="Open cart">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-floriya-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

