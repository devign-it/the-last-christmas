import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
// import styled from "styled-components"
import MainContent from "./maincontent"
import "./styles/footer.css"

import { customColors, magicNumber } from "./variables"

export default function Footer({ currentPage }) {
  const wrapper = useRef()

  useEffect(() => {
    ;[...wrapper.current.children].forEach((circle, i) => {
      switch (i) {
        case 0:
          circle.style.backgroundColor = customColors.white
          circle.style.color = customColors.black
          break
        case 1:
          circle.style.backgroundColor = customColors.black
          circle.style.color = customColors.white
          if (currentPage === "BEHIND THE SCENES") {
            circle.style.border = `1px solid ${customColors.white}`
          }
          break
        case 2:
          circle.style.backgroundColor = customColors.gray
          break
      }
      if (currentPage !== "BEHIND THE SCENES") {
      }
    })
  }, [currentPage])

  useEffect(() => {
    let posOne = {}
    let posTwo = { y: 1000, x: -1000 }
    let posThree = {}
    let counter = 0
    let counterSafe = 10000

    ;[...wrapper.current.children].forEach((anchor, i) => {
      switch (i) {
        case 0:
          posOne.x = Math.random() * 840
          posOne.y = Math.random() * 440
          anchor.style.left = `${posOne.x}px`
          anchor.style.top = `${posOne.y}px`
          break

        case 1:
          while (
            !(posTwo.y < 440 && posTwo.y > 0) ||
            (!(posTwo.x < 840 && posTwo.x > 0) && counter < counterSafe)
          ) {
            let angle = Math.random() * Math.PI * 2
            posTwo.x = posOne.x + Math.cos(angle) * 320
            posTwo.y = posOne.y + Math.sin(angle) * 320
            counter++
          }
          anchor.style.left = `${posTwo.x}px`
          anchor.style.top = `${posTwo.y}px`
          break
        case 2:
          counter = 0
          while (
            !(posThree.y < 440 && posThree.y > 0) ||
            (!(posThree.x < 840 && posThree.x > 0) && counter < counterSafe)
          ) {
            let angle = Math.random() * Math.PI * 2
            posThree.x = posOne.x + Math.cos(angle) * 320
            posThree.y = posOne.y + Math.sin(angle) * 320
            counter++
          }
          anchor.style.left = `${posThree.x}px`
          anchor.style.top = `${posThree.y}px`
          break
      }
    })
  }, [currentPage])
  return (
    <MainContent>
      <div className="Footer">
        <div className="footerInnerWrapper" ref={wrapper}>
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
      </div>
    </MainContent>
  )
}
