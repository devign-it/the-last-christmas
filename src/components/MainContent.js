import React from "react"
import PropTypes from "prop-types"

export default function MainContent({ children }) {
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
      {children}
    </div>
  )
}
MainContent.propTypes = {
  children: PropTypes.node,
}
