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
  Video,
  Star,
  Trophy,
  BarChart3,
  Settings,
  UserCheck,
  UserX,
  Eye,
  Download,
  Filter,
  Search,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedFilter, setSelectedFilter] = useState("all")

  // Mock data
  const stats = [
    { label: "Total Teams", value: "150", change: "+12", icon: Users, color: "blue" },
    { label: "Submissions", value: "120", change: "+8", icon: Video, color: "green" },
    { label: "Evaluators", value: "25", change: "+3", icon: Star, color: "purple" },
    { label: "Completed Evaluations", value: "89", change: "+15", icon: CheckCircle, color: "orange" },
  ]

  const teams = [
    { id: 1, name: "Code Innovators", lead: "John Smith", members: 3, score: 85.5, rank: 3, status: "evaluated" },
    { id: 2, name: "Tech Pioneers", lead: "Sarah Johnson", members: 4, score: 92.3, rank: 1, status: "evaluated" },
    { id: 3, name: "Digital Creators", lead: "Mike Chen", members: 2, score: 78.9, rank: 8, status: "pending" },
    { id: 4, name: "AI Innovators", lead: "Emma Davis", members: 5, score: 88.7, rank: 2, status: "evaluated" },
    { id: 5, name: "Future Coders", lead: "Alex Wilson", members: 3, score: 82.1, rank: 5, status: "in_progress" },
  ]

  const evaluators = [
    { id: 1, name: "Dr. Sarah Wilson", expertise: "Machine Learning", assigned: 12, completed: 10, status: "active" },
    {
      id: 2,
      name: "Prof. Michael Chen",
      expertise: "Software Engineering",
      assigned: 15,
      completed: 15,
      status: "active",
    },
    { id: 3, name: "Dr. Emily Rodriguez", expertise: "HCI", assigned: 8, completed: 6, status: "active" },
    { id: 4, name: "Dr. James Thompson", expertise: "Data Science", assigned: 10, completed: 8, status: "pending" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "evaluated":
        return <Badge className="bg-green-100 text-green-700">Evaluated</Badge>
      case "in_progress":
        return <Badge className="bg-yellow-100 text-yellow-700">In Progress</Badge>
      case "pending":
        return <Badge className="bg-gray-100 text-gray-700">Pending</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Competition Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white border shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="teams" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              Teams
            </TabsTrigger>
            <TabsTrigger
              value="evaluators"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              Evaluators
            </TabsTrigger>
            <TabsTrigger
              value="submissions"
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              Submissions
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">New team `&quot;`AI Innovators`&quot;` registered</p>
                        <p className="text-xs text-gray-600">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Evaluation completed by Dr. Wilson</p>
                        <p className="text-xs text-gray-600">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">New evaluator approved</p>
                        <p className="text-xs text-gray-600">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Video submission updated</p>
                        <p className="text-xs text-gray-600">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Competition Timeline */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Competition Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Registration Phase</p>
                        <p className="text-xs text-gray-600">Jan 1 - Feb 15 (Completed)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Submission Phase</p>
                        <p className="text-xs text-gray-600">Jan 15 - Mar 31 (Active)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Evaluation Phase</p>
                        <p className="text-xs text-gray-600">Apr 1 - Apr 15 (Upcoming)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Results Announcement</p>
                        <p className="text-xs text-gray-600">Apr 30 (Upcoming)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Performing Teams */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Top Performing Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teams.slice(0, 5).map((team) => (
                    <div key={team.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          #{team.rank}
                        </div>
                        <div>
                          <p className="font-medium">{team.name}</p>
                          <p className="text-sm text-gray-600">Lead: {team.lead}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{team.score}</p>
                        <p className="text-sm text-gray-600">{team.members} members</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Teams Tab */}
          <TabsContent value="teams" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Team Management</CardTitle>
                    <CardDescription>Manage registered teams and their submissions</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input placeholder="Search teams..." className="pl-10 w-64" />
                    </div>
                    <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                      <SelectTrigger className="w-40">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Teams</SelectItem>
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
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Team Name</TableHead>
                      <TableHead>Team Lead</TableHead>
                      <TableHead>Members</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teams.map((team) => (
                      <TableRow key={team.id}>
                        <TableCell>
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            #{team.rank}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{team.name}</TableCell>
                        <TableCell>{team.lead}</TableCell>
                        <TableCell>{team.members}</TableCell>
                        <TableCell className="font-bold">{team.score}</TableCell>
                        <TableCell>{getStatusBadge(team.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
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
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Evaluator Management</CardTitle>
                    <CardDescription>Manage evaluators and their assignments</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Add Evaluator
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Expertise</TableHead>
                      <TableHead>Assigned</TableHead>
                      <TableHead>Completed</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {evaluators.map((evaluator) => (
                      <TableRow key={evaluator.id}>
                        <TableCell className="font-medium">{evaluator.name}</TableCell>
                        <TableCell>{evaluator.expertise}</TableCell>
                        <TableCell>{evaluator.assigned}</TableCell>
                        <TableCell>{evaluator.completed}</TableCell>
                        <TableCell>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${(evaluator.completed / evaluator.assigned) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600 mt-1">
                            {Math.round((evaluator.completed / evaluator.assigned) * 100)}%
                          </span>
                        </TableCell>
                        <TableCell>
                          {evaluator.status === "active" ? (
                            <Badge className="bg-green-100 text-green-700">Active</Badge>
                          ) : (
                            <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <UserCheck className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
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

          {/* Submissions Tab */}
          <TabsContent value="submissions" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Submission Overview</CardTitle>
                <CardDescription>Monitor all video submissions and evaluation progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 border rounded-lg">
                    <Video className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                    <div className="text-3xl font-bold">120</div>
                    <div className="text-sm text-gray-600">Total Submissions</div>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <CheckCircle className="w-12 h-12 mx-auto text-green-600 mb-3" />
                    <div className="text-3xl font-bold">89</div>
                    <div className="text-sm text-gray-600">Evaluated</div>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Clock className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                    <div className="text-3xl font-bold">31</div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Recent Submissions</h4>
                  {teams.slice(0, 8).map((team) => (
                    <div key={team.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Video className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{team.name}</p>
                          <p className="text-sm text-gray-600">Submitted by {team.lead}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {getStatusBadge(team.status)}
                        <Button size="sm" variant="outline">
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

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Score Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">90-100</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">18 teams</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">80-89</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">42 teams</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">70-79</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">36 teams</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">60-69</span>
                      <div className="flex-1 mx-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium">24 teams</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Evaluation Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">74%</div>
                      <p className="text-gray-600">Overall Completion Rate</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Dr. Sarah Wilson</span>
                          <span>10/12</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "83%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Prof. Michael Chen</span>
                          <span>15/15</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Dr. Emily Rodriguez</span>
                          <span>6/8</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Analytics */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <AlertCircle className="w-8 h-8 mx-auto text-red-500 mb-2" />
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-sm text-gray-600">Issues Reported</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Clock className="w-8 h-8 mx-auto text-orange-500 mb-2" />
                    <div className="text-2xl font-bold">2.5</div>
                    <div className="text-sm text-gray-600">Avg. Days to Evaluate</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Star className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                    <div className="text-2xl font-bold">4.8</div>
                    <div className="text-sm text-gray-600">Avg. Satisfaction</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Trophy className="w-8 h-8 mx-auto text-purple-500 mb-2" />
                    <div className="text-2xl font-bold">92.3</div>
                    <div className="text-sm text-gray-600">Highest Score</div>
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
