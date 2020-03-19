import React, { useRef, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
      ;[...wrapper.current.children].forEach(anchor => {
        anchor.style.color = customColors.white
      })
    }
  }, [currentPage])
  return (
    <MainContent>
      <HeaderWrappper ref={wrapper}>
        <AniLink to="/" paintDrip hex={customColors.gray}>
          <h1 className="title">The Last Christmas</h1>
        </AniLink>
        <nav>
          {currentPage !== "AFTERMOVIE" ? (
            <AniLink to="/" paintDrip hex={customColors.gray}>
              <h2>Aftermovie</h2>
            </AniLink>
          ) : (
            ""
          )}
          {currentPage !== "BEHIND THE SCENES" ? (
            <AniLink to="/behind-the-scenes" paintDrip hex={customColors.black}>
              <h2>Behind The Scenes</h2>
            </AniLink>
          ) : (
            ""
          )}
          {currentPage !== "THE PROJECT" ? (
            <AniLink to="/the-project" paintDrip hex={customColors.gray}>
              <h2>The Project</h2>
            </AniLink>
          ) : (
            ""
          )}
          {currentPage !== "CONTACT" ? (
            <AniLink to="/contact" paintDrip hex={customColors.white}>
              <h2>Contact</h2>
            </AniLink>
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
