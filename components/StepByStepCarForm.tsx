"use client"

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
import { Car, ArrowLeft, ArrowRight, CheckCircle, Camera, FileText, User, MapPin } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface FormData {
  // Basic Info
  brand: string
  model: string
  year: string

  // Car Details
  fuelType: string
  transmission: string
  carType: string

  // Specifications
  engineCapacity: string
  color: string
  registrationNumber: string

  // Condition
  ownership: string
  condition: string
  accidentHistory: string

  // Service & Finance
  serviceHistory: string
  loanStatus: string
  insuranceValidity: string

  // Location & Price
  city: string
  state: string
  expectedPrice: string
  negotiable: boolean

  // Photos
  frontPhoto: File | null
  rearPhoto: File | null
  leftPhoto: File | null
  rightPhoto: File | null
  interiorPhoto: File | null
  rcDocument: File | null
  insuranceDocument: File | null

  // Contact
  fullName: string
  phone: string
  email: string

  // Additional
  mileage: string
  sellingReason: string
  preferredContactTime: string
}

const TOTAL_STEPS = 15

export default function StepByStepCarForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    transmission: "",
    carType: "",
    engineCapacity: "",
    color: "",
    registrationNumber: "",
    ownership: "",
    condition: "",
    accidentHistory: "",
    serviceHistory: "",
    loanStatus: "",
    insuranceValidity: "",
    city: "",
    state: "",
    expectedPrice: "",
    negotiable: false,
    frontPhoto: null,
    rearPhoto: null,
    leftPhoto: null,
    rightPhoto: null,
    interiorPhoto: null,
    rcDocument: null,
    insuranceDocument: null,
    fullName: "",
    phone: "",
    email: "",
    mileage: "",
    sellingReason: "",
    preferredContactTime: "",
  })

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.brand && formData.model && formData.year)
      case 2:
        return !!(formData.fuelType && formData.transmission && formData.carType)
      case 3:
        return !!(formData.engineCapacity && formData.color && formData.registrationNumber)
      case 4:
        return !!(formData.ownership && formData.condition && formData.accidentHistory)
      case 5:
        return !!(formData.serviceHistory && formData.loanStatus && formData.insuranceValidity)
      case 6:
        return !!(formData.city && formData.state && formData.expectedPrice)
      case 7:
        return !!formData.frontPhoto
      case 8:
        return !!formData.rearPhoto
      case 9:
        return !!(formData.leftPhoto && formData.rightPhoto)
      case 10:
        return !!formData.interiorPhoto
      case 11:
        return !!formData.rcDocument
      case 12:
        return !!formData.insuranceDocument
      case 13:
        return !!(formData.fullName && formData.phone && formData.email)
      case 14:
        return !!(formData.mileage && formData.preferredContactTime)
      default:
        return true
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleFileUpload = (field: keyof FormData, file: File | null) => {
    updateFormData(field, file)
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    setShowConfirmationPopup(true)
  }

  const handlePopupClose = () => {
    setShowConfirmationPopup(false)
    router.push("/success")
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <Car className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Car Basic Information</CardTitle>
              <p className="text-sm text-gray-600">Tell us about your car</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="brand">Car Brand/Make *</Label>
                <Input
                  id="brand"
                  value={formData.brand}
                  onChange={(e) => updateFormData("brand", e.target.value)}
                  placeholder="e.g., Toyota, Honda, BMW"
                />
              </div>
              <div>
                <Label htmlFor="model">Car Model *</Label>
                <Input
                  id="model"
                  value={formData.model}
                  onChange={(e) => updateFormData("model", e.target.value)}
                  placeholder="e.g., Camry, Civic, X5"
                />
              </div>
              <div>
                <Label htmlFor="year">Year of Manufacture *</Label>
                <Input
                  id="year"
                  type="number"
                  min="1990"
                  max="2024"
                  value={formData.year}
                  onChange={(e) => updateFormData("year", e.target.value)}
                  placeholder="2020"
                />
              </div>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <Car className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Car Details</CardTitle>
              <p className="text-sm text-gray-600">Engine and transmission details</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fuelType">Fuel Type *</Label>
                <Select value={formData.fuelType} onValueChange={(value) => updateFormData("fuelType", value)}>
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
                <Select value={formData.transmission} onValueChange={(value) => updateFormData("transmission", value)}>
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
                <Select value={formData.carType} onValueChange={(value) => updateFormData("carType", value)}>
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
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <Car className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Car Specifications</CardTitle>
              <p className="text-sm text-gray-600">Technical specifications</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="engineCapacity">Engine Capacity (CC) *</Label>
                <Input
                  id="engineCapacity"
                  type="number"
                  value={formData.engineCapacity}
                  onChange={(e) => updateFormData("engineCapacity", e.target.value)}
                  placeholder="1500"
                />
              </div>
              <div>
                <Label htmlFor="color">Car Color *</Label>
                <Select value={formData.color} onValueChange={(value) => updateFormData("color", value)}>
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
                  onChange={(e) => updateFormData("registrationNumber", e.target.value)}
                  placeholder="MH01AB1234"
                />
              </div>
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Car Condition</CardTitle>
              <p className="text-sm text-gray-600">Current condition details</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Ownership *</Label>
                <RadioGroup
                  value={formData.ownership}
                  onValueChange={(value) => updateFormData("ownership", value)}
                  className="grid grid-cols-2 gap-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="first" id="first" />
                    <Label htmlFor="first" className="text-sm">
                      First Owner
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="second" id="second" />
                    <Label htmlFor="second" className="text-sm">
                      Second Owner
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="third" id="third" />
                    <Label htmlFor="third" className="text-sm">
                      Third Owner
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fourth" id="fourth" />
                    <Label htmlFor="fourth" className="text-sm">
                      Fourth+ Owner
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="condition">Overall Condition *</Label>
                <Select value={formData.condition} onValueChange={(value) => updateFormData("condition", value)}>
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
                  onValueChange={(value) => updateFormData("accidentHistory", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No Accidents</SelectItem>
                    <SelectItem value="minor">Minor Accident</SelectItem>
                    <SelectItem value="major">Major Accident</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )

      case 5:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Service & Finance</CardTitle>
              <p className="text-sm text-gray-600">Maintenance and finance details</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="serviceHistory">Service History *</Label>
                <Select
                  value={formData.serviceHistory}
                  onValueChange={(value) => updateFormData("serviceHistory", value)}
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
                <Select value={formData.loanStatus} onValueChange={(value) => updateFormData("loanStatus", value)}>
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
              <div>
                <Label htmlFor="insuranceValidity">Insurance Valid Until *</Label>
                <Input
                  id="insuranceValidity" 
                  type="date"
                  value={formData.insuranceValidity}
                  onChange={(e) => updateFormData("insuranceValidity", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        )

      case 6:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Location & Price</CardTitle>
              <p className="text-sm text-gray-600">Where is your car located?</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                  placeholder="Mumbai"
                />
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => updateFormData("state", e.target.value)}
                  placeholder="Maharashtra"
                />
              </div>
              <div>
                <Label htmlFor="expectedPrice">Expected Price (₹) *</Label>
                <Input
                  id="expectedPrice"
                  type="number"
                  value={formData.expectedPrice}
                  onChange={(e) => updateFormData("expectedPrice", e.target.value)}
                  placeholder="500000"
                />
              </div>
              <div className="flex items-center space-x-2">
                {/* <Switch
                  id="negotiable"
                  checked={formData.negotiable}
                  onCheckedChange={(checked) => updateFormData("negotiable", checked)}
                /> */}
                {/* <Label htmlFor="negotiable">Price is negotiable</Label> */}
              </div>
            </CardContent>
          </Card>
        )

      case 7:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <Camera className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Front View Photo</CardTitle>
              <p className="text-sm text-gray-600">Upload a clear front view of your car</p>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-4">Take a photo of the front of your car</p>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload("frontPhoto", e.target.files?.[0] || null)}
                  className="mb-2"
                />
                {formData.frontPhoto && <p className="text-green-600 text-sm">✓ Front photo uploaded</p>}
              </div>
            </CardContent>
          </Card>
        )

      case 8:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <Camera className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Rear View Photo</CardTitle>
              <p className="text-sm text-gray-600">Upload a clear rear view of your car</p>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-4">Take a photo of the rear of your car</p>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload("rearPhoto", e.target.files?.[0] || null)}
                  className="mb-2"
                />
                {formData.rearPhoto && <p className="text-green-600 text-sm">✓ Rear photo uploaded</p>}
              </div>
            </CardContent>
          </Card>
        )

      case 9:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <Camera className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Side View Photos</CardTitle>
              <p className="text-sm text-gray-600">Upload left and right side views</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Left Side Photo *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload("leftPhoto", e.target.files?.[0] || null)}
                    className="mb-2"
                  />
                  {formData.leftPhoto && <p className="text-green-600 text-sm">✓ Left side photo uploaded</p>}
                </div>
              </div>
              <div>
                <Label>Right Side Photo *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload("rightPhoto", e.target.files?.[0] || null)}
                    className="mb-2"
                  />
                  {formData.rightPhoto && <p className="text-green-600 text-sm">✓ Right side photo uploaded</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 10:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <Camera className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Interior Photo</CardTitle>
              <p className="text-sm text-gray-600">Upload interior view of your car</p>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-4">Take a photo of the car interior</p>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload("interiorPhoto", e.target.files?.[0] || null)}
                  className="mb-2"
                />
                {formData.interiorPhoto && <p className="text-green-600 text-sm">✓ Interior photo uploaded</p>}
              </div>
            </CardContent>
          </Card>
        )

      case 11:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>RC Document</CardTitle>
              <p className="text-sm text-gray-600">Upload Registration Certificate</p>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-4">Upload clear photo of RC document</p>
                <Input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileUpload("rcDocument", e.target.files?.[0] || null)}
                  className="mb-2"
                />
                {formData.rcDocument && <p className="text-green-600 text-sm">✓ RC document uploaded</p>}
              </div>
            </CardContent>
          </Card>
        )

      case 12:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Insurance Document</CardTitle>
              <p className="text-sm text-gray-600">Upload Insurance Certificate</p>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-4">Upload clear photo of insurance document</p>
                <Input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileUpload("insuranceDocument", e.target.files?.[0] || null)}
                  className="mb-2"
                />
                {formData.insuranceDocument && <p className="text-green-600 text-sm">✓ Insurance document uploaded</p>}
              </div>
            </CardContent>
          </Card>
        )

      case 13:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <User className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Your Contact Details</CardTitle>
              <p className="text-sm text-gray-600">How can our company reach you?</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="john@example.com"
                />
              </div>
            </CardContent>
          </Card>
        )

      case 14:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <Car className="h-12 w-12 text-red-600 mx-auto mb-2" />
              <CardTitle>Additional Details</CardTitle>
              <p className="text-sm text-gray-600">Final details about your car</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="mileage">Mileage (KM Driven) *</Label>
                <Input
                  id="mileage"
                  type="number"
                  value={formData.mileage}
                  onChange={(e) => updateFormData("mileage", e.target.value)}
                  placeholder="50000"
                />
              </div>
              <div>
                <Label htmlFor="preferredContactTime">When can we contact you? *</Label>
                <Select
                  value={formData.preferredContactTime}
                  onValueChange={(value) => updateFormData("preferredContactTime", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred time" />
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
                <Label htmlFor="sellingReason">Reason for Selling (Optional)</Label>
                <Textarea
                  id="sellingReason"
                  value={formData.sellingReason}
                  onChange={(e) => updateFormData("sellingReason", e.target.value)}
                  placeholder="Why are you selling this car?"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        )

      case 15:
        return (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle>Review & Submit</CardTitle>
              <p className="text-sm text-gray-600">Please review your information</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Car:</span>
                  <span>
                    {formData.brand} {formData.model} ({formData.year})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Registration:</span>
                  <span>{formData.registrationNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Price:</span>
                  <span>₹{Number(formData.expectedPrice).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Contact:</span>
                  <span>{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Phone:</span>
                  <span>{formData.phone}</span>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Next Steps:</strong> Our company will review your submission and contact you within 24-48
                  hours to discuss your car sale.
                </p>
              </div>
              <Button onClick={handleSubmit} className="w-full bg-green-600 hover:bg-green-700">
                Submit Car Details
              </Button>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4">
      {/* Progress Bar */}
      <div className="max-w-md mx-auto mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep} of {TOTAL_STEPS}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round((Math.max(currentStep - 1, 0) / TOTAL_STEPS) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">

          <div
            className="bg-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(Math.max(currentStep - 1, 0) / TOTAL_STEPS) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      {renderStep()}

      {/* Navigation Buttons */}
      <div className="max-w-md mx-auto mt-6 flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center bg-transparent"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {currentStep < TOTAL_STEPS && (
          <Button
            onClick={nextStep}
            disabled={!validateStep(currentStep)}
            className="bg-red-600 hover:bg-red-700 flex items-center"
          >
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>

      {/* Confirmation Popup */}
      <Dialog open={showConfirmationPopup} onOpenChange={setShowConfirmationPopup}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-green-600 mb-4">
              🎉 Submission Successful!
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="text-center bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700 text-sm">
                Our company will connect with you within <strong>24-48 hours</strong> regarding your car sale.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-800">Your Details:</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Name:</span>
                  <span>{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span>{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Car:</span>
                  <span>
                    {formData.brand} {formData.model}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Registration:</span>
                  <span>{formData.registrationNumber}</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button onClick={handlePopupClose} className="bg-red-600 hover:bg-red-700">
                Continue
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
