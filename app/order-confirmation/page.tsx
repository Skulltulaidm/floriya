import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function OrderConfirmationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-serif mb-4">Thank You for Your Order!</h1>
          <p className="text-gray-600 mb-8">
            Your order has been received and is being processed. We've sent a confirmation email with all the details.
          </p>
          <p className="font-medium mb-2">Order Number: #FL-{Math.floor(100000 + Math.random() * 900000)}</p>
          <p className="text-sm text-gray-500 mb-8">You'll receive another email when your order ships.</p>
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/flowers">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}

