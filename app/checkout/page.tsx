"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your order. We'll send you a confirmation email shortly.",
      })
      clearCart()
      router.push("/order-confirmation")
      setIsSubmitting(false)
    }, 1500)
  }

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Your Cart is Empty</h1>
            <p className="mb-6">Add some items to your cart before proceeding to checkout.</p>
            <Button asChild>
              <a href="/flowers">Browse Flowers</a>
            </Button>
          </div>
        </div>
        <SiteFooter />
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-serif mb-8">Checkout</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-medium mb-4">Contact Information</h2>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-medium mb-4">Shipping Address</h2>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                      <Input id="apartment" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-medium mb-4">Payment</h2>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="grid gap-2 col-span-2">
                        <Label htmlFor="expiration">Expiration Date</Label>
                        <Input id="expiration" placeholder="MM/YY" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-floriya-red hover:bg-floriya-red/90 text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </form>
            </div>

            <div>
              <div className="border rounded-lg p-6 sticky top-6">
                <h2 className="text-xl font-medium mb-4">Order Summary</h2>

                <div className="space-y-4 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex items-center">
                        <span className="bg-gray-100 text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2">
                          {item.quantity}
                        </span>
                        <span>{item.name}</span>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(subtotal * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${(subtotal + 10 + subtotal * 0.08).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}

