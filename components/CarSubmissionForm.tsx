"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Car } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function CarSubmissionForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    transmission: "",
    carType: "",
    mileage: "",
    ownership: "",
    condition: "",
    accidentHistory: "",
    insuranceValidity: "",
    city: "",
    state: "",
    expectedPrice: "",
    negotiable: false,
    sellingReason: "",
    fullName: "",
    phone: "",
    email: "",
    sellerCity: "",
    sellerState: "",
    // Add these new fields
    engineCapacity: "",
    color: "",
    registrationNumber: "",
    serviceHistory: "",
    modifications: "",
    accessories: "",
    loanStatus: "",
    features: "",
    preferredContactTime: "",
    additionalNotes: "",
  })

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setShowConfirmationPopup(true)
  }

  const handlePopupClose = () => {
    setShowConfirmationPopup(false)
    router.push("/success")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Car Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Car className="mr-2 h-5 w-5 text-red-600" />
            Car Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="brand">Car Brand/Make *</Label>
              <Input
                id="brand"
                value={formData.brand}
                onChange={(e) => handleInputChange("brand", e.target.value)}
                placeholder="e.g., Toyota, Honda, BMW"
                required
              />
            </div>
            <div>
              <Label htmlFor="model">Car Model *</Label>
              <Input
                id="model"
                value={formData.model}
                onChange={(e) => handleInputChange("model", e.target.value)}
                placeholder="e.g., Camry, Civic, X5"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="year">Year of Manufacture *</Label>
              <Input
                id="year"
                type="number"
                min="1990"
                max="2024"
                value={formData.year}
                onChange={(e) => handleInputChange("year", e.target.value)}
                placeholder="2020"
                required
              />
            </div>
            <div>
              <Label htmlFor="mileage">Mileage (KM Driven) *</Label>
              <Input
                id="mileage"
                type="number"
                value={formData.mileage}
                onChange={(e) => handleInputChange("mileage", e.target.value)}
                placeholder="50000"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="engineCapacity">Engine Capacity (CC) *</Label>
              <Input
                id="engineCapacity"
                type="number"
                value={formData.engineCapacity}
                onChange={(e) => handleInputChange("engineCapacity", e.target.value)}
                placeholder="1500"
                required
              />
            </div>
            <div>
              <Label htmlFor="color">Car Color *</Label>
              <Select value={formData.color} onValueChange={(value) => handleInputChange("color", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="white">White</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="silver">Silver</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="grey">Grey</SelectItem>
                  <SelectItem value="brown">Brown</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="registrationNumber">Registration Number *</Label>
              <Input
                id="registrationNumber"
                value={formData.registrationNumber}
                onChange={(e) => handleInputChange("registrationNumber", e.target.value)}
                placeholder="MH01AB1234"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="fuelType">Fuel Type *</Label>
              <Select value={formData.fuelType} onValueChange={(value) => handleInputChange("fuelType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select fuel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrol">Petrol</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="cng">CNG</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="transmission">Transmission *</Label>
              <Select value={formData.transmission} onValueChange={(value) => handleInputChange("transmission", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="automatic">Automatic</SelectItem>
                  <SelectItem value="cvt">CVT</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="carType">Car Type *</Label>
              <Select value={formData.carType} onValueChange={(value) => handleInputChange("carType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select car type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="crossover">Crossover</SelectItem>
                  <SelectItem value="coupe">Coupe</SelectItem>
                  <SelectItem value="convertible">Convertible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="serviceHistory">Service History *</Label>
              <Select
                value={formData.serviceHistory}
                onValueChange={(value) => handleInputChange("serviceHistory", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select service history" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="complete">Complete Service History</SelectItem>
                  <SelectItem value="partial">Partial Service History</SelectItem>
                  <SelectItem value="missing">Missing Service History</SelectItem>
                  <SelectItem value="self-maintained">Self Maintained</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="loanStatus">Loan/Finance Status *</Label>
              <Select value={formData.loanStatus} onValueChange={(value) => handleInputChange("loanStatus", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select loan status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-loan">No Outstanding Loan</SelectItem>
                  <SelectItem value="loan-pending">Loan Pending</SelectItem>
                  <SelectItem value="hypothecated">Hypothecated to Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Ownership *</Label>
            <RadioGroup
              value={formData.ownership}
              onValueChange={(value) => handleInputChange("ownership", value)}
              className="flex flex-wrap gap-6 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="first" id="first" />
                <Label htmlFor="first">First Owner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="second" id="second" />
                <Label htmlFor="second">Second Owner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="third" id="third" />
                <Label htmlFor="third">Third Owner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fourth" id="fourth" />
                <Label htmlFor="fourth">Fourth+ Owner</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="modifications">Modifications/Alterations</Label>
            <Textarea
              id="modifications"
              value={formData.modifications}
              onChange={(e) => handleInputChange("modifications", e.target.value)}
              placeholder="List any modifications made to the car (e.g., aftermarket parts, engine modifications, etc.)"
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="accessories">Accessories Included</Label>
            <Textarea
              id="accessories"
              value={formData.accessories}
              onChange={(e) => handleInputChange("accessories", e.target.value)}
              placeholder="List accessories included with the car (e.g., music system, seat covers, floor mats, etc.)"
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="features">Key Features</Label>
            <Textarea
              id="features"
              value={formData.features}
              onChange={(e) => handleInputChange("features", e.target.value)}
              placeholder="Highlight key features (e.g., ABS, Airbags, Power Steering, AC, Sunroof, etc.)"
              rows={2}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="condition">Condition *</Label>
              <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="poor">Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="accidentHistory">Accident History *</Label>
              <Select
                value={formData.accidentHistory}
                onValueChange={(value) => handleInputChange("accidentHistory", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="minor">Minor Accident</SelectItem>
                  <SelectItem value="major">Major Accident</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="insuranceValidity">Insurance Validity *</Label>
              <Input
                id="insuranceValidity"
                type="date"
                value={formData.insuranceValidity}
                onChange={(e) => handleInputChange("insuranceValidity", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="expectedPrice">Expected Price (₹) *</Label>
              <Input
                id="expectedPrice"
                type="number"
                value={formData.expectedPrice}
                onChange={(e) => handleInputChange("expectedPrice", e.target.value)}
                placeholder="500000"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="city">Car Location - City *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="Mumbai"
                required
              />
            </div>
            <div>
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                placeholder="Maharashtra"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="negotiable"
              checked={formData.negotiable}
              onCheckedChange={(checked) => handleInputChange("negotiable", checked)}
            />
            {/* <Label htmlFor="negotiable">Price is negotiable</Label> */}
          </div>

          <div>
            <Label htmlFor="sellingReason">Reason for Selling</Label>
            <Textarea
              id="sellingReason"
              value={formData.sellingReason}
              onChange={(e) => handleInputChange("sellingReason", e.target.value)}
              placeholder="Optional: Why are you selling this car?"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Photo Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="mr-2 h-5 w-5 text-red-600" />
            Upload Photos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="carPhotos">Car Photos *</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Upload photos: front, back, side, interior</p>
                <Input id="carPhotos" type="file" multiple accept="image/*" className="mt-2" />
              </div>
            </div>
            <div>
              <Label htmlFor="documents">RC & Insurance Copy *</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Upload RC and Insurance documents (Required)</p>
                <Input id="documents" type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="mt-2" required />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Seller Contact Details */}
      <Card>
        <CardHeader>
          <CardTitle>Seller Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91 9876543210"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="sellerCity">City *</Label>
              <Input
                id="sellerCity"
                value={formData.sellerCity}
                onChange={(e) => handleInputChange("sellerCity", e.target.value)}
                placeholder="Mumbai"
                required
              />
            </div>
            <div>
              <Label htmlFor="sellerState">State *</Label>
              <Input
                id="sellerState"
                value={formData.sellerState}
                onChange={(e) => handleInputChange("sellerState", e.target.value)}
                placeholder="Maharashtra"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="preferredContactTime">Preferred Contact Time</Label>
            <Select
              value={formData.preferredContactTime}
              onValueChange={(value) => handleInputChange("preferredContactTime", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="When can we contact you?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                <SelectItem value="anytime">Anytime</SelectItem>
                <SelectItem value="weekends">Weekends Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
              placeholder="Any additional information you'd like us to know about your car"
              rows={3}
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Important Notes:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Ensure all information provided is accurate</li>
              <li>• Upload clear, high-quality photos</li>
              <li>• Keep your documents ready for verification</li>
              <li>• Be available for buyer inquiries</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button type="submit" size="lg" className="bg-red-600 hover:bg-red-700 px-8">
          Submit Car Details
        </Button>
      </div>
      {/* Confirmation Popup */}
      <Dialog open={showConfirmationPopup} onOpenChange={setShowConfirmationPopup}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-green-600 mb-4">
              🎉 Submission Successful!
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Success Message */}
            <div className="text-center bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You for Submitting Your Car Details!</h3>
              <p className="text-green-700">
                Our team will review your submission and contact you within <strong>24-48 hours</strong> for further processing.
              </p>
            </div>

            {/* Seller Details Summary */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">📋 Submission Summary:</h4>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Name:</span>
                    <span>{formData.fullName || "Not provided"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone:</span>
                    <span>{formData.phone || "Not provided"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Email:</span>
                    <span>{formData.email || "Not provided"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Location:</span>
                    <span>{formData.sellerCity}, {formData.sellerState}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Car:</span>
                    <span>{formData.brand} {formData.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Year:</span>
                    <span>{formData.year || "Not provided"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Registration:</span>
                    <span className="font-mono">{formData.registrationNumber || "Not provided"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Expected Price:</span>
                    <span>₹{formData.expectedPrice ? Number(formData.expectedPrice).toLocaleString() : "Not provided"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-blue-800">🚀 What Happens Next?</h4>
              <div className="space-y-2 text-blue-700">
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-blue-600">1.</span>
                  <span>Our team will verify your car details and documents.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-blue-600">2.</span>
                  <span>We will contact you to discuss further steps.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-blue-600">3.</span>
                  <span>Once verified, our team will guide you through the car selling process.</span>
                </div>
              </div>
            </div>

            {/* Important Note about Number Plates */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h5 className="font-semibold text-yellow-800 mb-2">📝 Important Note:</h5>
              <p className="text-yellow-700 text-sm">
                <strong>Car number plates are required</strong> for verification and legal documentation. Please ensure
                your registration number <strong>({formData.registrationNumber})</strong> is clearly visible in your
                uploaded photos.
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-center border-t pt-4">
              <p className="text-gray-600 text-sm mb-2">
                Need assistance? Call us at <strong>+91 1800-123-4567</strong> or email <strong>support@carconnect.com</strong>
              </p>
              <Button onClick={handlePopupClose} className="bg-red-600 hover:bg-red-700 px-8">
                Continue to Dashboard
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  )
}
