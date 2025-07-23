"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowLeft,
  FileSearch,
  User,
  Users,
  Star,
  Building,
  Phone,
  GraduationCap,
  ArrowRight,
  Bot,
  Shield,
  Zap,
  Settings,
} from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [userType, setUserType] = useState("")
  const [formData, setFormData] = useState({
    // Common fields
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",

    // Team fields
    teamName: "",
    teamLeadName: "",
    institution: "",
    contactNumber: "",
    teamSize: "",

    // Evaluator fields
    fullName: "",
    qualification: "",
    experience: "",
    expertise: "",
    bio: "",
    address: "",
    phoneNumber: "",

    // Admin fields
    adminName: "",
    department: "",
    accessLevel: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const userTypes = [
    {
      type: "admin",
      title: "System Administrator",
      description: "Manage the entire evaluation platform and oversee operations",
      icon: Settings,
      features: ["Full system access", "User management", "Analytics dashboard", "System configuration"],
      color: "from-purple-500 to-indigo-600",
    },
    {
      type: "evaluator",
      title: "Academic Evaluator",
      description: "Join as an expert evaluator to assess academic submissions",
      icon: Star,
      features: ["Evaluate submissions", "Provide expert feedback", "Earn recognition", "Build professional network"],
      color: "from-emerald-500 to-teal-600",
    },
    {
      type: "team",
      title: "Content Submitter",
      description: "Submit academic work for AI-powered evaluation and feedback",
      icon: Users,
      features: [
        "Submit papers & projects",
        "Receive detailed feedback",
        "Track evaluation progress",
        "Access analytics",
      ],
      color: "from-blue-500 to-cyan-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="flex items-center space-x-2 mb-8">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-white/50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <FileSearch className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">EvalPro</h1>
              <p className="text-sm text-blue-600">Academic Evaluation System</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 transition-all duration-300 ${
                      step < currentStep ? "bg-gradient-to-r from-blue-500 to-indigo-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: User Type Selection */}
        {currentStep === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Role</h2>
              <p className="text-lg text-gray-600">Select how you want to participate in the platform</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {userTypes.map((type) => (
                <Card
                  key={type.type}
                  className={`cursor-pointer transition-all duration-300 border-2 hover:scale-[1.02] ${
                    userType === type.type
                      ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/20"
                      : "border-gray-200 bg-white/80 hover:bg-white hover:border-gray-300"
                  }`}
                  onClick={() => {
                    setUserType(type.type)
                    setFormData({ ...formData, userType: type.type })
                  }}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${type.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <type.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{type.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {userType === type.type && (
                      <Badge className="mt-4 bg-blue-100 text-blue-700 border-blue-200">Selected</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={nextStep}
                disabled={!userType}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Account Details */}
        {currentStep === 2 && (
          <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-xl shadow-2xl border-0">
            <CardHeader className="text-center">
              <div className="flex justify-center space-x-6 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Secure</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Fast</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Bot className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">AI-Powered</span>
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Create Your Account</CardTitle>
              <CardDescription className="text-gray-600">Set up your login credentials</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email address
                  </Label>
                  <div className="mt-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="mt-1 relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm password
                  </Label>
                  <div className="mt-1 relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="pl-10 pr-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="flex-1 h-11 bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 h-11 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Profile Details */}
        {currentStep === 3 && (
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                {userType === "admin"
                  ? "Administrator Information"
                  : userType === "evaluator"
                    ? "Evaluator Profile"
                    : "Submitter Information"}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {userType === "admin"
                  ? "Provide your administrative details"
                  : userType === "evaluator"
                    ? "Share your professional background"
                    : "Provide details about yourself or your team"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {userType === "admin" ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="adminName" className="text-sm font-medium text-gray-700">
                        Full Name
                      </Label>
                      <div className="mt-1 relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="adminName"
                          placeholder="Enter your full name"
                          value={formData.adminName}
                          onChange={(e) => setFormData({ ...formData, adminName: e.target.value })}
                          className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                        Department
                      </Label>
                      <div className="mt-1 relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="department"
                          placeholder="IT Department"
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="accessLevel" className="text-sm font-medium text-gray-700">
                        Access Level
                      </Label>
                      <Select
                        value={formData.accessLevel}
                        onValueChange={(value) => setFormData({ ...formData, accessLevel: value })}
                      >
                        <SelectTrigger className="mt-1 h-11 bg-gray-50/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300">
                          <SelectValue placeholder="Select access level" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200">
                          <SelectItem value="super-admin">Super Administrator</SelectItem>
                          <SelectItem value="admin">Administrator</SelectItem>
                          <SelectItem value="moderator">Moderator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ) : userType === "team" ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                        Full Name
                      </Label>
                      <div className="mt-1 relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.teamLeadName}
                          onChange={(e) => setFormData({ ...formData, teamLeadName: e.target.value })}
                          className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="institution" className="text-sm font-medium text-gray-700">
                        Institution
                      </Label>
                      <div className="mt-1 relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="institution"
                          placeholder="University or organization"
                          value={formData.institution}
                          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                          className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contactNumber" className="text-sm font-medium text-gray-700">
                        Contact Number
                      </Label>
                      <div className="mt-1 relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="contactNumber"
                          placeholder="+1 (555) 123-4567"
                          value={formData.contactNumber}
                          onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                          className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="fieldOfStudy" className="text-sm font-medium text-gray-700">
                        Field of Study
                      </Label>
                      <Select
                        value={formData.teamSize}
                        onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                      >
                        <SelectTrigger className="mt-1 h-11 bg-gray-50/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300">
                          <SelectValue placeholder="Select your field" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200">
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="biology">Biology</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                        Full Name
                      </Label>
                      <div className="mt-1 relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="qualification" className="text-sm font-medium text-gray-700">
                        Qualification
                      </Label>
                      <div className="mt-1 relative">
                        <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="qualification"
                          placeholder="PhD in Computer Science"
                          value={formData.qualification}
                          onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                          className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                        Experience
                      </Label>
                      <div className="mt-1 relative">
                        <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="experience"
                          placeholder="15 years in academia"
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <div className="mt-1 relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="phoneNumber"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          className="pl-10 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="expertise" className="text-sm font-medium text-gray-700">
                        Areas of Expertise
                      </Label>
                      <Input
                        id="expertise"
                        placeholder="Machine Learning, AI, Educational Technology"
                        value={formData.expertise}
                        onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                        className="mt-1 h-11 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="bio" className="text-sm font-medium text-gray-700">
                        Professional Bio
                      </Label>
                      <Textarea
                        id="bio"
                        placeholder="Brief description of your professional background..."
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        className="mt-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="flex space-x-4 pt-6">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="flex-1 h-11 bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-700 transition-all duration-300"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 h-11 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      "Complete Registration"
                    )}
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/auth/login"
                      className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
