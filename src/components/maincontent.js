import React from "react"

export default function MainContent({ children }) {
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
      {children}
    </div>
  )
}
