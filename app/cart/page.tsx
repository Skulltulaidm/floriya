"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CartItem } from "@/components/cart-item"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart()

  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="flex-1 max-w-4xl mx-auto w-full p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif">Your Cart</h1>
          {items.length > 0 && (
            <Button variant="outline" onClick={clearCart} className="text-sm">
              Clear Cart
            </Button>
          )}
        </div>

        <div className="grid gap-8">
          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 p-4 bg-gray-50 font-medium">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {items.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <p className="mb-4">Your cart is empty</p>
                <Link href="/flowers" className="text-floriya-red hover:underline">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div>
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    image={item.image}
                    onRemove={() => removeItem(item.id)}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between font-medium text-lg mb-6">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <Button
              className="w-full bg-floriya-red hover:bg-floriya-red/90 text-white py-6"
              disabled={items.length === 0}
              asChild
            >
              <Link href="/checkout">CHECKOUT</Link>
            </Button>

            {items.length > 0 && (
              <div className="mt-4 text-center">
                <Link href="/flowers" className="text-floriya-red hover:underline text-sm">
                  Continue Shopping
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}

