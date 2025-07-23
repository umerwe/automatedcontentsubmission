"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import {
  Star,
  FileText,
  Clock,
  CheckCircle,
  Play,
  Save,
  Send,
  Eye,
  BarChart3,
  Calendar,
  Bot,
  Award,
  Bell,
  Settings,
} from "lucide-react"

export default function EvaluatorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [scores, setScores] = useState({
    contentQuality: [85],
    originality: [92],
    structure: [78],
    methodology: [88],
    clarity: [90],
    citations: [82],
  })

  // Mock data
  const evaluatorData = {
    name: "Dr. Sarah Wilson",
    expertise: "Machine Learning & AI Ethics",
    totalAssigned: 45,
    completed: 38,
    pending: 7,
    averageScore: 87.3,
    accuracy: 96.8,
  }

  const assignedSubmissions = [
    {
      id: 1,
      title: "Deep Learning Applications in Healthcare",
      author: "Dr. Michael Chen",
      type: "Research Paper",
      pages: 24,
      status: "pending",
      submittedDate: "2024-03-20",
      priority: "high",
      aiScore: 89.2,
    },
    {
      id: 2,
      title: "Quantum Computing Algorithms",
      author: "Prof. Emily Rodriguez",
      type: "Technical Report",
      pages: 18,
      status: "completed",
      submittedDate: "2024-03-18",
      priority: "medium",
      score: 92.5,
      aiScore: 91.8,
    },
    {
      id: 3,
      title: "Ethical AI Framework Development",
      author: "Alex Thompson",
      type: "Thesis Chapter",
      pages: 32,
      status: "in_progress",
      submittedDate: "2024-03-22",
      priority: "high",
      aiScore: 87.6,
    },
  ]

  const evaluationCriteria = [
    {
      key: "contentQuality",
      name: "Content Quality",
      maxScore: 100,
      weight: "25%",
      description: "Depth and accuracy of content",
    },
    {
      key: "originality",
      name: "Originality",
      maxScore: 100,
      weight: "20%",
      description: "Novel contributions and insights",
    },
    {
      key: "structure",
      name: "Structure & Organization",
      maxScore: 100,
      weight: "15%",
      description: "Logical flow and organization",
    },
    {
      key: "methodology",
      name: "Methodology",
      maxScore: 100,
      weight: "20%",
      description: "Research methods and approach",
    },
    {
      key: "clarity",
      name: "Clarity & Writing",
      maxScore: 100,
      weight: "10%",
      description: "Writing quality and clarity",
    },
    {
      key: "citations",
      name: "Citations & References",
      maxScore: 100,
      weight: "10%",
      description: "Proper citation and references",
    },
  ]

  const getTotalScore = () => {
    const weights = {
      contentQuality: 0.25,
      originality: 0.2,
      structure: 0.15,
      methodology: 0.2,
      clarity: 0.1,
      citations: 0.1,
    }
    return Object.entries(scores)
      .reduce((total, [key, score]) => {
        return total + score[0] * weights[key as keyof typeof weights]
      }, 0)
      .toFixed(1)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Completed</Badge>
      case "in_progress":
        return <Badge className="bg-amber-100 text-amber-700 border-amber-200">In Progress</Badge>
      case "pending":
        return <Badge className="bg-gray-100 text-gray-700 border-gray-200">Pending</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-700 border-red-200">High Priority</Badge>
      case "medium":
        return <Badge className="bg-amber-100 text-amber-700 border-amber-200">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">{evaluatorData.name}</h1>
                <p className="text-sm text-gray-600">Expert Evaluator Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-gray-600">Progress</p>
                <p className="font-bold text-gray-800">
                  {evaluatorData.completed}/{evaluatorData.totalAssigned}
                </p>
              </div>
              <div className="w-12 h-12 relative">
                <svg className="w-12 h-12 transform -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 20}`}
                    strokeDashoffset={`${2 * Math.PI * 20 * (1 - evaluatorData.completed / evaluatorData.totalAssigned)}`}
                    className="text-emerald-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-700">
                    {Math.round((evaluatorData.completed / evaluatorData.totalAssigned) * 100)}%
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Progress Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-gray-800">
                  <span>Evaluation Progress</span>
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completed</span>
                    <span className="font-bold text-gray-800">{evaluatorData.completed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pending</span>
                    <span className="font-bold text-gray-800">{evaluatorData.pending}</span>
                  </div>
                  <Progress value={(evaluatorData.completed / evaluatorData.totalAssigned) * 100} className="h-2" />
                  <div className="text-emerald-600 text-sm font-medium">
                    {Math.round((evaluatorData.completed / evaluatorData.totalAssigned) * 100)}% Complete
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Performance Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Score</span>
                  <span className="font-bold text-lg text-gray-800">{evaluatorData.averageScore}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Accuracy Rate</span>
                  <span className="font-bold text-lg text-emerald-600">{evaluatorData.accuracy}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Expertise</span>
                  <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                    ML & AI Ethics
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-bold text-gray-800">8 Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 hover:from-blue-100 hover:to-indigo-200 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-800">
                  <Bot className="w-5 h-5 mr-2 text-blue-600" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-100 rounded-lg border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">AI Pre-Analysis Available</p>
                    <p className="text-xs text-gray-600">Score: 89.2 • Confidence: 94%</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-100 border border-blue-200 text-blue-700 hover:bg-blue-200 transition-all duration-300">
                  View AI Insights
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-800">
                  <Calendar className="w-5 h-5 mr-2" />
                  Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">Healthcare AI Paper</p>
                    <p className="text-xs text-gray-600">Due in 2 days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">AI Ethics Framework</p>
                    <p className="text-xs text-gray-600">Due in 5 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-1 shadow-sm">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="evaluate"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
                >
                  Evaluate
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
                >
                  History
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Assigned Submissions */}
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <FileText className="w-5 h-5 mr-2" />
                      Assigned Submissions
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Academic submissions assigned for your evaluation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assignedSubmissions.map((submission) => (
                        <div
                          key={submission.id}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center border border-blue-200">
                              <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                                {submission.title}
                              </h4>
                              <p className="text-sm text-gray-600">by {submission.author}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Clock className="w-3 h-3 text-gray-500" />
                                <span className="text-xs text-gray-500">{submission.pages} pages</span>
                                <span className="text-xs text-gray-500">•</span>
                                <span className="text-xs text-gray-500">Submitted {submission.submittedDate}</span>
                                {submission.aiScore && (
                                  <>
                                    <span className="text-xs text-gray-500">•</span>
                                    <span className="text-xs text-blue-600">AI Score: {submission.aiScore}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            {getPriorityBadge(submission.priority)}
                            {getStatusBadge(submission.status)}
                            {submission.status === "completed" && (
                              <div className="text-right">
                                <p className="text-sm font-bold text-emerald-600">Score: {submission.score}</p>
                              </div>
                            )}
                            <Button
                              size="sm"
                              onClick={() => setActiveTab("evaluate")}
                              disabled={submission.status === "completed"}
                              className={
                                submission.status === "completed"
                                  ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                                  : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                              }
                            >
                              {submission.status === "completed" ? (
                                <>
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </>
                              ) : (
                                <>
                                  <Play className="w-4 h-4 mr-2" />
                                  Evaluate
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Evaluate Tab */}
              <TabsContent value="evaluate" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Document Viewer */}
                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-gray-800">
                        <span>Deep Learning Applications in Healthcare</span>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">Research Paper</Badge>
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        by Dr. Michael Chen • 24 pages • Submitted: March 20, 2024
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Document Preview */}
                      <div className="aspect-[4/5] bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-200">
                        <div className="text-center text-gray-500">
                          <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-medium">Document Viewer</p>
                          <p className="text-sm opacity-75">Deep Learning Applications in Healthcare</p>
                        </div>
                      </div>

                      {/* AI Insights */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Bot className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-700">AI Pre-Analysis</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Predicted Score:</span>
                            <span className="ml-2 font-bold text-gray-800">89.2</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Confidence:</span>
                            <span className="ml-2 font-bold text-emerald-600">94%</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Originality:</span>
                            <span className="ml-2 font-bold text-gray-800">92%</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Quality:</span>
                            <span className="ml-2 font-bold text-gray-800">87%</span>
                          </div>
                        </div>
                      </div>

                      {/* Document Controls */}
                      <div className="flex items-center justify-center space-x-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          View Full Document
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Evaluation Form */}
                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-gray-800">Evaluation Criteria</CardTitle>
                      <CardDescription className="text-gray-600">
                        Score each criterion based on the submission content
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 max-h-96 overflow-y-auto">
                      {evaluationCriteria.map((criterion) => (
                        <div key={criterion.key} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <Label className="text-sm font-medium text-gray-800">{criterion.name}</Label>
                              <p className="text-xs text-gray-600">{criterion.description}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">{criterion.weight}</span>
                              <span className="text-sm font-bold text-gray-800">
                                {scores[criterion.key as keyof typeof scores][0]}/{criterion.maxScore}
                              </span>
                            </div>
                          </div>
                          <Slider
                            value={scores[criterion.key as keyof typeof scores]}
                            onValueChange={(value) => setScores((prev) => ({ ...prev, [criterion.key]: value }))}
                            max={criterion.maxScore}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      ))}

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-medium text-gray-800">Weighted Total Score:</span>
                          <span className="text-2xl font-bold text-emerald-600">{getTotalScore()}/100</span>
                        </div>
                        <Progress value={Number.parseFloat(getTotalScore())} className="mb-4" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Feedback Section */}
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Detailed Feedback</CardTitle>
                    <CardDescription className="text-gray-600">
                      Provide constructive feedback to help improve the work
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="strengths" className="text-gray-700">
                          Strengths
                        </Label>
                        <Textarea
                          id="strengths"
                          placeholder="What are the key strengths of this work?"
                          rows={4}
                          className="mt-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="improvements" className="text-gray-700">
                          Areas for Improvement
                        </Label>
                        <Textarea
                          id="improvements"
                          placeholder="What could be improved or enhanced?"
                          rows={4}
                          className="mt-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="general-comments" className="text-gray-700">
                        General Comments
                      </Label>
                      <Textarea
                        id="general-comments"
                        placeholder="Additional comments and suggestions..."
                        rows={3}
                        className="mt-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300"
                      />
                    </div>

                    <div className="flex justify-end space-x-4 pt-4">
                      <Button
                        variant="outline"
                        className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Draft
                      </Button>
                      <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <Send className="w-4 h-4 mr-2" />
                        Submit Evaluation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history" className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Evaluation History</CardTitle>
                    <CardDescription className="text-gray-600">
                      Your completed evaluations and performance metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assignedSubmissions
                        .filter((s) => s.status === "completed")
                        .map((submission) => (
                          <div
                            key={submission.id}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center border border-emerald-200">
                                <CheckCircle className="w-6 h-6 text-emerald-600" />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-800 group-hover:text-emerald-600 transition-colors">
                                  {submission.title}
                                </h4>
                                <p className="text-sm text-gray-600">by {submission.author}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className="text-xs text-gray-500">Evaluated on {submission.submittedDate}</span>
                                  <span className="text-xs text-gray-500">•</span>
                                  <span className="text-xs text-blue-600">AI Score: {submission.aiScore}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-600">{submission.score}</div>
                              <p className="text-sm text-gray-600">Final Score</p>
                              <Button
                                size="sm"
                                variant="outline"
                                className="mt-2 bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                Review
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Summary */}
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <Award className="w-5 h-5 mr-2" />
                      Performance Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                        <div className="text-2xl font-bold text-emerald-600 mb-2">{evaluatorData.completed}</div>
                        <div className="text-sm text-gray-600">Completed</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{evaluatorData.averageScore}</div>
                        <div className="text-sm text-gray-600">Avg. Score</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 border border-purple-100 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600 mb-2">{evaluatorData.accuracy}%</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                      <div className="text-center p-4 bg-amber-50 border border-amber-100 rounded-xl">
                        <div className="text-2xl font-bold text-amber-600 mb-2">4.9</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
