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
  Video,
  Clock,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
  Save,
  Send,
  Eye,
  BarChart3,
  Calendar,
} from "lucide-react"

export default function EvaluatorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [scores, setScores] = useState({
    relevanceToLearningObjectives: [4],
    innovationCreativity: [12],
    clarityAccessibility: [8],
    depth: [4],
    interactivityEngagement: [20],
    useOfTechnology: [4],
    scalabilityAdaptability: [8],
    alignmentEthicalStandards: [4],
    practicalApplication: [8],
    videoQuality: [8],
  })

  // Mock data
  const evaluatorData = {
    name: "Dr. Sarah Wilson",
    expertise: "Machine Learning & Educational Technology",
    totalAssigned: 12,
    completed: 8,
    pending: 4,
    averageScore: 82.5,
  }

  const assignedVideos = [
    {
      id: 1,
      title: "AI-Powered Learning Assistant",
      team: "Code Innovators",
      duration: "4:32",
      status: "pending",
      submittedDate: "2024-03-20",
      priority: "high",
    },
    {
      id: 2,
      title: "Blockchain in Education",
      team: "Tech Pioneers",
      duration: "4:58",
      status: "completed",
      submittedDate: "2024-03-18",
      priority: "medium",
      score: 89,
    },
    {
      id: 3,
      title: "Virtual Reality Classroom",
      team: "Future Coders",
      duration: "3:45",
      status: "in_progress",
      submittedDate: "2024-03-22",
      priority: "high",
    },
  ]

  const evaluationCriteria = [
    { key: "relevanceToLearningObjectives", name: "Relevance to Learning Objectives", maxScore: 5, weight: "5%" },
    { key: "innovationCreativity", name: "Innovation & Creativity", maxScore: 15, weight: "15%" },
    { key: "clarityAccessibility", name: "Clarity and Accessibility", maxScore: 10, weight: "10%" },
    { key: "depth", name: "Depth", maxScore: 5, weight: "5%" },
    { key: "interactivityEngagement", name: "Interactivity and Engagement", maxScore: 25, weight: "25%" },
    { key: "useOfTechnology", name: "Use of Technology", maxScore: 5, weight: "5%" },
    { key: "scalabilityAdaptability", name: "Scalability and Adaptability", maxScore: 10, weight: "10%" },
    { key: "alignmentEthicalStandards", name: "Alignment with Ethical Standards", maxScore: 5, weight: "5%" },
    { key: "practicalApplication", name: "Practical Application", maxScore: 10, weight: "10%" },
    { key: "videoQuality", name: "Video Quality", maxScore: 10, weight: "10%" },
  ]

  const getTotalScore = () => {
    return Object.values(scores).reduce((total, score) => total + score[0], 0)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700">Completed</Badge>
      case "in_progress":
        return <Badge className="bg-yellow-100 text-yellow-700">In Progress</Badge>
      case "pending":
        return <Badge className="bg-gray-100 text-gray-700">Pending</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-700">High Priority</Badge>
      case "medium":
        return <Badge className="bg-orange-100 text-orange-700">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-100 text-blue-700">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{evaluatorData.name}</h1>
                <p className="text-sm text-gray-600">Evaluator Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Progress</p>
                <p className="font-bold">
                  {evaluatorData.completed}/{evaluatorData.totalAssigned}
                </p>
              </div>
              <div className="w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - evaluatorData.completed / evaluatorData.totalAssigned)}`}
                    className="text-green-500"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Progress Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-600 to-blue-600 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span>Evaluation Progress</span>
                  <BarChart3 className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Completed</span>
                    <span className="font-bold">{evaluatorData.completed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending</span>
                    <span className="font-bold">{evaluatorData.pending}</span>
                  </div>
                  <Progress
                    value={(evaluatorData.completed / evaluatorData.totalAssigned) * 100}
                    className="bg-green-500"
                  />
                  <div className="text-green-100 text-sm">
                    {Math.round((evaluatorData.completed / evaluatorData.totalAssigned) * 100)}% Complete
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Score</span>
                  <span className="font-bold text-lg">{evaluatorData.averageScore}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Expertise</span>
                  <Badge variant="outline" className="text-xs">
                    ML & EdTech
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="font-bold">3 Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">AI Learning Assistant</p>
                    <p className="text-xs text-gray-600">Due in 2 days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">VR Classroom</p>
                    <p className="text-xs text-gray-600">Due in 5 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-white border shadow-sm">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="evaluate"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Evaluate
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  History
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Assigned Videos */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Video className="w-5 h-5 mr-2" />
                      Assigned Videos
                    </CardTitle>
                    <CardDescription>Videos assigned for your evaluation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assignedVideos.map((video) => (
                        <div
                          key={video.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                              <Video className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-medium">{video.title}</h4>
                              <p className="text-sm text-gray-600">Team: {video.team}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span className="text-xs text-gray-500">{video.duration}</span>
                                <span className="text-xs text-gray-400">•</span>
                                <span className="text-xs text-gray-500">Submitted {video.submittedDate}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            {getPriorityBadge(video.priority)}
                            {getStatusBadge(video.status)}
                            {video.status === "completed" && (
                              <div className="text-right">
                                <p className="text-sm font-bold">Score: {video.score}</p>
                              </div>
                            )}
                            <Button
                              size="sm"
                              onClick={() => setActiveTab("evaluate")}
                              disabled={video.status === "completed"}
                            >
                              {video.status === "completed" ? (
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
                  {/* Video Player */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>AI-Powered Learning Assistant</span>
                        <Badge className="bg-blue-100 text-blue-700">Team: Code Innovators</Badge>
                      </CardTitle>
                      <CardDescription>Duration: 4:32 • Submitted: March 20, 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Video Player Placeholder */}
                      <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                        <div className="text-center text-white">
                          <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-medium">Video Player</p>
                          <p className="text-sm opacity-75">AI-Powered Learning Assistant</p>
                        </div>
                      </div>

                      {/* Video Controls */}
                      <div className="flex items-center justify-center space-x-4">
                        <Button size="sm" variant="outline">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Restart
                        </Button>
                        <Button size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Play
                        </Button>
                        <Button size="sm" variant="outline">
                          <Pause className="w-4 h-4 mr-2" />
                          Pause
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Evaluation Form */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Evaluation Criteria</CardTitle>
                      <CardDescription>Score each criterion based on the video content</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 max-h-96 overflow-y-auto">
                      {evaluationCriteria.map((criterion) => (
                        <div key={criterion.key} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-sm font-medium">{criterion.name}</Label>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">{criterion.weight}</span>
                              <span className="text-sm font-bold">
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

                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-medium">Total Score:</span>
                          <span className="text-2xl font-bold text-green-600">{getTotalScore()}/100</span>
                        </div>
                        <Progress value={getTotalScore()} className="mb-4" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Feedback Section */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Detailed Feedback</CardTitle>
                    <CardDescription>Provide constructive feedback to help the team improve</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="strengths">Strengths</Label>
                        <Textarea id="strengths" placeholder="What did the team do well?" rows={4} />
                      </div>
                      <div>
                        <Label htmlFor="improvements">Areas for Improvement</Label>
                        <Textarea id="improvements" placeholder="What could be improved?" rows={4} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="general-comments">General Comments</Label>
                      <Textarea id="general-comments" placeholder="Additional comments and suggestions..." rows={3} />
                    </div>

                    <div className="flex justify-end space-x-4 pt-4">
                      <Button variant="outline">
                        <Save className="w-4 h-4 mr-2" />
                        Save Draft
                      </Button>
                      <Button className="bg-gradient-to-r from-green-600 to-blue-600">
                        <Send className="w-4 h-4 mr-2" />
                        Submit Evaluation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Evaluation History</CardTitle>
                    <CardDescription>Your completed evaluations and scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assignedVideos
                        .filter((v) => v.status === "completed")
                        .map((video) => (
                          <div key={video.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h4 className="font-medium">{video.title}</h4>
                                <p className="text-sm text-gray-600">Team: {video.team}</p>
                                <p className="text-xs text-gray-500">Evaluated on {video.submittedDate}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600">{video.score}</div>
                              <p className="text-sm text-gray-600">Score</p>
                              <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                                <Eye className="w-4 h-4 mr-2" />
                                Review
                              </Button>
                            </div>
                          </div>
                        ))}
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
