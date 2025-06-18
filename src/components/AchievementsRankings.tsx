import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { Trophy, Target, Flame, TrendingUp, Crown, Zap, Award, Star } from "lucide-react"
import { achievements, platformStats } from "@/lib/mock-data"

const iconMap = {
  Trophy,
  Target,
  Flame,
  TrendingUp,
  Crown,
  Zap,
}

export function AchievementsBadges() {
  const unlockedCount = achievements.filter((a) => a.unlocked).length
  const totalCount = achievements.length
  const progressPercentage = (unlockedCount / totalCount) * 100

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Award className="h-5 w-5" />
            Achievements & Badges
          </CardTitle>
          <div className="text-right">
            <div className="text-sm font-medium">
              {unlockedCount}/{totalCount}
            </div>
            <div className="text-xs text-muted-foreground">unlocked</div>
          </div>
        </div>
        <div className="space-y-2">
          <Progress value={progressPercentage} className="h-2" />
          <div className="text-sm text-muted-foreground">{progressPercentage.toFixed(0)}% complete</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap]
            return (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl border transition-all hover:shadow-md ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border-amber-200 dark:border-amber-800"
                    : "bg-muted/30 border-muted opacity-60 hover:opacity-80"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      achievement.unlocked
                        ? "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                    {achievement.unlocked ? (
                      <Badge variant="secondary" className="text-xs gap-1">
                        <Star className="h-3 w-3" />
                        Unlocked
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs">
                        Locked
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export function PlatformRankings() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Platform Rankings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {platformStats.map((platform, index) => (
            <div
              key={platform.name}
              className="flex items-center justify-between p-4 rounded-xl border bg-card hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-background border-2 border-background rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground">#{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-base">{platform.name}</h4>
                  <p className="text-sm text-muted-foreground">{platform.contests} contests participated</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl" style={{ color: platform.color }}>
                  {platform.rating}
                </div>
                <div className="text-sm text-muted-foreground">
                  Max: <span className="font-medium">{platform.maxRating}</span>
                </div>
                <Badge variant="outline" className="mt-1 text-xs">
                  {platform.problems} solved
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
