import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-floriya-dark text-white pt-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Info Section */}
          <div>
            <h3 className="text-sm font-medium mb-3">info</h3>
            <p className="text-sm mb-1">16612 San Pedro Ave #2,</p>
            <p className="text-sm mb-6">San Antonio, TX 78232</p>

            <h3 className="text-sm font-medium mb-3">contact us</h3>
            <a href="tel:+12108505315" className="text-sm block hover:underline mb-1">
              +1 (210) 850-5315
            </a>
            <a href="mailto:info@floriyaflowers.com" className="text-sm block hover:underline">
              info@floriyaflowers.com
            </a>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="text-sm font-medium mb-3">hours:</h3>
            <p className="text-sm mb-1">Monday: 9:30 AM – 8 PM</p>
            <p className="text-sm mb-1">Tuesday: 9 AM – 9 PM</p>
            <p className="text-sm mb-1">Wednesday: 9 AM – 9 PM</p>
            <p className="text-sm mb-1">Thursday: 7 AM – 11:30 PM</p>
            <p className="text-sm mb-1">Friday: 6 AM – 10 PM</p>
            <p className="text-sm mb-1">Saturday: 9:30 AM – 7 PM</p>
            <p className="text-sm mb-1">Sunday: 10 AM – 5 PM</p>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-end">
            <div className="flex gap-6 mb-4">
              <Link
                href="https://www.instagram.com/floriyaflowers"
                className="hover:opacity-80 transition-opacity"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/floriyaflowers"
                className="hover:opacity-80 transition-opacity"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.messenger.com/t/floriyaflowers"
                className="hover:opacity-80 transition-opacity"
                aria-label="Contact us on WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9 13.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
                </svg>
              </Link>
            </div>
            <div className="text-sm">
              <Link href="/return-policy" className="hover:underline">
                Return and refund
              </Link>
              {" | "}
              <Link href="/privacy-policy" className="hover:underline">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FLORIYA text with adjusted cut-off */}
      <div className="relative h-[140px] overflow-hidden">
        <h2
          className="font-serif text-[200px] absolute bottom-0 left-0 w-full text-center leading-[0.9]"
          style={{ transform: "translateY(30%)" }}
        >
          FLORIYA
        </h2>
      </div>
    </footer>
  )
}

