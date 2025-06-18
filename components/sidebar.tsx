"use client"

import { useState } from "react"
import {
  Plus,
  Eye,
  Clock,
  Globe,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  CheckCircle,
  XCircle,
  AlertCircle,
  MapPin,
  GraduationCap,
  Share2,
  CreditCard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { mockUser, platformStats } from "@/lib/mock-data"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [publicProfile, setPublicProfile] = useState(mockUser.publicProfile)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "synced":
        return <CheckCircle className="h-4 w-4 text-emerald-500" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-amber-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "synced":
        return "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950"
      case "error":
        return "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
      case "pending":
        return "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950"
      default:
        return "border-border bg-card"
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`
        fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-80 transform border-r border-border bg-background transition-transform duration-200 ease-in-out
        md:relative md:top-0 md:h-full md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex h-full flex-col overflow-y-auto p-6 space-y-6">
          {/* User Profile Section */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16 ring-2 ring-border">
                  <AvatarImage src={mockUser.avatar || "/placeholder.svg"} alt={mockUser.name} />
                  <AvatarFallback className="text-lg font-semibold">
                    {mockUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold truncate">{mockUser.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{mockUser.handle}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Public Profile</span>
                </div>
                <Switch checked={publicProfile} onCheckedChange={setPublicProfile} />
              </div>

              <Button className="w-full mb-4 gap-2" variant="outline">
                <Share2 className="h-4 w-4" />
                Generate CPBuddy Card
              </Button>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{mockUser.email}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-4 w-4" />
                  <span className="truncate">{mockUser.linkedin}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-4 w-4" />
                  <span className="truncate">{mockUser.github}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  <span className="truncate">{mockUser.website}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{mockUser.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span>{mockUser.institution}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Platform Stats */}
          <Accordion type="single" defaultValue="platforms" collapsible>
            <AccordionItem value="platforms" className="border-0">
              <AccordionTrigger className="text-base font-semibold hover:no-underline">
                Platform Statistics
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  {platformStats.map((platform) => (
                    <div
                      key={platform.name}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${getStatusColor(platform.status)}`}
                    >
                      <div className="flex items-center gap-3">
                        {getStatusIcon(platform.status)}
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: platform.color }}
                          >
                            {platform.icon}
                          </div>
                          <div>
                            <span className="font-medium text-sm">{platform.name}</span>
                            <p className="text-xs text-muted-foreground">{platform.contests} contests</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{platform.problems}</div>
                        <div className="text-xs text-muted-foreground">problems</div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-4 gap-2">
                    <Plus className="h-4 w-4" />
                    Add Platform
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Leaderboard Card */}
          <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Leaderboard Rank
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{mockUser.cScore}</div>
                <div className="text-sm text-muted-foreground mb-2">C Score</div>
                <div className="text-sm">
                  Global Rank: <span className="font-semibold">#{mockUser.globalRank.toLocaleString()}</span>
                </div>
                {mockUser.verified && (
                  <Badge variant="secondary" className="mt-3 gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Profile Metadata */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>Profile Views</span>
                  </div>
                  <span className="font-semibold">{mockUser.profileViews.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Last Sync</span>
                  </div>
                  <span className="font-semibold">{mockUser.lastSync}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>Visibility</span>
                  </div>
                  <Badge variant={publicProfile ? "default" : "secondary"}>
                    {publicProfile ? "Public" : "Private"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>
    </>
  )
}
