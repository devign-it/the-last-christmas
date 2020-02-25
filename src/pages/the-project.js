import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContent from "../components/MainContent"

import { customColors } from "../components/variables"

export default function BehindTheScenes() {
  return (
    <Layout title="The Project" background={customColors.gray}>
      <SEO title="The Project" />

      <MainContent>
        <h1 style={{ textAlign: "center", fontSize: "200px", padding: "5rem" }}>
          Soon to be released
        </h1>
      </MainContent>
    </Layout>
  )
}
