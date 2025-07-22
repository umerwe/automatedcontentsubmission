"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Video,
  Shield,
  Brain,
  Github,
  Chrome,
  Apple,
  User,
  Users,
  Star,
  Building,
  Phone,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [userType, setUserType] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const socialProviders = [
    { name: "Google", icon: Chrome, gradient: "from-red-500 to-yellow-500" },
    { name: "GitHub", icon: Github, gradient: "from-gray-700 to-gray-900" },
    { name: "Apple", icon: Apple, gradient: "from-gray-800 to-black" },
  ]

  const userTypes = [
    {
      type: "team",
      title: "Team Registration",
      description: "Register your team for the competition",
      icon: Users,
      gradient: "from-violet-500 to-purple-600",
      features: ["Team collaboration", "Video submission", "Real-time feedback"],
    },
    {
      type: "evaluator",
      title: "Evaluator Registration",
      description: "Join as an expert evaluator",
      icon: Star,
      gradient: "from-cyan-500 to-blue-600",
      features: ["Expert evaluation", "Detailed feedback", "Industry recognition"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center p-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Back to Home */}
      <Link href="/" className="absolute top-8 left-8 z-40">
        <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm">
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
          Back to Home
        </Button>
      </Link>

      {/* Progress Indicator */}
      <div className="absolute top-8 right-8 z-40">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                step <= currentStep ? "bg-gradient-to-r from-violet-500 to-purple-600" : "bg-white/20"
              }`}
            />
          ))}
          <span className="text-white text-sm ml-2">Step {currentStep}/3</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto">
        {/* Step 1: User Type Selection */}
        {currentStep === 1 && (
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
                    NeuralVision
                  </h1>
                  <p className="text-purple-300 font-medium text-lg">AI Competition Platform</p>
                </div>
              </div>

              <h2 className="text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Join the</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolution
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Choose your path and become part of the world`&lsquo;`s most innovative AI competition platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {userTypes.map((type) => (
                <Card
                  key={type.type}
                  className={`border-2 cursor-pointer transition-all duration-500 hover:-translate-y-4 group ${
                    userType === type.type
                      ? "border-violet-500 bg-gradient-to-br from-violet-500/20 to-purple-500/20 shadow-2xl shadow-violet-500/25"
                      : "border-white/20 bg-white/5 hover:border-white/40"
                  } backdrop-blur-xl rounded-3xl overflow-hidden`}
                  onClick={() => {
                    setUserType(type.type)
                    setFormData({ ...formData, userType: type.type })
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                  <CardHeader className="relative z-10 text-center pb-6 pt-12">
                    <div
                      className={`w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 bg-gradient-to-r ${type.gradient} shadow-2xl`}
                    >
                      <type.icon className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-3">{type.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {type.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10 px-8 pb-8">
                    <div className="space-y-3">
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {userType === type.type && (
                      <Badge className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 mx-auto block w-fit">
                        <Shield className="w-4 h-4 mr-2" />
                        Selected
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={nextStep}
              disabled={!userType}
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 text-white text-lg px-12 py-6 rounded-2xl shadow-2xl shadow-purple-500/25 border-0 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue Registration
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}

        {/* Step 2: Account Details */}
        {currentStep === 2 && (
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 bg-white/10 backdrop-blur-2xl shadow-2xl shadow-black/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
              <CardHeader className="relative z-10 text-center pb-8 pt-12">
                <Badge className="mb-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-200 border-violet-500/30 hover:bg-violet-500/30 backdrop-blur-sm mx-auto">
                  <Shield className="w-4 h-4 mr-2" />
                  Account Setup
                </Badge>
                <CardTitle className="text-3xl font-bold text-white mb-2">Create Your Account</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  Set up your secure login credentials
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 px-12 pb-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="pl-12 pr-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white font-medium">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="pl-12 pr-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-transparent text-gray-400">Or continue with</span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-3 gap-3">
                    {socialProviders.map((provider) => (
                      <Button
                        key={provider.name}
                        type="button"
                        variant="outline"
                        className="h-12 bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 group"
                      >
                        <provider.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                      </Button>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="flex-1 h-14 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm rounded-2xl"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 h-14 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 border-0 transition-all duration-300 group"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Profile Details */}
        {currentStep === 3 && (
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white/10 backdrop-blur-2xl shadow-2xl shadow-black/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
              <CardHeader className="relative z-10 text-center pb-8 pt-12">
                <Badge className="mb-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-200 border-violet-500/30 hover:bg-violet-500/30 backdrop-blur-sm mx-auto">
                  <User className="w-4 h-4 mr-2" />
                  Profile Setup
                </Badge>
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  {userType === "team" ? "Team Information" : "Evaluator Profile"}
                </CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  {userType === "team"
                    ? "Tell us about your team and competition goals"
                    : "Share your expertise and qualifications"}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 px-12 pb-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {userType === "team" ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="teamName" className="text-white font-medium">
                          Team Name
                        </Label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="teamName"
                            placeholder="Your awesome team name"
                            value={formData.teamName}
                            onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                            className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="teamLeadName" className="text-white font-medium">
                          Team Lead Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="teamLeadName"
                            placeholder="Team leader's full name"
                            value={formData.teamLeadName}
                            onChange={(e) => setFormData({ ...formData, teamLeadName: e.target.value })}
                            className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="institution" className="text-white font-medium">
                          Institution
                        </Label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="institution"
                            placeholder="University or organization"
                            value={formData.institution}
                            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                            className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactNumber" className="text-white font-medium">
                          Contact Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="contactNumber"
                            placeholder="+1 (555) 123-4567"
                            value={formData.contactNumber}
                            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                            className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="teamSize" className="text-white font-medium">
                          Team Size
                        </Label>
                        <Select
                          value={formData.teamSize}
                          onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                        >
                          <SelectTrigger className="h-14 bg-white/10 border-white/20 text-white rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500">
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-white/20 text-white">
                            <SelectItem value="1">1 Member (Solo)</SelectItem>
                            <SelectItem value="2">2 Members</SelectItem>
                            <SelectItem value="3">3 Members</SelectItem>
                            <SelectItem value="4">4 Members</SelectItem>
                            <SelectItem value="5">5 Members (Maximum)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-white font-medium">
                          Full Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="fullName"
                            placeholder="Your full name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="qualification" className="text-white font-medium">
                          Qualification
                        </Label>
                        <div className="relative">
                          <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="qualification"
                            placeholder="PhD in Computer Science"
                            value={formData.qualification}
                            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                            className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience" className="text-white font-medium">
                          Experience
                        </Label>
                        <div className="relative">
                          <Star className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="experience"
                            placeholder="15 years in academia"
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                            className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber" className="text-white font-medium">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="phoneNumber"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="expertise" className="text-white font-medium">
                          Areas of Expertise
                        </Label>
                        <div className="relative">
                          <Brain className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                          <Input
                            id="expertise"
                            placeholder="Machine Learning, AI, Educational Technology"
                            value={formData.expertise}
                            onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                            className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="bio" className="text-white font-medium">
                          Professional Bio
                        </Label>
                        <Textarea
                          id="bio"
                          placeholder="Brief description of your professional background and expertise..."
                          value={formData.bio}
                          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-violet-500 transition-all duration-300 min-h-[120px]"
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
                      className="flex-1 h-14 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm rounded-2xl"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 h-14 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 border-0 transition-all duration-300 group"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Creating Account...</span>
                        </div>
                      ) : (
                        <>
                          Complete Registration
                          <Sparkles className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-gray-400">
                      Already have an account?{" "}
                      <Link
                        href="/auth/login"
                        className="text-violet-400 hover:text-violet-300 font-semibold transition-colors"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
