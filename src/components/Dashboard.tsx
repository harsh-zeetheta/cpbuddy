import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Target, Calendar, BarChart3, Flame, TrendingUp, Users, Clock, Zap } from "lucide-react"
import { ActivityHeatmap } from "./ActivityHeatmap"
import { DSAProblemsChart, CPProblemsChart, ContestParticipationChart, RatingProgressChart } from "./Charts"
import { AchievementsBadges, PlatformRankings } from "./AchievementsRankings"
import { heroStats } from "@/lib/mock-data"

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Questions</CardTitle>
            <Target className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{heroStats.totalQuestions.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">Across all platforms</p>
            <Badge variant="secondary" className="mt-2 text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% this month
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Days</CardTitle>
            <Calendar className="h-5 w-5 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-600">{heroStats.activeDays}</div>
            <p className="text-sm text-muted-foreground mt-1">Days with activity</p>
            <Badge variant="secondary" className="mt-2 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              42% of year
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Submissions</CardTitle>
            <BarChart3 className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">{heroStats.totalSubmissions.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">Code submissions</p>
            <Badge variant="secondary" className="mt-2 text-xs">
              <Zap className="h-3 w-3 mr-1" />
              3.1 avg/problem
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
            <Flame className="h-5 w-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">{heroStats.currentStreak}</div>
            <p className="text-sm text-muted-foreground mt-1">Days in a row</p>
            <Badge variant="secondary" className="mt-2 text-xs">
              <Users className="h-3 w-3 mr-1" />
              Top 15%
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Activity Heatmap */}
      <ActivityHeatmap />

      {/* Problem Solving Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <DSAProblemsChart />
        <CPProblemsChart />
      </div>

      {/* Contest Participation */}
      <ContestParticipationChart />

      {/* Rating Progress */}
      <RatingProgressChart />

      {/* Achievements */}
      <AchievementsBadges />

      {/* Platform Rankings */}
      <PlatformRankings />
    </div>
  )
}
