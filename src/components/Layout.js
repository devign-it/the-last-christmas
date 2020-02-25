import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import styled from "styled-components"
import "./layout.css"

const PageTitle = styled.h2`
  font-size: 30px;
`
export default function Layout({ children, title, background }) {
  return (
    <div style={{ backgroundColor: `${background}`, padding: "0 1vw" }}>
      <Header currentPage={title.toUpperCase()} />
      <MainContent>
        <PageTitle>{title}</PageTitle>
      </MainContent>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
