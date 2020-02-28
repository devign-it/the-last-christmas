import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import styled from "styled-components"

import "./layout.css"

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
