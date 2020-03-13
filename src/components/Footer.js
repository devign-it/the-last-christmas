/* eslint-disable no-extra-semi */
import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MainContent from "./maincontent"
import "./styles/footer.scss"

import { customColors } from "./variables"

export default function Footer({ currentPage }) {
  const wrapper = useRef()
  let maxX
  let maxY
  let overlap
  const posOne = {}
  const posTwo = { y: 1000, x: -1000 }
  const posThree = { y: 1000, x: -1000, left: false }

  useEffect(() => {
    calculateCirclesRatio()
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
      // eslint-disable-next-line no-empty
      if (currentPage !== "BEHIND THE SCENES") {
      }
    })
  }, [currentPage])

  /* I have no memory of writing this code and I take no responsibility for it. 
  But it works. */
  useEffect(() => {
    let counter = 0
    const counterSafe = 10000

    ;[...wrapper.current.children].forEach((anchor, i) => {
      switch (i) {
        case 0:
          posOne.x = Math.random()
          posOne.y = Math.random()
          setPosition(anchor, posOne.x * maxX, posOne.y * maxY)
          break

        case 1:
          while (
            !(posTwo.y < maxY && posTwo.y > 0) ||
            !(posTwo.x < maxX && posTwo.x > 0)
          ) {
            const angle = Math.random() * Math.PI * 2
            posTwo.x = Math.cos(angle)
            posTwo.y = Math.sin(angle)

            if (counter++ > counterSafe) break
          }
          setPosition(
            anchor,
            posTwo.x + posOne.x * overlap,
            posOne.y + posTwo.y * overlap
          )

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
            const angle = Math.random() * Math.PI * 2
            if (posOne.x > maxX / 2) {
              posThree.left = true
            }
            posThree.x = Math.cos(angle)
            posThree.y = Math.random()
            if (counter++ > counterSafe) break
          }
          setPosition(
            anchor,
            posThree.x * posThree.left ? overlap / 3 : overlap + maxY,
            posThree.y * maxY
          )
          break
      }
    })
    window.onresize = setCirclePositions
  }, [currentPage])

  function setPosition(elem, x, y) {
    elem.style.left = `${x}px`
    elem.style.top = `${y}px`
  }

  function calculateCirclesRatio() {
    if (window && window.matchMedia("(min-width: 1200px)").matches) {
      maxX = 840
      maxY = 440
      overlap = 320
    } else {
      maxX = window.innerWidth * 0.65
      maxY = window.innerWidth * 0.36
      overlap = window.innerWidth * 0.27
    }
  }
  function setCirclePositions() {
    calculateCirclesRatio()
    ;[...wrapper.current.children].forEach((anchor, i) => {
      switch (i) {
        case 0:
          setPosition(anchor, posOne.x * maxX, posOne.y * maxY)
          break
        case 1:
          setPosition(
            anchor,
            posTwo.x + posOne.x * overlap,
            posOne.y + posTwo.y * overlap
          )
          break
        case 2:
          setPosition(
            anchor,
            posThree.x * posThree.left ? overlap / 3 : overlap + maxY,
            posThree.y * maxY
          )
          break
      }
    })
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

Footer.propTypes = {
  currentPage: PropTypes.string,
}
