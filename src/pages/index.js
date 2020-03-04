import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { magicNumber, textSize, customColors } from "../components/variables"
import SEO from "../components/seo"
import MainContent from "../components/maincontent"
import CustomCursor from "../components/customcursor"

const VideoTextWrapper = styled.div`
  width: 100%;
  font-size: ${textSize.xlarge};
  @media screen and (max-width: 1200px) {
    font-size: ${textSize.xlargeFlex};
  }

  .videoText {
    padding: ${magicNumber}px;
    margin: ${magicNumber}px auto ${magicNumber}px auto;
    @media screen and (max-width: 1200px) {
      margin: 4vw;
      padding: 0;
    }
  }
`
const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 100;
  padding: ${magicNumber}px 0;
  iframe {
    width: 100%;
    height: 100%;
    min-height: 680px;
  }
  @media screen and (max-width: 1200px) {
    padding: 4vw 0;
    iframe {
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
      <SEO title="Aftermovie" image="/og_aftermovie.JPG" />
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
