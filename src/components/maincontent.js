import React from "react"
import PropTypes from "prop-types"
import "./styles/main.scss"
export default function MainContent({ children }) {
  return <main>{children}</main>
}
MainContent.propTypes = {
  children: PropTypes.node,
}
