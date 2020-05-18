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
      @media screen and (max-width: 600px) {
        font-size: ${textSize.xxxlargeFlex};
        width: 30vw;
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
  nav {
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-end;
        display: none;
      }
    }

    @media screen and (max-width: 600px) {
      position: fixed;
      right: 4vw;
      top: 4vw;
    }
    .navToggle {
      border: 1px solid ${customColors.black};
      width: 5vw;
      height: 5vw;
      border-radius: 50%;
      margin-bottom: ${magicNumber / 6}px;
      display: none;
      @media screen and (max-width: 600px) {
        display: block;
      }
    }
  }
`

export default function Header({ currentPage, backgroundColor }) {
  const wrapper = useRef()
  const navToggle = useRef()
  const menu = useRef()
  let isNavOpen = false

  useEffect(() => {
    if (currentPage === "BEHIND THE SCENES") {
      ;[...wrapper.current.children].forEach((anchor) => {
        anchor.style.color = customColors.white
      })
      navToggle.current.style.borderColor = customColors.white
    }
  }, [currentPage])

  useEffect(() => {
    navToggle.current.addEventListener("click", () => handleMobileNav())
    navToggle.current.style.background = backgroundColor
  }, [])

  const handleMobileNav = () => {
    if (!isNavOpen) {
      navToggle.current.style.background = customColors.black
      menu.current.style.display = "flex"
    } else {
      menu && menu.current ? (menu.current.style.display = "none") : ""
      navToggle && navToggle.current
        ? (navToggle.current.style.background = backgroundColor)
        : ""
    }
    isNavOpen = !isNavOpen
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window && window.matchMedia("(min-width: 600px)").matches) {
        if (!isNavOpen) {
          menu.current.style.display = "flex"
        }
        navToggle.current.style.display = "none"
      } else {
        if (!isNavOpen) {
          menu.current.style.display = "none"
        }
        if (navToggle && navToggle.current) {
          navToggle.current.style.display = "block"
          navToggle.current.style.background = backgroundColor
        }
      }
    })
    window.addEventListener("scroll", () => {
      if (isNavOpen) {
        handleMobileNav()
      }
    })
  }, [])
  return (
    <MainContent>
      <HeaderWrappper ref={wrapper}>
        <AniLink to="/" paintDrip hex={customColors.gray}>
          <h1 className="title">The Last Christmas</h1>
        </AniLink>
        <nav>
          <div ref={navToggle} className="navToggle"></div>
          <div ref={menu} className="menu">
            {currentPage !== "AFTERMOVIE" ? (
              <AniLink to="/" paintDrip hex={customColors.gray}>
                <h2>Aftermovie</h2>
              </AniLink>
            ) : (
              ""
            )}
            {currentPage !== "BEHIND THE SCENES" ? (
              <AniLink
                to="/behind-the-scenes"
                paintDrip
                hex={customColors.black}
              >
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
          </div>
        </nav>
      </HeaderWrappper>
    </MainContent>
  )
}

Header.propTypes = {
  currentPage: PropTypes.string,
  backgroundColor: PropTypes.string,
}
