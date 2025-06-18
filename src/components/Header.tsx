"use client"

import { Moon, Sun, Menu, User, Settings, LogOut, Trophy, BarChart3, Calendar, UserCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { mockUser } from "@/lib/mock-data"

interface HeaderProps {
  onToggleSidebar: () => void
  darkMode: boolean
  onToggleDarkMode: () => void
}

export function Header({ onToggleSidebar, darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 shadow-lg">
              <span className="text-sm font-bold text-white">CP</span>
            </div>
            <span className="text-xl font-bold tracking-tight">CPBuddy</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" className="gap-2 font-medium">
            <Trophy className="h-4 w-4" />
            Leaderboard
          </Button>
          <Button variant="ghost" className="gap-2 font-medium">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </Button>
          <Button variant="ghost" className="gap-2 font-medium">
            <Calendar className="h-4 w-4" />
            Events
          </Button>
          <Button variant="ghost" className="gap-2 font-medium">
            <UserCircle className="h-4 w-4" />
            Profile
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onToggleDarkMode} className="h-9 w-9">
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={mockUser.avatar || "/placeholder.svg"} alt={mockUser.name} />
                  <AvatarFallback className="text-sm font-medium">
                    {mockUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">{mockUser.name}</p>
                  <p className="w-[200px] truncate text-sm text-muted-foreground">{mockUser.email}</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
