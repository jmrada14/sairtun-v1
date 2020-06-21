import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <div style={{backgroundColor:" #fafafa"}}>
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, "blog"]} />
    <Bio />
  </Layout>
  </div>
)

export default IndexPage
