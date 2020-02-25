import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <div style={{ padding: "20vw" }}>
      <Link to="#">
        <h2>video</h2>
      </Link>
      <Link to="#">
        <h2>behind the scenes</h2>
      </Link>
      <Link to="#">
        <h2>the project</h2>
      </Link>
      <Link to="#">
        <h2>contact</h2>
      </Link>
    </div>
  )
}
