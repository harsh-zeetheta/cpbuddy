"use client"

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart3, PieChartIcon, Activity } from "lucide-react"
import { dsaBreakdown, cpBreakdown, contestData, ratingHistory } from "@/lib/mock-data"

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function DSAProblemsChart() {
  const total = dsaBreakdown.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <PieChartIcon className="h-5 w-5" />
          DSA Problems Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="relative h-80 w-80 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <defs>
                  {dsaBreakdown.map((item, index) => (
                    <linearGradient key={index} id={`gradient-${item.name}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={item.color} stopOpacity={0.8} />
                      <stop offset="100%" stopColor={item.color} stopOpacity={1} />
                    </linearGradient>
                  ))}
                </defs>
                <Pie
                  data={dsaBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={2}
                >
                  {dsaBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`url(#gradient-${entry.name})`} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload
                      return (
                        <div className="bg-background border rounded-lg p-3 shadow-lg">
                          <p className="font-semibold">{data.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {data.value} problems ({data.percentage}%)
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold">{total.toLocaleString()}</div>
              <div className="text-muted-foreground">Total Problems Solved</div>
            </div>
            <div className="space-y-3">
              {dsaBreakdown.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function CPProblemsChart() {
  const total = cpBreakdown.reduce((sum, item) => sum + item.problems, 0)

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          CP Problems by Platform
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="relative h-80 w-80 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <defs>
                  {cpBreakdown.map((item, index) => (
                    <linearGradient key={index} id={`cp-gradient-${item.platform}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={item.color} stopOpacity={0.8} />
                      <stop offset="100%" stopColor={item.color} stopOpacity={1} />
                    </linearGradient>
                  ))}
                </defs>
                <Pie
                  data={cpBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ platform, percentage }) => `${platform} ${percentage}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="problems"
                  stroke="#fff"
                  strokeWidth={2}
                >
                  {cpBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`url(#cp-gradient-${entry.platform})`} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload
                      return (
                        <div className="bg-background border rounded-lg p-3 shadow-lg">
                          <p className="font-semibold">{data.platform}</p>
                          <p className="text-sm text-muted-foreground">
                            {data.problems} problems ({data.percentage}%)
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold">{total.toLocaleString()}</div>
              <div className="text-muted-foreground">Total CP Problems</div>
            </div>
            <div className="space-y-3">
              {cpBreakdown.map((item) => (
                <div key={item.platform} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium">{item.platform}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{item.problems}</div>
                    <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ContestParticipationChart() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Contest Participation
          </CardTitle>
          <Badge variant="outline">Last 6 months</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={contestData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-sm" />
              <YAxis axisLine={false} tickLine={false} className="text-sm" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="leetcode" stackId="a" fill="#FFA116" name="LeetCode" radius={[0, 0, 0, 0]} />
              <Bar dataKey="codeforces" stackId="a" fill="#1F8ACB" name="CodeForces" radius={[0, 0, 0, 0]} />
              <Bar dataKey="codechef" stackId="a" fill="#5B4638" name="CodeChef" radius={[0, 0, 0, 0]} />
              <Bar dataKey="atcoder" stackId="a" fill="#3FAF3F" name="AtCoder" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function RatingProgressChart() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Rating Progress
          </CardTitle>
          <Badge variant="outline">6 month trend</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={ratingHistory} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="leetcode" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFA116" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FFA116" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="codeforces" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1F8ACB" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#1F8ACB" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="codechef" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B4638" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#5B4638" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} className="text-sm" />
              <YAxis axisLine={false} tickLine={false} className="text-sm" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="leetcode"
                stroke="#FFA116"
                fillOpacity={1}
                fill="url(#leetcode)"
                strokeWidth={3}
                name="LeetCode"
              />
              <Area
                type="monotone"
                dataKey="codeforces"
                stroke="#1F8ACB"
                fillOpacity={1}
                fill="url(#codeforces)"
                strokeWidth={3}
                name="CodeForces"
              />
              <Area
                type="monotone"
                dataKey="codechef"
                stroke="#5B4638"
                fillOpacity={1}
                fill="url(#codechef)"
                strokeWidth={3}
                name="CodeChef"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
