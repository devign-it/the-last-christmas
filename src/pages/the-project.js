import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContent from "../components/maincontent"
import { customColors } from "../components/variables"

import styled from "styled-components"

const Title = styled.h1`
  text-align: center;
  font-size: 200px;
  padding-top: 120px;
  line-height: 1;
  @media screen and (max-width: 1200px) {
    font-size: 16.66vw;
    padding-top: 10vw;
  }
`
export default function TheProjectPage() {
  return (
    <Layout title="The Project" background={customColors.gray}>
      <SEO title="The Project" image="/og_the-project.JPG" />

      <MainContent>
        <Title>Soon to be released</Title>
      </MainContent>
    </Layout>
  )
}
