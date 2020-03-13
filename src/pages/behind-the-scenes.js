import React, { useRef, useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Swiper from "react-id-swiper"

import MainContent from "../components/maincontent"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { textSize, customColors, magicNumber } from "../components/variables"
import CustomCursor from "../components/customcursor"
import styled from "styled-components"
import Helmet from "react-helmet"

const CarouselWrapper = styled.div`
  width: auto;
  padding-top: ${magicNumber / 2}px;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
  .sliderText {
    font-size: ${textSize.large};
    padding-top: ${magicNumber / 2}px;
    color: #fff;
    @media screen and (max-width: 1200px) {
      font-size: 2.5vw;
    }
  }
`

const BehindTheScenes = () => {
  const query = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "slider" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1200) {
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
  const [cursorText, setCursorText] = useState()
  const [swiper, setSwiper] = useState()
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
        if (swiper !== null && swiper !== undefined) {
          swiper.slidePrev()
        }
      } else if (e.clientX > window.innerWidth / 2) {
        if (swiper !== null && swiper !== undefined) {
          swiper.slideNext()
        }
      }
      if (swiper !== null && swiper !== undefined) {
        setSlideNumber(swiper.realIndex + 1)
      }
    })
  }, [container])

  return (
    <Layout title="Behind The Scenes" background={customColors.black}>
      <SEO title="Behind The Scenes" image="/og_behind-the-scenes.JPG" />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
      </Helmet>
      <MainContent>
        <CarouselWrapper>
          <div className="slider" ref={carousel} style={{ zIndex: 1000 }}>
            <Swiper getSwiper={setSwiper}>
              {query.allFile.edges.map((image, i) => {
                if (image.node.childImageSharp) {
                  return (
                    <Img
                      style={{
                        width: "100%",
                        height: "71.6vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
            </Swiper>
          </div>
          <CustomCursor container={container} text={cursorText} />
          <h6 className="sliderText">
            {slideNumber} out of 46 behind the scenes images
          </h6>
        </CarouselWrapper>
      </MainContent>
    </Layout>
  )
}

export default BehindTheScenes
