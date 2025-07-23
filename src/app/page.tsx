"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users,ArrowRight,Star,Award, PlayCircle, MessageSquare, BookOpen, ChevronRight, FileText, Gauge, LayoutDashboard, Bot, ShieldCheck, FileSearch, ClipboardCheck, FileInput, FileOutput, FileBarChart2, FileDigit, FileCode, FileSpreadsheet, FileKey, FilePieChart, FileClock, FileHeart } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'

export default function HomePage() {
  const stats = [
    { label: "Evaluated Submissions", value: "24,892", change: "+18%", icon: Award, color: "from-indigo-500 to-blue-500" },
    { label: "Active Evaluators", value: "1,428", change: "+12%", icon: Users, color: "from-emerald-500 to-teal-500" },
    { label: "Average Rating", value: "4.8/5", change: "+0.2", icon: Star, color: "from-amber-500 to-orange-500" },
    { label: "Evaluation Speed", value: "2.4h", change: "-0.8h", icon: Gauge, color: "from-purple-500 to-pink-500" },
  ]

  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Our advanced algorithms evaluate content with human-level precision across multiple dimensions",
      icon: Bot,
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Multi-Criteria Scoring",
      description: "Comprehensive rubric-based assessment with detailed breakdowns",
      icon: ClipboardCheck,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Plagiarism Detection",
      description: "Enterprise-grade similarity checking across academic databases",
      icon: ShieldCheck,
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Real-time Feedback",
      description: "Instant evaluation results with actionable improvement suggestions",
      icon: FileBarChart2,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Bias Mitigation",
      description: "Proprietary algorithms ensure fair, consistent evaluations",
      icon: FileSearch,
      color: "from-rose-500 to-red-600",
    },
    {
      title: "Detailed Analytics",
      description: "Performance tracking and benchmarking against peers",
      icon: FileSpreadsheet,
      color: "from-violet-500 to-purple-600",
    },
  ]

  const workflow = [
    { 
      step: "1. Content Submission", 
      description: "Upload documents, videos, or code through our secure portal", 
      icon: FileInput,
      color: "bg-blue-500"
    },
    { 
      step: "2. Automated Processing", 
      description: "Our system parses and prepares content for evaluation", 
      icon: FileDigit,
      color: "bg-indigo-500"
    },
    { 
      step: "3. Multi-Layer Analysis", 
      description: "AI evaluates structure, content quality, originality, and more", 
      icon: FileCode,
      color: "bg-purple-500"
    },
    { 
      step: "4. Human Verification", 
      description: "Expert reviewers validate and refine AI assessments", 
      icon: FileSearch,
      color: "bg-pink-500"
    },
    { 
      step: "5. Results Delivery", 
      description: "Receive comprehensive evaluation reports", 
      icon: FileOutput,
      color: "bg-emerald-500"
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Computer Science Professor",
      university: "Stanford University",
      content: "This system has revolutionized how we evaluate student work. The AI provides remarkably nuanced feedback that complements our human grading perfectly.",
      avatar: "SC",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Academic Integrity",
      university: "MIT",
      content: "The plagiarism detection is the most sophisticated I&quot;ve seen. It catches subtle forms of academic dishonesty that other systems miss.",
      avatar: "MR",
      rating: 5,
    },
    {
      name: "Alex Thompson",
      role: "Graduate Researcher",
      university: "UC Berkeley",
      content: "The detailed feedback helped me improve my research papers significantly. I can see exactly where I need to focus to elevate my work.",
      avatar: "AT",
      rating: 5,
    },
  ]

  const evaluationTypes = [
    { name: "Academic Papers", count: "12,492 evaluations", icon: FileText, color: "bg-blue-500" },
    { name: "Research Proposals", count: "8,742 evaluations", icon: FileSearch, color: "bg-indigo-500" },
    { name: "Code Submissions", count: "6,921 evaluations", icon: FileCode, color: "bg-purple-500" },
    { name: "Video Presentations", count: "5,328 evaluations", icon: FileCode, color: "bg-pink-500" },
    { name: "Technical Reports", count: "4,156 evaluations", icon: FileBarChart2, color: "bg-emerald-500" },
    { name: "Thesis/Dissertations", count: "3,842 evaluations", icon: FileKey, color: "bg-amber-500" },
  ]

  const metrics = [
    { name: "Content Depth", value: "92%", improvement: "+7%", icon: FilePieChart },
    { name: "Originality Score", value: "88%", improvement: "+12%", icon: FileHeart },
    { name: "Structural Quality", value: "94%", improvement: "+5%", icon: FileClock },
    { name: "Citation Accuracy", value: "89%", improvement: "+15%", icon: FileDigit },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileSearch className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">EvalPro</span>
                <div className="text-xs text-blue-300">Academic Evaluation System</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#workflow" className="text-slate-300 hover:text-white transition-colors">Workflow</a>
              <a href="#metrics" className="text-slate-300 hover:text-white transition-colors">Metrics</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800/50">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/90 to-slate-950"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
                🚀 Now with enhanced AI evaluation models
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Next-Generation <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                <Typewriter
                  words={['Content Evaluation', 'Academic Assessment', 'Automated Grading', 'Plagiarism Detection']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform how you evaluate academic work with our AI-powered platform that combines 
              machine precision with human insight for comprehensive, bias-resistant assessments.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/auth/register">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] group">
                  Start Evaluating
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 group">
                  <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-[1.02] group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-emerald-400 font-medium">{stat.change} this quarter</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Advanced Evaluation Features</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive tools for thorough, objective content assessment
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-[1.02] group h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 text-center leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Evaluation Workflow</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our streamlined process ensures accurate, consistent results
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-indigo-500/20 to-purple-500/20"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
              {workflow.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 z-10 hidden lg:block"></div>
                  
                  <Card className={`border-2 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-[1.02] ${
                    index % 2 === 0 ? "lg:mt-0" : "lg:mt-16"
                  }`}>
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.color} shadow-lg`}>
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg text-white">{step.step}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Evaluation Metrics</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive scoring across key academic dimensions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                        <metric.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{metric.name}</h3>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-2xl font-bold text-white">{metric.value}</span>
                          <span className="text-sm text-emerald-400">↑ {metric.improvement}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Supported Content Types</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized evaluation models for different academic formats
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl ${type.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <type.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">{type.name}</h3>
                        <p className="text-sm text-slate-400">{type.count}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Trusted by Academics</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              What educators and researchers say about our platform
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-[1.02] group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12 border-2 border-blue-500/30">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                        <p className="text-xs text-blue-400">{testimonial.university}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 italic leading-relaxed">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-900/30 via-slate-900/70 to-indigo-900/30 backdrop-blur-xl rounded-3xl p-12 border border-slate-800/50">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Ready to Transform Evaluation?</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Join hundreds of institutions using our platform to deliver faster, fairer, 
              and more insightful academic evaluations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth/register">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-12 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="px-12 py-4 text-lg border-slate-700 bg-slate-900/50 text-white hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300">
                  <LayoutDashboard className="mr-2 w-5 h-5" />
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 border-t border-slate-800/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileSearch className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">EvalPro</span>
                  <div className="text-xs text-blue-300">Academic Evaluation System</div>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                The most advanced AI-powered evaluation platform for academic institutions and researchers.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800/50">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Support
                </Button>
                <Button size="sm" variant="outline" className="border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800/50">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Features</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">API</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Integrations</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Blog</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Case Studies</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Research</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 EvalPro. All rights reserved. Designed for academic excellence.
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}