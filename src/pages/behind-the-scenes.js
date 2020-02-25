import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "nuka-carousel"

import MainContent from "../components/MainContent"

import { textSize, customColors, magicNumber } from "../components/variables"

export default function BehindTheScenes() {
  return (
    <Layout title="Behind The Scenes" background={customColors.black}>
      <SEO title="Behind The Scenes" />

      <MainContent>
        <div style={{ display: "block", margin: "auto", overflow: "hidden" }}>
          <Carousel
            withoutControls={true}
            // getControlsContainerStyles={control => {
            //   switch (control) {
            //     case "CenterLeft":
            //       return {
            //         color: "red",
            //       }
            //   }
            //   console.log(control)
            // }}
          >
            <img src="https://images.unsplash.com/photo-1582580323501-18356e59d4aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
            <img src="https://images.unsplash.com/photo-1582581284343-70f34198dda8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
          </Carousel>
          <p
            style={{
              color: `${customColors.white}`,
              fontSize: `${textSize.large}`,
              paddingTop: `${magicNumber * 0.5}px`,
            }}
          >
            1 out of 20 behind the scenes images
          </p>
        </div>
      </MainContent>
    </Layout>
  )
}
