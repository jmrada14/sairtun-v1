/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`
const GitHubLink = styled.a`
  color: #615e5a;  
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color:  rgb(107, 199, 122);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
const ResumeLink = styled.a`
  color: #615e5a;  
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color:  rgb(107, 199, 122);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <Content>
                    <main>{children}</main>
                    <Footer>
                        <GitHubLink href="https://github.com/jmrada14" target="_blank">GitHub</GitHubLink>  <ResumeLink href="https://drive.google.com/file/d/13EPXl9PTfIRipllq7yTa1CKOOdRjeIVu/view?usp=sharing" target="_blank">Resume</ResumeLink>
                    </Footer>
                </Content>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
