import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import MainContent from "./maincontent"
import styled from "styled-components"
import { magicNumber, textSize, customColors } from "./variables"
import PropTypes from "prop-types"

const HeaderWrappper = styled.div`
  display: flex;
  width: 100%;
  padding: ${magicNumber}px 0 0 0;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: 1200px) {
    padding: 0;
  }

  a {
    padding-left: 2rem;
    color: inherit;
    @media screen and (max-width: 1200px) {
      padding-left: 2vw;
    }

    &:first-child {
      padding-left: 0;
    }
    &:nth-child(2) {
      margin-left: auto;
    }
    .title {
      font-size: ${magicNumber}px;
      color: inherit;
      @media screen and (max-width: 1200px) {
        font-size: ${textSize.xlargeFlex};
      }
    }
    h2 {
      font-size: ${textSize.large};
      vertical-align: middle;
      @media screen and (max-width: 1200px) {
        font-size: 3vw;
      }
    }
  }
`

export default function Header({ currentPage }) {
  const wrapper = useRef()

  useEffect(() => {
    if (currentPage === "BEHIND THE SCENES") {
      [...wrapper.current.children].forEach(anchor => {
        anchor.style.color = customColors.white
      })
    }
  }, [currentPage])
  return (
    <MainContent>
      <HeaderWrappper ref={wrapper}>
        <Link to="/">
          <h1 className="title">The Last Christmas</h1>
        </Link>
        <nav>
          {currentPage !== "AFTERMOVIE" ? (
            <Link to="/">
              <h2>Aftermovie</h2>
            </Link>
          ) : (
            ""
          )}
          {currentPage !== "BEHIND THE SCENES" ? (
            <Link to="/behind-the-scenes">
              <h2>Behind The Scenes</h2>
            </Link>
          ) : (
            ""
          )}
          {currentPage !== "THE PROJECT" ? (
            <Link to="/the-project">
              <h2>The Project</h2>
            </Link>
          ) : (
            ""
          )}
          {currentPage !== "CONTACT" ? (
            <Link to="/contact">
              <h2>Contact</h2>
            </Link>
          ) : (
            ""
          )}
        </nav>
      </HeaderWrappper>
    </MainContent>
  )
}

Header.propTypes = {
  currentPage: PropTypes.string,
}
