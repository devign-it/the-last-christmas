import React from "react"
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
const LayoutWrapper = styled.div`
  min-height: 100vh;
  @media screen and (max-width: 1220px) {
    padding: 0 1vw;
  }
`
export default function Layout({ children, title, background }) {
  const titleColor = background === "#000000" ? "#fff" : "#000"
  console.log(background)
  return (
    <LayoutWrapper style={{ backgroundColor: `${background}` }}>
      <Header currentPage={title.toUpperCase()} />
      <MainContent>
        <PageTitle style={{ color: titleColor }}>{title}</PageTitle>
      </MainContent>
      <main>{children}</main>
      <Footer currentPage={title.toUpperCase()} />
    </LayoutWrapper>
  )
}
