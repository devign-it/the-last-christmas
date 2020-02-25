import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import MainContent from "../components/MainContent"

import { textSize, magicNumber } from "../components/variables"

const Contact = styled.div`
  width: 100%;
  display: flex;
  padding-top: ${magicNumber * 1.5}px;
`
const ContactDetails = styled.div`
  h5,
  p {
    font-size: ${textSize.large};
    line-height: ${magicNumber * 0.9}px;
  }
`
export default function BehindTheScenes() {
  return (
    <Layout title="Contact">
      <SEO title="Contact" />

      <MainContent>
        <Contact style={{}}>
          <div
            style={{ width: "50%", border: "1px solid #0001" }}
            className="form"
          ></div>
          <div style={{ width: "50%" }} className="details">
            <ContactDetails style={{ padding: ".5rem 3rem" }}>
              <h5>Contact</h5>
              <p>info@thelastchristmas.com</p>
              <p>06121042392</p>
              <br />
              <h5>Partners</h5>
              <p>MediaMonks</p>
              <p>Since88</p>
              <p>Rolodex Agency</p>
              <p>Devign.it</p>
            </ContactDetails>
          </div>
        </Contact>
      </MainContent>
    </Layout>
  )
}
