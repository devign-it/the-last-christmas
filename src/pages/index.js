import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { magicNumber, textSize, customColors } from "../components/Variables"
import SEO from "../components/SEO"
import MainContent from "../components/MainContent"
import CustomCursor from "../components/CustomCursor"

const VideoTextWrapper = styled.div`
  width: 100%;
  font-size: ${textSize.large2};
  @media screen and (max-width: 1200px) {
    font-size: 3.33vw;
  }

  .videoText {
    width: ${14 * magicNumber}px;
    margin: auto;
    @media screen and (max-width: 1200px) {
      width: 70vw;
    }
  }
`
const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 100;
  // background-color: #000;
  padding: ${magicNumber}px 0;
  iframe {
    width: 100%;
    height: 100%;

    min-height: 680px;
    @media screen and (max-width: 1200px) {
      min-height: 55vw;
    }
  }
`
function IndexPage() {
  const [container, setContainer] = useState()
  useEffect(() => {
    setContainer(document.querySelector(".vimeo-iframe"))
  }, [])
  return (
    <Layout title="Aftermovie" background={customColors.gray}>
      <SEO title="Video" />
      <MainContent>
        <VideoWrapper className="vimeo-iframe">
          <iframe
            // style={{ width: "auto%", height: "100%" }}
            title="Video"
            src="https://player.vimeo.com/video/391434825?color=ffffff"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <VideoTextWrapper>
          <div className="videoText">
            <p>
              At his young age he strived to meet the demands by spending every
              second on his passion and work. A love of natural light, travel
              and global outlooks are but some of his motivations whilst
              developing his career. Rein Kooyman's work is
            </p>
            <br />
            <p>
              characterised by the appearance of austerity. A subtle form of
              gloom that magically forces you to stand still. The combination
              between commercial work and personal work gives him the perfect
              space to develop his love and passion, photography
            </p>
          </div>
        </VideoTextWrapper>
        {/* <CustomCursor container={container} text="play" /> */}
        <script src="https://player.vimeo.com/api/player.js"></script>
      </MainContent>
    </Layout>
  )
}

export default IndexPage
