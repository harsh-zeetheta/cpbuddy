export const mockUser = {
  name: "Alex Chen",
  handle: "@alexchen_dev",
  avatar: "/placeholder.svg?height=40&width=40",
  email: "alex@example.com",
  linkedin: "linkedin.com/in/alexchen",
  github: "github.com/alexchen",
  website: "alexchen.dev",
  location: "San Francisco, CA",
  institution: "Stanford University",
  publicProfile: true,
  profileViews: 1247,
  lastSync: "2 hours ago",
  cScore: 1850,
  globalRank: 1234,
  verified: true,
}

export const platformStats = [
  {
    name: "LeetCode",
    status: "synced",
    problems: 450,
    rating: 1847,
    maxRating: 1923,
    contests: 23,
    color: "#FFA116",
    icon: "LC",
  },
  {
    name: "CodeForces",
    status: "synced",
    problems: 234,
    rating: 1654,
    maxRating: 1702,
    contests: 18,
    color: "#1F8ACB",
    icon: "CF",
  },
  {
    name: "CodeChef",
    status: "error",
    problems: 156,
    rating: 1543,
    maxRating: 1598,
    contests: 12,
    color: "#5B4638",
    icon: "CC",
  },
  {
    name: "AtCoder",
    status: "pending",
    problems: 89,
    rating: 1234,
    maxRating: 1289,
    contests: 8,
    color: "#3FAF3F",
    icon: "AC",
  },
]

export const heroStats = {
  totalQuestions: 929,
  activeDays: 156,
  totalSubmissions: 2847,
  currentStreak: 23,
}

export const dsaBreakdown = [
  { name: "Easy", value: 234, color: "#10B981", percentage: 25.2 },
  { name: "Medium", value: 456, color: "#F59E0B", percentage: 49.1 },
  { name: "Hard", value: 239, color: "#EF4444", percentage: 25.7 },
]

export const cpBreakdown = [
  { platform: "LeetCode", problems: 450, color: "#FFA116", percentage: 48.4 },
  { platform: "CodeForces", problems: 234, color: "#1F8ACB", percentage: 25.2 },
  { platform: "CodeChef", problems: 156, color: "#5B4638", percentage: 16.8 },
  { platform: "AtCoder", problems: 89, color: "#3FAF3F", percentage: 9.6 },
]

export const contestData = [
  { month: "Jan", leetcode: 4, codeforces: 3, codechef: 2, atcoder: 1 },
  { month: "Feb", leetcode: 5, codeforces: 4, codechef: 2, atcoder: 2 },
  { month: "Mar", leetcode: 6, codeforces: 3, codechef: 3, atcoder: 1 },
  { month: "Apr", leetcode: 4, codeforces: 5, codechef: 2, atcoder: 2 },
  { month: "May", leetcode: 7, codeforces: 4, codechef: 3, atcoder: 1 },
  { month: "Jun", leetcode: 5, codeforces: 6, codechef: 2, atcoder: 3 },
]

export const ratingHistory = [
  { date: "Jan", leetcode: 1650, codeforces: 1400, codechef: 1300 },
  { date: "Feb", leetcode: 1720, codeforces: 1450, codechef: 1350 },
  { date: "Mar", leetcode: 1680, codeforces: 1520, codechef: 1400 },
  { date: "Apr", leetcode: 1750, codeforces: 1480, codechef: 1450 },
  { date: "May", leetcode: 1820, codeforces: 1600, codechef: 1500 },
  { date: "Jun", leetcode: 1847, codeforces: 1654, codechef: 1543 },
]

export const achievements = [
  {
    id: 1,
    title: "First Contest",
    description: "Participated in first contest",
    icon: "Trophy",
    unlocked: true,
    category: "milestone",
  },
  {
    id: 2,
    title: "Century Club",
    description: "Solved 100 problems",
    icon: "Target",
    unlocked: true,
    category: "problems",
  },
  {
    id: 3,
    title: "Streak Master",
    description: "Maintained 30 day streak",
    icon: "Flame",
    unlocked: true,
    category: "consistency",
  },
  {
    id: 4,
    title: "Rating Climber",
    description: "Reached 1800+ rating",
    icon: "TrendingUp",
    unlocked: true,
    category: "rating",
  },
  {
    id: 5,
    title: "Contest Champion",
    description: "Won a contest",
    icon: "Crown",
    unlocked: false,
    category: "contest",
  },
  {
    id: 6,
    title: "Problem Solver",
    description: "Solved 1000 problems",
    icon: "Zap",
    unlocked: false,
    category: "problems",
  },
]

// Generate better heatmap data
export const generateHeatmapData = () => {
  const data = []
  const today = new Date()
  const startDate = new Date(today.getFullYear(), 0, 1) // Start of current year

  const dayOfYear = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)

    let count = 0
    if (i <= dayOfYear) {
      // More realistic distribution
      const random = Math.random()
      if (random > 0.7) count = 4
      else if (random > 0.5) count = 3
      else if (random > 0.3) count = 2
      else if (random > 0.15) count = 1
    }

    data.push({
      date: date.toISOString().split("T")[0],
      count,
    })
  }
  return data
}
