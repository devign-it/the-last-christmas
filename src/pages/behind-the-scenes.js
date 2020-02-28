import React, { useRef, useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "nuka-carousel"
import styled from "styled-components"
import MainContent from "../components/maincontent"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { textSize, customColors, magicNumber } from "../components/variables"
import CustomCursor from "../components/customcursor"

const CarouselWrapper = styled.div`
  width: auto;
  padding-top: ${magicNumber / 2}px;
  .sliderText {
    font-size: ${textSize.large};
    padding-top: ${magicNumber / 2}px;
    color: #fff;
    @media screen and (max-width: 1200px) {
      font-size: 2.5vw;
    }
  }
`

export default function BehindTheScenes() {
  const query = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "slider" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const [container, setContainer] = useState()
  const [slideNumber, setSlideNumber] = useState(1)
  const [totalSlides, setTotalSlides] = useState(1)
  const [cursorText, setCursorText] = useState()
  const carousel = useRef()

  useEffect(() => {
    setContainer(document.querySelector(".slider"))
  }, [])

  useEffect(() => {
    document.querySelector(".slider").addEventListener("mousemove", e => {
      if (e.clientX < window.innerWidth / 2 && cursorText !== "previous") {
        setCursorText("previous")
      } else if (e.clientX > window.innerWidth / 2 && cursorText !== "next") {
        setCursorText("next")
      }
    })
  }, [])

  useEffect(() => {
    document.querySelector(".slider").addEventListener("click", e => {
      if (e.clientX < window.innerWidth / 2) {
        carousel.current.previousSlide()
      } else if (e.clientX > window.innerWidth / 2) {
        carousel.current.nextSlide()
      }
    })
  }, [])

  return (
    <Layout title="Behind The Scenes" background={customColors.black}>
      <SEO title="Behind The Scenes" image="/og_behind-the-scenes.JPG" />

      <MainContent>
        <CarouselWrapper>
          <Carousel
            ref={carousel}
            renderTopCenterControls={({ currentSlide, slideCount }) => {
              setSlideNumber(currentSlide)
              setTotalSlides(slideCount)
            }}
            speed={800}
          >
            {query.allFile.edges.map((image, i) => {
              if (image.node.childImageSharp) {
                return (
                  <Img
                    style={{
                      width: "100%",
                      height: "71.6vh",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    imgStyle={{
                      height: "71.6vh",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                    key={i}
                    fluid={image.node.childImageSharp.fluid}
                  />
                )
              }
            })}
          </Carousel>
          <CustomCursor container={container} text={cursorText} />
          <h6 className="sliderText">
            {slideNumber + 1} out of {totalSlides} behind the scenes images
          </h6>
        </CarouselWrapper>
      </MainContent>
    </Layout>
  )
}
