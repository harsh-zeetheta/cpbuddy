"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import { generateHeatmapData } from "@/lib/mock-data"

export function ActivityHeatmap() {
  const heatmapData = generateHeatmapData()

  const getIntensityClass = (count: number) => {
    if (count === 0) return "bg-muted hover:bg-muted/80"
    if (count === 1) return "bg-emerald-200 hover:bg-emerald-300 dark:bg-emerald-900 dark:hover:bg-emerald-800"
    if (count === 2) return "bg-emerald-300 hover:bg-emerald-400 dark:bg-emerald-800 dark:hover:bg-emerald-700"
    if (count === 3) return "bg-emerald-400 hover:bg-emerald-500 dark:bg-emerald-700 dark:hover:bg-emerald-600"
    return "bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
  }

  // Calculate total contributions
  const totalContributions = heatmapData.reduce((sum, day) => sum + day.count, 0)
  const currentStreak = 23 // This would be calculated from actual data

  // Group data by weeks (7 days each)
  const weeks = []
  for (let i = 0; i < heatmapData.length; i += 7) {
    weeks.push(heatmapData.slice(i, i + 7))
  }

  // Get month labels
  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Activity Overview
          </CardTitle>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{totalContributions}</div>
              <div className="text-xs text-muted-foreground">contributions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{currentStreak}</div>
              <div className="text-xs text-muted-foreground">day streak</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Month labels */}
          <div className="grid grid-cols-12 gap-1 text-xs text-muted-foreground mb-2">
            {monthLabels.map((month, index) => (
              <div key={index} className="text-center">
                {month}
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm transition-colors cursor-pointer ${getIntensityClass(day.count)}`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div key={level} className={`w-3 h-3 rounded-sm ${getIntensityClass(level)}`} />
                ))}
              </div>
              <span>More</span>
            </div>
            <Badge variant="outline" className="text-xs">
              Past 365 days
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
