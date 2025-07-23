"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Users, Star, Settings } from 'lucide-react'
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // Redirect based on user type
    if (userType === "admin") {
      window.location.href = "/dashboard/admin"
    } else if (userType === "evaluator") {
      window.location.href = "/dashboard/evaluator"
    } else if (userType === "team") {
      window.location.href = "/dashboard/team"
    }
    
    setIsLoading(false)
  }

  const userTypes = [
    {
      value: "admin",
      label: "System Administrator",
      icon: Settings,
      description: "Manage the entire evaluation system",
      color: "from-purple-500 to-indigo-600"
    },
    {
      value: "evaluator",
      label: "Academic Evaluator",
      icon: Star,
      description: "Evaluate and provide expert feedback",
      color: "from-emerald-500 to-teal-600"
    },
    {
      value: "team",
      label: "Content Submitter",
      icon: Users,
      description: "Submit work for evaluation",
      color: "from-blue-500 to-cyan-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="sm sm:w-full sm:max-w-md">
        <Link href="/" className="flex space-x-2 mb-3">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-white/50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        
      </div>

      {/* Login Form */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-white/80 backdrop-blur-xl shadow-2xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600">Sign in to access your evaluation dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Label htmlFor="userType" className="text-sm font-medium text-gray-700">
                  Account Type
                </Label>
                <Select value={userType} onValueChange={setUserType} required>
                  <SelectTrigger className="mt-2 h-12 bg-gray-50/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300">
                    <SelectValue placeholder="Select your account type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    {userTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value} className="hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center`}>
                            <type.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-xs text-gray-500">{type.description}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email address
                </Label>
                <div className="mt-2 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="mt-2 relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10 h-12 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading || !userType}
                className="w-full h-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign in to Dashboard"
                )}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/auth/register"
                    className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
