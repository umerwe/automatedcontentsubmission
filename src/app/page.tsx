"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Video, ArrowRight, Target, Sparkles, Zap, Globe, Brain, Rocket } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    { label: "Global Teams", value: "2.5K+", icon: Users, gradient: "from-violet-500 to-purple-600" },
    { label: "AI Evaluators", value: "150+", icon: Brain, gradient: "from-cyan-500 to-blue-600" },
    { label: "Video Submissions", value: "8.9K+", icon: Video, gradient: "from-pink-500 to-rose-600" },
    { label: "Prize Pool", value: "$50K", icon: Trophy, gradient: "from-amber-500 to-orange-600" },
  ]

  const features = [
    {
      title: "AI-Powered Evaluation",
      description:
        "Advanced machine learning algorithms provide instant, accurate assessments with human-level precision",
      icon: Brain,
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      delay: "0ms",
    },
    {
      title: "Real-time Collaboration",
      description:
        "Seamless team collaboration with live editing, instant feedback, and synchronized progress tracking",
      icon: Zap,
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      delay: "100ms",
    },
    {
      title: "Global Recognition",
      description: "Compete with the world's brightest minds and gain recognition from industry leaders worldwide",
      icon: Globe,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      delay: "200ms",
    },
  ]

  const timeline = [
    { phase: "Registration", date: "Jan 1 - Feb 15", status: "active", icon: Users },
    { phase: "Innovation", date: "Jan 15 - Mar 31", status: "upcoming", icon: Rocket },
    { phase: "Evaluation", date: "Apr 1 - Apr 15", status: "upcoming", icon: Target },
    { phase: "Victory", date: "Apr 30", status: "upcoming", icon: Trophy },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Navigation */}
      <nav className="relative z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
                  NeuralVision
                </span>
                <div className="text-xs text-purple-300 font-medium">AI Competition Platform</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/25 border-0">
                  Get Started
                  <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-30 py-32 px-6">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-8 bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-200 border-violet-500/30 hover:bg-violet-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />🚀 Next-Gen AI Evaluation Platform
            </Badge>

            <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent">
                Redefine
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the future of competitive learning with our AI-powered evaluation system. Create groundbreaking
              videos, compete globally, and shape tomorrow`&apos;`s technology landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/auth/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 text-white text-lg px-12 py-6 rounded-2xl shadow-2xl shadow-purple-500/25 border-0 group"
                >
                  Launch Your Journey
                  <Rocket className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/leaderboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-6 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30"
                >
                  Explore Leaderboard
                  <Trophy className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className={`border-0 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 group ${isLoaded ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-30 py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Powered by cutting-edge AI and designed for the next generation of innovators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border-0 bg-gradient-to-br ${feature.gradient} p-1 rounded-3xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 hover:-translate-y-4 group`}
                style={{ animationDelay: feature.delay }}
              >
                <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 h-full">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-center leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-30 py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Competition Journey
            </h2>
            <p className="text-xl text-gray-400">Your path to innovation excellence</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {timeline.map((phase, index) => (
                <Card
                  key={index}
                  className={`border-2 ${
                    phase.status === "active"
                      ? "border-violet-500 bg-gradient-to-br from-violet-500/20 to-purple-500/20 shadow-2xl shadow-violet-500/25"
                      : "border-white/20 bg-white/5"
                  } backdrop-blur-xl rounded-3xl transition-all duration-500 hover:-translate-y-2 group`}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                        phase.status === "active"
                          ? "bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg shadow-violet-500/50"
                          : "bg-white/10"
                      }`}
                    >
                      <phase.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">{phase.phase}</CardTitle>
                    <CardDescription className="font-semibold text-gray-300">{phase.date}</CardDescription>
                    {phase.status === "active" && (
                      <Badge className="mt-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        Active Now
                      </Badge>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-30 py-32 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Ready to Make History?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of innovators pushing the boundaries of what`&apos;`s possible. Your breakthrough moment starts
              here.
            </p>
            <Link href="/auth/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 text-white text-xl px-16 py-8 rounded-2xl shadow-2xl shadow-purple-500/25 border-0 group"
              >
                Begin Your Legacy
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 border-t border-white/10 bg-black/20 backdrop-blur-xl py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Video className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              NeuralVision
            </span>
          </div>
          <p className="text-gray-400 mb-6 text-lg">Empowering the next generation of AI innovators</p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <span>© 2024 NeuralVision</span>
            <span>•</span>
            <span>Crafted with 💜 for innovators</span>
            <span>•</span>
            <span>Powered by AI</span>
          </div>
        </div>
      </footer>

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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
