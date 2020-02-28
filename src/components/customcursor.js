import React, { useRef, useEffect } from "react"
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

  display: none;
  justify-content: center;
  align-items: center;
  z-index: 20;
`
export default function CustomCursor({ container, text }) {
  const customCur = useRef()
  useEffect(() => {
    if (container) {
      container.addEventListener("mouseenter", e => {
        customCur.current.style.display = "flex"
        container.style.cursor = "none !important"
      })
      container.addEventListener("mouseleave", e => {
        customCur.current.style.display = "none"
      })
      container.addEventListener("mousemove", e => {
        customCur.current.style.left = `${e.clientX}px`
        customCur.current.style.top = `${e.clientY}px`
      })
    }
  }, [container])

  return (
    <Cursor ref={customCur}>
      <h1>{text}</h1>
    </Cursor>
  )
}
