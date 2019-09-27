import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Bio />
    </Layout>
)

export default IndexPage
