import { Car, Users, Shield, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About CarConnect</h1>
            <p className="text-xl text-gray-600">
              Empowering car owners with hassle-free selling experiences since 2024.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <Car className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To simplify the car selling process for individual owners by providing a transparent, secure, and
                  supportive platform.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">
                  We prioritize trust, customer satisfaction, and integrity in every step of the car selling journey.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose CarConnect?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Safe & Secure</h3>
                <p className="text-gray-600 text-sm">We handle all processes with transparency and security.</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Trusted Professionals</h3>
                <p className="text-gray-600 text-sm">Our team provides expert guidance and support at every step.</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Customer First</h3>
                <p className="text-gray-600 text-sm">We are dedicated to making car selling stress-free for you.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join the CarConnect Family</h2>
            <p className="mb-6">Experience car selling like never before with CarConnect's trusted platform.</p>
            <a
              href="/sell-your-car"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Selling Your Car
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
