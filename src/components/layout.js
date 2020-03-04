import React, { useState, useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import MainContent from "./maincontent"
import styled from "styled-components"

import "./styles/layout.css"

const PageTitle = styled.h2`
  font-size: 30px;
  @media screen and (max-width: 1200px) {
    font-size: 2.5vw;
  }
`
// const LayoutWrapper = styled.div`

// `
export default function Layout({ children, title, background }) {
  const titleColor = background === "#000000" ? "#fff" : "#000"
  const [currentPage, setCurrentPage] = useState()
  useEffect(() => {
    setCurrentPage(title.toUpperCase())
  }, [title])
  return (
    <div className="Layout" style={{ backgroundColor: `${background}` }}>
      <Header currentPage={title.toUpperCase()} />
      <MainContent>
        <PageTitle style={{ color: titleColor }}>{title}</PageTitle>
      </MainContent>
      <main>{children}</main>
      <Footer currentPage={currentPage} />
    </div>
  )
}
