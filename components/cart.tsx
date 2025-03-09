"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useEffect } from "react"
import { CartItem as CartItemComponent } from "@/components/cart-item"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, updateQuantity, subtotal } = useCart()

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-medium">Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Close cart">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-auto p-6">
            <div className="flex justify-between pb-2 font-medium">
              <span>PRODUCT</span>
              <span>TOTAL</span>
            </div>

            {items.length === 0 ? (
              <div className="py-12 text-center text-gray-500">Your cart is empty</div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItemComponent
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    image={item.image}
                    onRemove={() => removeItem(item.id)}
                    onUpdateQuantity={updateQuantity}
                    compact
                  />
                ))}
              </div>
            )}
          </div>

          <div className="p-6 border-t">
            <Separator className="my-4" />
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-medium">Subtotal</span>
              <span className="text-xl font-medium">${subtotal.toFixed(2)}</span>
            </div>
            {items.length > 0 ? (
              <div className="space-y-4">
                <Button className="w-full bg-floriya-red hover:bg-floriya-red/90 text-white py-6 text-lg" asChild>
                  <Link href="/checkout">PAY</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={onClose} asChild>
                  <Link href="/cart">View Cart</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Button className="w-full bg-floriya-red hover:bg-floriya-red/90 text-white py-6 text-lg" disabled>
                  PAY
                </Button>
                <Link href="/flowers" className="block text-center text-floriya-red hover:underline" onClick={onClose}>
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

