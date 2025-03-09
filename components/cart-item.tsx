"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  onRemove?: () => void
  onUpdateQuantity?: (id: string, quantity: number) => void
  compact?: boolean
}

export function CartItem({
  id,
  name,
  price,
  quantity,
  image,
  onRemove,
  onUpdateQuantity,
  compact = false,
}: CartItemProps) {
  const total = price * quantity

  return compact ? (
    // Compact version for slide-in cart
    <div className="flex justify-between items-center py-4 border-t">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 overflow-hidden rounded">
          <Image src={image || "/placeholder.svg?height=64&width=64"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <div className="flex items-center mt-1">
            <button
              onClick={() => onUpdateQuantity?.(id, Math.max(1, quantity - 1))}
              className="text-gray-500 hover:text-black p-1"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="mx-2 text-sm">{quantity}</span>
            <button
              onClick={() => onUpdateQuantity?.(id, quantity + 1)}
              className="text-gray-500 hover:text-black p-1"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="font-medium">${total.toFixed(2)}</span>
        <button onClick={onRemove} className="text-gray-500 hover:text-black mt-1 p-1" aria-label="Remove item">
          <X size={14} />
        </button>
      </div>
    </div>
  ) : (
    // Full version for cart page
    <div className="grid grid-cols-12 items-center p-4 border-t">
      <div className="col-span-6 flex items-center gap-4">
        <div className="relative w-20 h-20 overflow-hidden rounded">
          <Image src={image || "/placeholder.svg?height=80&width=80"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <button onClick={onRemove} className="text-gray-500 hover:text-black text-sm mt-1 flex items-center">
            <X size={14} className="mr-1" />
            Remove
          </button>
        </div>
      </div>
      <div className="col-span-2 text-center">${price.toFixed(2)}</div>
      <div className="col-span-2 flex justify-center items-center">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => onUpdateQuantity?.(id, Math.max(1, quantity - 1))}
            className="px-2 py-1 hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity?.(id, quantity + 1)}
            className="px-2 py-1 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
      <div className="col-span-2 text-right font-medium">${total.toFixed(2)}</div>
    </div>
  )
}

