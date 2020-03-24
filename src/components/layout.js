import React, { useState, useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import MainContent from "./maincontent"
import styled from "styled-components"
import PropTypes from "prop-types"
import { magicNumber, textSize } from "../components/variables"

import "./styles/layout.scss"

const PageTitle = styled.h2`
  font-size: ${textSize.large};
  margin: ${magicNumber / 6}px 0 ${magicNumber / 4}px 0;
  @media screen and (max-width: 1200px) {
    font-size: ${textSize.largeFlex};
  }
`
export default function Layout({ children, title, background }) {
  const titleColor = background === "#000000" ? "#fff" : "#000"
  const [currentPage, setCurrentPage] = useState()
  useEffect(() => {
    setCurrentPage(title.toUpperCase())
  }, [title])
  return (
    <div className="layout" style={{ backgroundColor: `${background}` }}>
      <Header backgroundColor={background} currentPage={currentPage} />
      <MainContent>
        <PageTitle style={{ color: titleColor }}>{title}</PageTitle>
      </MainContent>
      <main>{children}</main>
      <Footer currentPage={currentPage} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  background: PropTypes.string,
}
