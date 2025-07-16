"use client"

import Link from "next/link"
import { Car, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold">CarConnect</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/sell-your-car" className="hover:text-red-500 transition-colors">
              Sell Your Car
            </Link>
            <Link href="/about" className="hover:text-red-500 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link href="/sell-your-car" className="hover:text-red-500 transition-colors">
                Sell Your Car
              </Link>
              <Link href="/about" className="hover:text-red-500 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-red-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
