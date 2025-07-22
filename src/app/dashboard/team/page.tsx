"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Upload,
  Video,
  Users,
  MessageSquare,
  Trophy,
  Clock,
  Star,
  Edit3,
  Save,
  Eye,
  BarChart3,
  Bell,
  Settings,
} from "lucide-react"

export default function TeamDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditing, setIsEditing] = useState(false)

  // Mock data
  const teamData = {
    name: "Code Innovators",
    leadName: "John Smith",
    members: [
      { name: "John Smith", role: "Team Lead", email: "john@university.edu" },
      { name: "Jane Doe", role: "Developer", email: "jane@university.edu" },
      { name: "Mike Johnson", role: "Designer", email: "mike@university.edu" },
    ],
    currentScore: 85.5,
    rank: 3,
    totalTeams: 150,
    submissionStatus: "submitted",
  }

  const evaluationData = [
    { criteria: "Innovation & Creativity", score: 13, maxScore: 15, feedback: "Excellent creative approach!" },
    { criteria: "Clarity & Accessibility", score: 8, maxScore: 10, feedback: "Very clear presentation" },
    { criteria: "Interactivity & Engagement", score: 22, maxScore: 25, feedback: "Highly engaging content" },
    { criteria: "Video Quality", score: 9, maxScore: 10, feedback: "Professional quality video" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{teamData.name}</h1>
                <p className="text-sm text-gray-600">Team Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Score Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span>Current Score</span>
                  <Trophy className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{teamData.currentScore}/100</div>
                <div className="text-blue-100 text-sm">
                  Rank #{teamData.rank} of {teamData.totalTeams}
                </div>
                <Progress value={teamData.currentScore} className="mt-3 bg-blue-500" />
              </CardContent>
            </Card>

            {/* Team Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {teamData.members.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.role}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Submission
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white border shadow-sm">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="submission"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Submission
                </TabsTrigger>
                <TabsTrigger
                  value="evaluation"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Evaluation
                </TabsTrigger>
                <TabsTrigger
                  value="feedback"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Feedback
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-orange-500" />
                        Submission Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200">✓ Submitted</Badge>
                      <p className="text-sm text-gray-600 mt-2">Submitted on March 25, 2024</p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Star className="w-5 h-5 mr-2 text-yellow-500" />
                        Evaluations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2/3</div>
                      <p className="text-sm text-gray-600">Evaluations completed</p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-purple-500" />
                        Current Rank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">#{teamData.rank}</div>
                      <p className="text-sm text-gray-600">Out of {teamData.totalTeams} teams</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">Evaluation completed by Dr. Sarah Wilson</p>
                          <p className="text-sm text-gray-600">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">Video submission updated</p>
                          <p className="text-sm text-gray-600">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">Team registered successfully</p>
                          <p className="text-sm text-gray-600">5 days ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Submission Tab */}
              <TabsContent value="submission" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Video Submission</CardTitle>
                      <CardDescription>Upload and manage your competition video</CardDescription>
                    </div>
                    <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                      {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
                      {isEditing ? "Save" : "Edit"}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">Video Title</Label>
                          <Input id="title" defaultValue="AI-Powered Learning Assistant" disabled={!isEditing} />
                        </div>
                        <div>
                          <Label htmlFor="topic">Topic</Label>
                          <Input id="topic" defaultValue="Artificial Intelligence in Education" disabled={!isEditing} />
                        </div>
                        <div>
                          <Label htmlFor="video-url">Video URL</Label>
                          <Input
                            id="video-url"
                            defaultValue="https://drive.google.com/file/d/1234567890"
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            rows={4}
                            defaultValue="An innovative approach to personalized learning using AI technology..."
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="learning-outcomes">Learning Outcomes</Label>
                          <Textarea
                            id="learning-outcomes"
                            rows={3}
                            defaultValue="• Understanding AI fundamentals
• Implementing machine learning algorithms
• Designing user-friendly interfaces"
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Video Preview */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Video className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Video Preview</h3>
                      <p className="text-gray-600 mb-4">Your submitted video will appear here</p>
                      <Button variant="outline">
                        <Upload className="w-4 h-4 mr-2" />
                        Update Video
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Evaluation Tab */}
              <TabsContent value="evaluation" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Evaluation Progress</CardTitle>
                    <CardDescription>Track your evaluation scores across all criteria</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {evaluationData.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{item.criteria}</span>
                            <span className="text-sm font-bold">
                              {item.score}/{item.maxScore}
                            </span>
                          </div>
                          <Progress value={(item.score / item.maxScore) * 100} className="h-2" />
                          <p className="text-sm text-gray-600">{item.feedback}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Evaluator Status */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Evaluator Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Star className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-medium">Dr. Sarah Wilson</h4>
                        <Badge className="bg-green-100 text-green-700 mt-1">Completed</Badge>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Star className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-medium">Prof. Michael Chen</h4>
                        <Badge className="bg-green-100 text-green-700 mt-1">Completed</Badge>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Clock className="w-6 h-6 text-yellow-600" />
                        </div>
                        <h4 className="font-medium">Dr. Emily Rodriguez</h4>
                        <Badge className="bg-yellow-100 text-yellow-700 mt-1">In Progress</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Feedback Tab */}
              <TabsContent value="feedback" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Detailed Feedback</CardTitle>
                    <CardDescription>Comprehensive feedback from evaluators</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-green-700">Strengths</h4>
                      <p className="text-gray-700 mt-1">
                        Excellent use of visual aids and clear explanation of complex AI concepts. The interactive
                        elements significantly enhance user engagement.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-medium text-orange-700">Areas for Improvement</h4>
                      <p className="text-gray-700 mt-1">
                        Consider adding more real-world examples and perhaps include a brief discussion on ethical
                        implications of AI in education.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-blue-700">General Comments</h4>
                      <p className="text-gray-700 mt-1">
                        Outstanding work overall! The video demonstrates deep understanding and innovative thinking.
                        Keep up the excellent work.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Chat Support */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Support Chat
                    </CardTitle>
                    <CardDescription>Get help from our technical support team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4 max-h-60 overflow-y-auto">
                      <div className="space-y-3">
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                            <p className="text-sm">Hello! How can we help you today?</p>
                            <span className="text-xs text-gray-500">Support Team • 2h ago</span>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                            <p className="text-sm">I have a question about the evaluation criteria</p>
                            <span className="text-xs text-blue-200">You • 1h ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Input placeholder="Type your message..." className="flex-1" />
                      <Button>Send</Button>
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
