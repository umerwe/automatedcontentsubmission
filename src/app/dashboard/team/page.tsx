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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Upload,
  FileText,
  Users,
  MessageSquare,
  Trophy,
  Star,
  Edit3,
  Save,
  Eye,
  BarChart3,
  Bell,
  Settings,
  CheckCircle,
  Target,
  Bot,
  Award,
  FileSearch,
  Activity,
} from "lucide-react"

export default function TeamDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditing, setIsEditing] = useState(false)

  // Mock data
  const teamData = {
    name: "AI Research Collective",
    leadName: "Dr. Alex Chen",
    members: [
      { name: "Dr. Alex Chen", role: "Team Lead", email: "alex@university.edu", avatar: "AC" },
      { name: "Sarah Kim", role: "ML Researcher", email: "sarah@university.edu", avatar: "SK" },
      { name: "Marcus Johnson", role: "Data Scientist", email: "marcus@university.edu", avatar: "MJ" },
      { name: "Emily Rodriguez", role: "AI Ethics Specialist", email: "emily@university.edu", avatar: "ER" },
    ],
    currentScore: 94.2,
    rank: 1,
    totalSubmissions: 1247,
    submissionStatus: "evaluated",
  }

  const evaluationData = [
    {
      criteria: "Content Quality",
      score: 92,
      maxScore: 100,
      feedback: "Exceptional depth and accuracy",
      color: "from-violet-500 to-purple-600",
    },
    {
      criteria: "Originality",
      score: 96,
      maxScore: 100,
      feedback: "Highly innovative approach",
      color: "from-cyan-500 to-blue-600",
    },
    {
      criteria: "Methodology",
      score: 94,
      maxScore: 100,
      feedback: "Rigorous research methods",
      color: "from-pink-500 to-rose-600",
    },
    {
      criteria: "Clarity & Writing",
      score: 95,
      maxScore: 100,
      feedback: "Excellent presentation",
      color: "from-emerald-500 to-teal-600",
    },
  ]

  const recentActivity = [
    {
      type: "evaluation",
      message: "Perfect evaluation received",
      detail: "AI Ethics Framework scored 96/100",
      time: "2 hours ago",
      color: "from-emerald-500 to-teal-600",
    },
    {
      type: "feedback",
      message: "Detailed feedback available",
      detail: "Expert comments on methodology",
      time: "5 hours ago",
      color: "from-blue-500 to-cyan-600",
    },
    {
      type: "rank",
      message: "Achieved #1 ranking",
      detail: "Top performer in AI category",
      time: "1 day ago",
      color: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">{teamData.name}</h1>
                <p className="text-sm text-gray-600">Submission Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
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
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Score Card */}
            <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200 hover:from-blue-200 hover:to-cyan-200 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-gray-800">
                  <span>Current Score</span>
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-gray-800 mb-2">{teamData.currentScore}/100</div>
                <div className="text-blue-700 text-sm mb-3">
                  Rank #{teamData.rank} of {teamData.totalSubmissions.toLocaleString()}
                </div>
                <Progress value={teamData.currentScore} className="h-3 bg-blue-200" />
                <Badge className="mt-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300">
                  <Target className="w-3 h-3 mr-1" />
                  Top Performer
                </Badge>
              </CardContent>
            </Card>

            {/* Team Info */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Users className="w-5 h-5 mr-2" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamData.members.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    <Avatar className="w-10 h-10 border-2 border-blue-200">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-sm">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 text-sm">{member.name}</div>
                      <div className="text-xs text-gray-600">{member.role}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200 hover:from-purple-100 hover:to-pink-200 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-gray-800">
                  <Bot className="w-5 h-5 mr-2 text-purple-600" />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-purple-100 rounded-lg border border-purple-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">Optimization Suggestions</p>
                    <p className="text-xs text-gray-600">3 recommendations available</p>
                  </div>
                </div>
                <Button className="w-full bg-purple-100 border border-purple-200 text-purple-700 hover:bg-purple-200 transition-all duration-300">
                  View Suggestions
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200 text-gray-700 hover:from-violet-200 hover:to-purple-200 transition-all duration-300 group">
                  <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Support
                </Button>
                <Button className="w-full justify-start bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 text-gray-700 hover:from-cyan-200 hover:to-blue-200 transition-all duration-300 group">
                  <BarChart3 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 text-gray-700 hover:from-pink-200 hover:to-rose-200 transition-all duration-300 group">
                  <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Preview Mode
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-1 shadow-sm">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="submission"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
                >
                  Submission
                </TabsTrigger>
                <TabsTrigger
                  value="evaluation"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
                >
                  Evaluation
                </TabsTrigger>
                <TabsTrigger
                  value="feedback"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
                >
                  Feedback
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-emerald-200 hover:from-emerald-100 hover:to-teal-200 transition-all duration-300 group">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center text-gray-800">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 mb-2">
                        ✓ Evaluated
                      </Badge>
                      <p className="text-sm text-emerald-700">Submitted on March 25, 2024</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200 hover:from-amber-100 hover:to-orange-200 transition-all duration-300 group">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center text-gray-800">
                        <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        Evaluations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-gray-800">3/3</div>
                      <p className="text-sm text-orange-700">All evaluations completed</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200 hover:from-purple-100 hover:to-pink-200 transition-all duration-300 group">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center text-gray-800">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <Trophy className="w-5 h-5 text-white" />
                        </div>
                        Rank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-gray-800">#{teamData.rank}</div>
                      <p className="text-sm text-purple-700">Global ranking</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-800 flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-blue-600" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-xl bg-gradient-to-r ${activity.color}/10 border border-gray-200 hover:${activity.color}/20 transition-all duration-300 group`}
                        >
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-3 h-3 bg-gradient-to-r ${activity.color} rounded-full mt-2 group-hover:scale-110 transition-transform`}
                            ></div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                {activity.message}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">{activity.detail}</p>
                              <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Submission Tab */}
              <TabsContent value="submission" className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-gray-800">Academic Submission</CardTitle>
                      <CardDescription className="text-gray-600">
                        Upload and manage your academic work for evaluation
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(!isEditing)}
                      className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300 group"
                    >
                      {isEditing ? (
                        <Save className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      ) : (
                        <Edit3 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      )}
                      {isEditing ? "Save" : "Edit"}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title" className="text-gray-700">
                            Paper Title
                          </Label>
                          <Input
                            id="title"
                            defaultValue="AI Ethics Framework for Healthcare Applications"
                            disabled={!isEditing}
                            className="mt-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <Label htmlFor="category" className="text-gray-700">
                            Category
                          </Label>
                          <Input
                            id="category"
                            defaultValue="Artificial Intelligence & Ethics"
                            disabled={!isEditing}
                            className="mt-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <Label htmlFor="keywords" className="text-gray-700">
                            Keywords
                          </Label>
                          <Input
                            id="keywords"
                            defaultValue="AI Ethics, Healthcare, Machine Learning, Bias"
                            disabled={!isEditing}
                            className="mt-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="abstract" className="text-gray-700">
                            Abstract
                          </Label>
                          <Textarea
                            id="abstract"
                            rows={4}
                            defaultValue="This paper presents a comprehensive framework for implementing ethical AI systems in healthcare applications, addressing bias mitigation, transparency, and accountability..."
                            disabled={!isEditing}
                            className="mt-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <Label htmlFor="authors" className="text-gray-700">
                            Authors
                          </Label>
                          <Textarea
                            id="authors"
                            rows={3}
                            defaultValue="Dr. Alex Chen, Sarah Kim, Marcus Johnson, Emily Rodriguez"
                            disabled={!isEditing}
                            className="mt-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 group">
                      <FileSearch className="w-16 h-16 mx-auto text-gray-400 mb-4 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
                      <h3 className="text-lg font-medium mb-2 text-gray-800">Document Upload</h3>
                      <p className="text-gray-600 mb-4">Upload your research paper, thesis, or academic document</p>
                      <div className="flex items-center justify-center space-x-4">
                        <Button
                          variant="outline"
                          className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300 group"
                        >
                          <Upload className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Upload Document
                        </Button>
                        <div className="text-sm text-gray-500">PDF, DOC, DOCX up to 50MB</div>
                      </div>
                    </div>

                    {/* Current Submission */}
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">AI_Ethics_Framework_Healthcare.pdf</h4>
                          <p className="text-sm text-gray-600">32 pages • Submitted March 25, 2024</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Evaluated</Badge>
                            <span className="text-sm text-gray-600">Score: 94.2/100</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Evaluation Tab */}
              <TabsContent value="evaluation" className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Evaluation Results</CardTitle>
                    <CardDescription className="text-gray-600">
                      Detailed breakdown of your submission evaluation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {evaluationData.map((item, index) => (
                        <div
                          key={index}
                          className="space-y-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                              {item.criteria}
                            </span>
                            <span className="text-sm font-bold text-gray-800">
                              {item.score}/{item.maxScore}
                            </span>
                          </div>
                          <Progress value={(item.score / item.maxScore) * 100} className="h-3 bg-gray-200" />
                          <p className="text-sm text-gray-600">{item.feedback}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* AI Analysis */}
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <Bot className="w-5 h-5 mr-2 text-purple-600" />
                      AI Analysis Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-purple-100 rounded-lg border border-purple-200">
                          <span className="text-gray-700">Originality Score</span>
                          <span className="font-bold text-purple-700">96%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <span className="text-gray-700">Plagiarism Check</span>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Clean</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                          <span className="text-gray-700">Structure Quality</span>
                          <span className="font-bold text-emerald-700">Excellent</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                          <span className="text-gray-700">Citation Accuracy</span>
                          <span className="font-bold text-amber-700">98%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                          <span className="text-gray-700">Readability</span>
                          <span className="font-bold text-cyan-700">High</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg border border-pink-200">
                          <span className="text-gray-700">Technical Depth</span>
                          <span className="font-bold text-pink-700">Advanced</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Evaluator Status */}
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Expert Evaluators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-medium text-gray-800">Dr. Sarah Wilson</h4>
                        <p className="text-xs text-gray-600 mb-2">AI Ethics Expert</p>
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Completed</Badge>
                      </div>
                      <div className="text-center p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-medium text-gray-800">Prof. Michael Chen</h4>
                        <p className="text-xs text-gray-600 mb-2">Healthcare AI</p>
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Completed</Badge>
                      </div>
                      <div className="text-center p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-medium text-gray-800">Dr. Emily Rodriguez</h4>
                        <p className="text-xs text-gray-600 mb-2">ML Researcher</p>
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Completed</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Feedback Tab */}
              <TabsContent value="feedback" className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Expert Feedback</CardTitle>
                    <CardDescription className="text-gray-600">
                      Comprehensive feedback from academic evaluators
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 group">
                      <h4 className="font-medium text-emerald-700 mb-2 group-hover:text-emerald-600 transition-colors">
                        Strengths
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Exceptional work on developing a comprehensive AI ethics framework. The methodology is rigorous,
                        the literature review is thorough, and the practical applications are well-articulated. The
                        paper demonstrates deep understanding of both technical and ethical considerations in healthcare
                        AI.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 hover:from-amber-100 hover:to-orange-100 transition-all duration-300 group">
                      <h4 className="font-medium text-amber-700 mb-2 group-hover:text-amber-600 transition-colors">
                        Areas for Enhancement
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Consider expanding the discussion on implementation challenges in real-world healthcare
                        settings. Additional case studies from different healthcare domains would strengthen the
                        framework&apos;s applicability and provide more concrete examples.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 group">
                      <h4 className="font-medium text-blue-700 mb-2 group-hover:text-blue-600 transition-colors">
                        Overall Assessment
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        This is outstanding research that makes significant contributions to the field of AI ethics in
                        healthcare. The work is publication-ready and would be valuable for both academic and industry
                        audiences. The interdisciplinary approach and practical focus are particularly commendable.
                      </p>
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
                      <div className="text-center p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                        <div className="text-2xl font-bold text-emerald-600 mb-2">94.2</div>
                        <div className="text-sm text-gray-600">Final Score</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-2">#1</div>
                        <div className="text-sm text-gray-600">Global Rank</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600 mb-2">96%</div>
                        <div className="text-sm text-gray-600">Originality</div>
                      </div>
                      <div className="text-center p-4 bg-amber-50 border border-amber-200 rounded-xl">
                        <div className="text-2xl font-bold text-amber-600 mb-2">5.0</div>
                        <div className="text-sm text-gray-600">Expert Rating</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support Chat */}
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Academic Support
                    </CardTitle>
                    <CardDescription className="text-gray-600">Get help from our academic support team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-xl p-4 mb-4 max-h-60 overflow-y-auto border border-gray-200">
                      <div className="space-y-3">
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm border border-gray-200">
                            <p className="text-sm text-gray-800">
                              Congratulations on your excellent submission! How can we assist you further?
                            </p>
                            <span className="text-xs text-gray-500">Academic Support • 2h ago</span>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg p-3 max-w-xs shadow-lg">
                            <p className="text-sm">Thank you! I&apos;d like guidance on publication opportunities.</p>
                            <span className="text-xs text-blue-200">You • 1h ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Type your message..."
                        className="flex-1 bg-gray-50/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                      />
                      <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        Send
                      </Button>
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
