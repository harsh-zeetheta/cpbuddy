import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

// Wait for DOM to be ready
const initApp = () => {
  const rootElement = document.getElementById("root")

  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } else {
    // Fallback: create root element if it doesn't exist
    const newRoot = document.createElement("div")
    newRoot.id = "root"
    document.body.appendChild(newRoot)

    ReactDOM.createRoot(newRoot).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp)
} else {
  initApp()
}
