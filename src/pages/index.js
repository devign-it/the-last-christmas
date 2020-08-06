import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { customColors } from "../components/variables"
import SEO from "../components/seo"
import MainContent from "../components/maincontent"
import CustomCursor from "../components/customcursor"
import Img from "gatsby-image"
import Player from "@vimeo/player"
import { graphql, useStaticQuery } from "gatsby"
import "./styles/index.scss"
// import styled from "styled-components"

// const VideoTextWrapper = styled.div`
//   width: 100%;
//   font-size: ${textSize.xlarge};
//   @media screen and (max-width: 1200px) {
//     font-size: ${textSize.xlargeFlex};
//   }

//   .videoText {
//     padding: ${magicNumber}px;
//     margin: ${magicNumber}px auto ${magicNumber}px auto;
//     @media screen and (max-width: 1200px) {
//       margin: 0;
//       padding: 0;
//     }
//   }
// `
// const VideoWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   z-index: 100;
//   padding: ${magicNumber}px 0;
//   position: relative;
//   iframe {
//     width: 100%;
//     height: 100%;
//     min-height: 680px;
//   }
//   .overlay {
//     position: absolute;
//     width: 100%;
//     max-height: 680px;
//     z-index: 10;
//     overflow: hidden;
//   }
//   @media screen and (max-width: 1200px) {
//     padding: 4vw 0;
//     iframe {
//       min-height: 55vw;
//     }
//     .overlay {
//       max-height: 55vw;
//     }
//   }
// `

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      overlay: file(relativePath: { eq: "slider/foto_inleidend.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [container, setContainer] = useState()

  useEffect(() => {
    setContainer(document.querySelector(".overlay"))
  }, [])
  useEffect(() => {
    document.querySelector(".overlay").addEventListener("click", (e) => {
      e.target.style.display = "none"
      new Player(document.querySelector("iframe")).play()

      const elemCustomCursor = document.querySelector(".CustomCursor")
      const elemOverlay = document.querySelector(".overlay")
      elemCustomCursor.parentNode.removeChild(elemCustomCursor)
      elemOverlay.parentNode.removeChild(elemOverlay)
    })
  }, [])
  return (
    <Layout title="Aftermovie" background={customColors.gray}>
      <SEO title="Aftermovie" image="/og_aftermovie.JPG" />
      <MainContent>
        <div className="VideoWrapper vimeo-iframe">
          <iframe
            title="Video"
            src="https://player.vimeo.com/video/407974165?color=ffffff"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <div className="overlay">
            <Img
              style={{ height: "100%", overlay: "hidden" }}
              fluid={data.overlay.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="VideoTextWrapper">
          <div className="videoText">
            <p>
              As part of an ambitious collaboration, Noah Latif Lamp and Rein
              Kooyman present Last Christmas, a photographic work that would
              weigh heavily on the conscience of any honourable western society,
              whose implication in the destruction of the natural world wields
              the real cost of overconsumption.
            </p>
            <p>
              The large format photograph documents an art installation whose
              imagery lays naked the tyranny of abundance that is always with us
              but reaches a fever pitch during Christmas. The festivities bring
              about a natural state of reflection – a sacred window reserved for
              comfort and love – but with that, the pressure to tie loose ends,
              the worry of having enough money and time to buy gifts, create a
              sense of occasion for friends and family that lives up to
              expectations, overflowing with food, drink and presents that we
              could never come close to consuming, let alone wholesomely
              appreciate. The material and commercial greed that governs the
              ritual has come to devour our thoughts, emotions, time and space,
              even our essential purpose. We accept the wholesale chimera of
              Christmas, but what is it really about? Beneath the plastic
              wrapping, will we find unconditional compassion for all people? A
              generous and charitable spirit? Or have those values been eroded?
            </p>
            <p>
              A confrontational commentary to these questions played out in the
              depths of the Amazon jungle during the holidays. Documented in a
              5-minute film which will be released alongside the image, Lamp
              returns to his ancestral roots in Suriname to embark on the
              installation. He hijacks the cultural imagery of Christmas,
              adorning the lush greens of the rainforest with the trinkets of
              our materialist abundance: synthetic, lifeless and in many ways
              toxic, if not most certainly disposable. The lungs of the earth
              laden with shiny bulbs, the short-lived glimmer of tinsel and
              string lights. Unambiguous in its allegory, it plays out like act
              of cannibalism: the transitory altar of the family home takes post
              in the very environment it destroys by chain of effect. We must
              ask ourselves if the banal chaos of cheap plastics is commensurate
              with the razing of a natural wonder.
            </p>
            <p>
              Careful to leave no trace of this destructive detritus, a total
              clean-up was completed following the 48-hour shooting session.
              Moreover, Lamp intends the message of this work to reach beyond
              the image alone; not only should it encourage preservation, but it
              should give back to the natural resources from which it extracts.
              For every work sold, half of the revenue will be donated to
              <a href="https://www.earthday.org/">Earthday organisation</a>
            </p>
          </div>
        </div>
        <CustomCursor container={container} text="play" />
        <script src="https://player.vimeo.com/api/player.js"></script>
      </MainContent>
    </Layout>
  )
}

export default IndexPage
