/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import {Helmet} from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {createGlobalStyle} from "styled-components";

import SEO from "../components/seo"

type ComponentProps = {
  readonly children: React.ReactNode;
}

const GlobalStyled = createGlobalStyle`
  *{
  box-sizing: border-box;
}
  body{
    font-family: "Teko",sans-serif;
    background: #6352e3;
    margin: 0;
    padding: 0;
  }
  
`;


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
      <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <GlobalStyled />
        <SEO title={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
