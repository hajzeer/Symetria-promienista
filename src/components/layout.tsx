/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import SEO from "../components/seo"

type ComponentProps = {
  readonly children: React.ReactNode;
}

const Layout = ({children}: ComponentProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <SEO title={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
