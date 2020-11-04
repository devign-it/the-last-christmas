import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Cursor = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 2px solid #000;
  background-color: #fff;
  font-size: 15px;
  //transition: top 100ms ease-in-out;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  cursor: none;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 200;
`
export default function CustomCursor({ container, text }) {
  const customCur = useRef()
  useEffect(() => {
    if (container) {
      container.addEventListener("mouseenter", (e) => {
        customCur.current.style.display = "flex"
        container.style.cursor = "none !important"
        updatePosition(e.clientX, e.clientY)
      })
      container.addEventListener("mouseleave", () => {
        customCur.current.style.display = "none"
      })
      container.addEventListener("mousemove", (e) => {
        if (customCur.current.style.display !== "flex") {
          customCur.current.style.display = "flex"
        }
        updatePosition(e.clientX, e.clientY)
      })
      container.addEventListener("mousewheel", (e) => {
        updatePosition(e.clientX, e.clientY)
      })
    }
  }, [container])

  function updatePosition(x, y) {
    customCur.current.style.left = `${x}px`
    customCur.current.style.top = `${y + window.scrollY}px`
  }
  return (
    <Cursor className="CustomCursor" ref={customCur}>
      <h1>{text}</h1>
    </Cursor>
  )
}

CustomCursor.propTypes = {
  container: PropTypes.object,
  text: PropTypes.string,
}
