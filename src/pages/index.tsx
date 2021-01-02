import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <Hero/>
        <About/>
        <Contact/>
  </Layout>
)

export default IndexPage
