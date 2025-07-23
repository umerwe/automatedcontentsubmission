"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Users,
  FileText,
  Star,
  Trophy,
  Settings,
  UserCheck,
  UserX,
  Eye,
  Download,
  Filter,
  Search,
  AlertCircle,
  CheckCircle,
  Clock,
  Bot,
  TrendingUp,
  Activity,
  Bell,
  PieChart,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedFilter, setSelectedFilter] = useState("all")

  // Mock data
  const stats = [
    {
      label: "Total Submissions",
      value: "24,892",
      change: "+18%",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      label: "Active Evaluators",
      value: "1,428",
      change: "+12%",
      icon: Users,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      label: "AI Evaluations",
      value: "18,456",
      change: "+25%",
      icon: Bot,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      label: "Avg. Score",
      value: "87.3",
      change: "+3.2",
      icon: Trophy,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
  ]

  const submissions = [
    {
      id: 1,
      title: "Machine Learning Research Paper",
      author: "Dr. Sarah Chen",
      type: "Academic Paper",
      score: 92.5,
      status: "evaluated",
      date: "2024-03-20",
    },
    {
      id: 2,
      title: "Quantum Computing Analysis",
      author: "Prof. Michael Rodriguez",
      type: "Research Proposal",
      score: 88.7,
      status: "in_progress",
      date: "2024-03-19",
    },
    {
      id: 3,
      title: "AI Ethics Framework",
      author: "Alex Thompson",
      type: "Technical Report",
      score: 94.2,
      status: "evaluated",
      date: "2024-03-18",
    },
    {
      id: 4,
      title: "Neural Network Implementation",
      author: "Emma Davis",
      type: "Code Submission",
      score: 85.9,
      status: "pending",
      date: "2024-03-17",
    },
    {
      id: 5,
      title: "Data Science Methodology",
      author: "James Wilson",
      type: "Academic Paper",
      score: 90.1,
      status: "evaluated",
      date: "2024-03-16",
    },
  ]

  const evaluators = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      expertise: "Machine Learning",
      assigned: 45,
      completed: 42,
      accuracy: 96.8,
      status: "active",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      expertise: "Computer Vision",
      assigned: 38,
      completed: 38,
      accuracy: 94.2,
      status: "active",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      expertise: "Natural Language Processing",
      assigned: 52,
      completed: 48,
      accuracy: 97.1,
      status: "active",
    },
    {
      id: 4,
      name: "Dr. James Thompson",
      expertise: "Data Science",
      assigned: 29,
      completed: 25,
      accuracy: 95.5,
      status: "pending",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "evaluated":
        return <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Evaluated</Badge>
      case "in_progress":
        return <Badge className="bg-amber-100 text-amber-700 border-amber-200">In Progress</Badge>
      case "pending":
        return <Badge className="bg-gray-100 text-gray-700 border-gray-200">Pending</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">EvalPro Management System</p>
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
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      <span className="text-sm text-emerald-600 font-medium">{stat.change}</span>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-1 shadow-sm">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="submissions"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
            >
              Submissions
            </TabsTrigger>
            <TabsTrigger
              value="evaluators"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
            >
              Evaluators
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-gray-600 rounded-lg transition-all duration-300"
            >
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <Activity className="w-5 h-5 mr-2 text-blue-600" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800">AI evaluation completed</p>
                        <p className="text-xs text-gray-600">Machine Learning Research Paper - Score: 92.5</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800">New submission received</p>
                        <p className="text-xs text-gray-600">Quantum Computing Analysis by Prof. Rodriguez</p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                      <UserCheck className="w-5 h-5 text-purple-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800">New evaluator approved</p>
                        <p className="text-xs text-gray-600">Dr. Emily Rodriguez - NLP Specialist</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* System Performance */}
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <TrendingUp className="w-5 h-5 mr-2 text-emerald-600" />
                    System Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">AI Evaluation Accuracy</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
                            style={{ width: "96%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-800">96%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Processing Speed</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                            style={{ width: "89%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-800">89%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">System Uptime</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                            style={{ width: "99%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-800">99%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">User Satisfaction</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full"
                            style={{ width: "94%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-800">94%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Submissions */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Trophy className="w-5 h-5 mr-2 text-amber-600" />
                  Top Performing Submissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {submissions.slice(0, 5).map((submission, index) => (
                    <div
                      key={submission.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                          #{index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                            {submission.title}
                          </p>
                          <p className="text-sm text-gray-600">by {submission.author}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-gray-800">{submission.score}</p>
                        <p className="text-sm text-gray-600">{submission.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Submissions Tab */}
          <TabsContent value="submissions" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-gray-800">Submission Management</CardTitle>
                    <CardDescription className="text-gray-600">
                      Monitor and manage all academic submissions
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Search submissions..."
                        className="pl-10 w-64 bg-gray-50/50 border-gray-200 text-gray-800"
                      />
                    </div>
                    <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                      <SelectTrigger className="w-40 bg-gray-50/50 border-gray-200 text-gray-800">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200">
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="evaluated">Evaluated</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-600">Title</TableHead>
                      <TableHead className="text-gray-600">Author</TableHead>
                      <TableHead className="text-gray-600">Type</TableHead>
                      <TableHead className="text-gray-600">Score</TableHead>
                      <TableHead className="text-gray-600">Status</TableHead>
                      <TableHead className="text-gray-600">Date</TableHead>
                      <TableHead className="text-gray-600">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id} className="border-gray-200 hover:bg-gray-50 transition-colors">
                        <TableCell className="font-medium text-gray-800">{submission.title}</TableCell>
                        <TableCell className="text-gray-600">{submission.author}</TableCell>
                        <TableCell className="text-gray-600">{submission.type}</TableCell>
                        <TableCell className="font-bold text-gray-800">{submission.score}</TableCell>
                        <TableCell>{getStatusBadge(submission.status)}</TableCell>
                        <TableCell className="text-gray-600">{submission.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                            >
                              <Settings className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Evaluators Tab */}
          <TabsContent value="evaluators" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-gray-800">Evaluator Management</CardTitle>
                    <CardDescription className="text-gray-600">Manage evaluators and their performance</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Add Evaluator
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200">
                      <TableHead className="text-gray-600">Name</TableHead>
                      <TableHead className="text-gray-600">Expertise</TableHead>
                      <TableHead className="text-gray-600">Assigned</TableHead>
                      <TableHead className="text-gray-600">Completed</TableHead>
                      <TableHead className="text-gray-600">Accuracy</TableHead>
                      <TableHead className="text-gray-600">Status</TableHead>
                      <TableHead className="text-gray-600">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {evaluators.map((evaluator) => (
                      <TableRow key={evaluator.id} className="border-gray-200 hover:bg-gray-50 transition-colors">
                        <TableCell className="font-medium text-gray-800">{evaluator.name}</TableCell>
                        <TableCell className="text-gray-600">{evaluator.expertise}</TableCell>
                        <TableCell className="text-gray-600">{evaluator.assigned}</TableCell>
                        <TableCell className="text-gray-600">{evaluator.completed}</TableCell>
                        <TableCell className="font-bold text-emerald-600">{evaluator.accuracy}%</TableCell>
                        <TableCell>
                          {evaluator.status === "active" ? (
                            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Active</Badge>
                          ) : (
                            <Badge className="bg-amber-100 text-amber-700 border-amber-200">Pending</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                            >
                              <UserCheck className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                            >
                              <UserX className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <PieChart className="w-5 h-5 mr-2 text-blue-600" />
                    Score Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">90-100</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-800">6,223 submissions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">80-89</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-800">9,957 submissions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">70-79</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-800">6,223 submissions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">60-69</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                            style={{ width: "10%" }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-800">2,489 submissions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-800">Evaluation Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-600 mb-2">96.2%</div>
                      <p className="text-gray-600">Overall AI Accuracy</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Content Quality</span>
                          <span className="text-gray-800">94.8%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
                            style={{ width: "95%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Originality Detection</span>
                          <span className="text-gray-800">97.1%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                            style={{ width: "97%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Structure Analysis</span>
                          <span className="text-gray-800">95.5%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                            style={{ width: "96%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-800">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-red-50 border border-red-100 rounded-xl">
                    <AlertCircle className="w-8 h-8 mx-auto text-red-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-800">23</div>
                    <div className="text-sm text-gray-600">Issues Reported</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 border border-amber-100 rounded-xl">
                    <Clock className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-800">1.8h</div>
                    <div className="text-sm text-gray-600">Avg. Processing Time</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <Star className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-800">4.9</div>
                    <div className="text-sm text-gray-600">User Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 border border-purple-100 rounded-xl">
                    <Trophy className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-800">98.7</div>
                    <div className="text-sm text-gray-600">Highest Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-800">System Configuration</CardTitle>
                <CardDescription className="text-gray-600">Manage system settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-800">AI Model Settings</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-700">Content Analysis Model</span>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-700">Plagiarism Detection</span>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-700">Bias Mitigation</span>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Active</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-800">Security Settings</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-700">Two-Factor Authentication</span>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Enabled</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-700">Data Encryption</span>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">AES-256</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <span className="text-gray-700">Access Logging</span>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Enabled</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <Button
                      variant="outline"
                      className="bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-700 transition-all duration-300"
                    >
                      Reset to Defaults
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
