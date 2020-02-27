import React, { useState } from "react"
import { Link } from "gatsby"
import { useEffect } from "react"
import { useRef } from "react"
import styled from "styled-components"
import MainContent from "./MainContent"

import { customColors, magicNumber } from "../components/variables"

export default function Footer({ currentPage }) {
  const wrapper = useRef()

  const FooterWrapper = styled.div`
    padding: 120px 0 120px 0;
    position: relative;
    height: 800px;

    .innerWrapper {
      margin: 180px;
      position: relative;
    }

    a  {
      margin: 0;
      position: absolute;
      width: 360px;
      height: 360px;
      border: 2px solid #000;
      background-color: #fff;
      font-size: ${magicNumber / 1.5}px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        font-weight: 300;
      }

      &:nth-child(1) {
        left: 260px;
        top: 200px;
        h2 {
          color: #fff;
        }
        background-color: #000;
      }
      &:nth-child(2) {
        left: 0px;
        top: 0px;
      }
      &:nth-child(3) {
        left: 840px;
        background-color: ${customColors.gray};
      }
    }
  `

  return (
    <MainContent>
      <FooterWrapper>
        <div className="innerWrapper" ref={wrapper}>
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
        </div>
      </FooterWrapper>
    </MainContent>
  )
}
