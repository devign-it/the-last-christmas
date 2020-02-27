import React from "react"
import { Link } from "gatsby"
import MainContent from "./MainContent"
import styled from "styled-components"
import { magicNumber, textSize, customColors } from "../components/variables"
import { useRef } from "react"
import { useEffect } from "react"

const HeaderWrappper = styled.div`
  display: flex;
  width: "100%";
  padding: 3rem 0 1rem 0;
  align-items: center;

  a {
    padding-left: 2rem;
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
        font-size: 5vw;
      }
    }
    h2 {
      font-size: ${textSize.large};
      vertical-align: middle;
      height: ${magicNumber};
      @media screen and (max-width: 1200px) {
        font-size: 2.5vw;
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
  }, [])
  return (
    <MainContent>
      <HeaderWrappper ref={wrapper}>
        <Link to="/">
          <h1 className="title">The Last Christmas</h1>
        </Link>
        {currentPage !== "AFTERMOVIE" ? (
          <Link to="/">
            <h2>aftermovie</h2>
          </Link>
        ) : (
          ""
        )}
        {currentPage !== "BEHIND THE SCENES" ? (
          <Link to="/behind-the-scenes">
            <h2>behind the scenes</h2>
          </Link>
        ) : (
          ""
        )}
        {currentPage !== "THE PROJECT" ? (
          <Link to="/the-project">
            <h2>the project</h2>
          </Link>
        ) : (
          ""
        )}
        {currentPage !== "CONTACT" ? (
          <Link to="/contact">
            <h2>contact</h2>
          </Link>
        ) : (
          ""
        )}
      </HeaderWrappper>
    </MainContent>
  )
}
