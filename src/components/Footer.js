import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import MainContent from "./maincontent"
import "./styles/footer.css"

import { customColors, magicNumber, textSize } from "./variables"

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
    let posThree = { y: 1000, x: -1000 }
    let counter = 0
    let counterSafe = 10000
    let maxX, maxY, overlap

    if (window.matchMedia("(min-width: 1200px)").matches) {
      maxX = 840
      maxY = 440
      overlap = 320
    } else {
      maxX = window.innerWidth * 0.65
      maxY = window.innerWidth * 0.36
      overlap = window.innerWidth * 0.27
    }

    ;[...wrapper.current.children].forEach((anchor, i) => {
      switch (i) {
        case 0:
          posOne.x = Math.random() * maxX
          posOne.y = Math.random() * maxY
          setPosition(anchor, posOne.x, posOne.y)
          break

        case 1:
          while (
            !(posTwo.y < maxY && posTwo.y > 0) ||
            !(posTwo.x < maxX && posTwo.x > 0)
          ) {
            let angle = Math.random() * Math.PI * 2
            posTwo.x = posOne.x + Math.cos(angle) * overlap
            posTwo.y = posOne.y + Math.sin(angle) * overlap

            if (counter++ > counterSafe) break
          }
          setPosition(anchor, posTwo.x, posTwo.y)

          break
        case 2:
          counter = 0
          while (
            !(posThree.y < maxY && posThree.y > 0) ||
            !(posThree.x < maxX && posThree.x > 0) ||
            (!(Math.abs(posThree.x - posTwo.x) > maxY * 0.55) &&
              !(Math.abs(posThree.y - posTwo.y) > maxY * 0.55)) ||
            (!(Math.abs(posThree.x - posOne.x) > maxY * 0.55) &&
              !(Math.abs(posThree.y - posOne.y) > maxY * 0.55))
          ) {
            let angle = Math.random() * Math.PI * 2
            if (posOne.x > maxX / 2) {
              posThree.x = Math.cos(angle) * (overlap / 3)
            } else {
              posThree.x = Math.cos(angle) * overlap + maxY
            }
            posThree.y = Math.random() * maxY
            if (counter++ > counterSafe) break
          }

          setPosition(anchor, posThree.x, posThree.y)

          break
      }
    })
  }, [currentPage])

  function setPosition(elem, x, y) {
    elem.style.left = `${x}px`
    elem.style.top = `${y}px`
  }
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
