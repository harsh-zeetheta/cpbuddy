"use client"

import { useState, useEffect } from "react"
import { Header } from "./src/components/Header"
import { Sidebar } from "./src/components/Sidebar"
import { Dashboard } from "./src/components/Dashboard"
import "./src/index.css"

function CPBuddyApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleSidebar={toggleSidebar} darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 p-8 md:ml-80 max-w-screen-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Track your competitive programming journey across all platforms
            </p>
          </div>
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default CPBuddyApp
