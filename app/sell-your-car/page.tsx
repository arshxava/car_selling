import StepByStepCarForm from "@/components/StepByStepCarForm"

export default function SellYourCarPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sell Your Car</h1>
            <p className="text-gray-600">Fill out the form below to connect with us</p>
          </div>
          <StepByStepCarForm />
        </div>
      </div>
    </div>
  )
}
