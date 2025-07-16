import Link from "next/link"
import { Car, Users, CheckCircle, ArrowRight, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Sell Your Car Easily</h1>
          <h2 className="text-xl md:text-2xl text-red-600 font-semibold mb-4">Connect with Our Company</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the best value for your vehicle with our simple, secure platform. Our company will connect with you
            directly for a hassle-free car selling experience.
          </p>
          <Link href="/sell-your-car">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              Start Selling Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Fill Step-by-Step Form</h3>
              <p className="text-gray-600">Complete our form with your car details in easy steps</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Get Company Contact</h3>
              <p className="text-gray-600">Our company representatives will reach out within 24-48 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Complete Sale</h3>
              <p className="text-gray-600">Work directly with our company to finalize your car sale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose CarConnect?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <Smartphone className="h-12 w-12 text-red-600 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Valuable Experience</h3>
              <p className="text-gray-600 text-sm">Easy step-by-step form designed for you</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <Car className="h-12 w-12 text-red-600 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Quick Process</h3>
              <p className="text-gray-600 text-sm">Complete your listing in minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <Users className="h-12 w-12 text-red-600 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Direct Company Contact</h3>
              <p className="text-gray-600 text-sm">Work directly with our company representatives</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <CheckCircle className="h-12 w-12 text-red-600 mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">Best Value</h3>
              <p className="text-gray-600 text-sm">Get competitive offers for your car</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Car?</h2>
          <p className="text-xl mb-8">Start with our simple step-by-step process</p>
          <Link href="/sell-your-car">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
