import Link from "next/link"
import { CheckCircle, Home, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="py-12">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your car details have been successfully submitted. Our team will review your submission and contact you shortly.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-blue-800">
                <strong>Next Steps:</strong>
                <br />• Our experts will verify your car details
                <br />• We'll reach out to you for further discussion
                <br />• You will receive guidance on the next process from our team
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="flex items-center bg-transparent">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/sell-your-car">
                <Button className="bg-red-600 hover:bg-red-700 flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Submit Another Car
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
