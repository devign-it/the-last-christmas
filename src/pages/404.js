import React from "react"

import Layout from "../components/layout"
import MainContent from "../components/maincontent"
import { customColors } from "../components/variables"

export default function TheProjectPage() {
  return (
    <Layout background={customColors.gray}>
      <MainContent>
        <p>Please return to the previous page</p>
      </MainContent>
    </Layout>
  )
}
