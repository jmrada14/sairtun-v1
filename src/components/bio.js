import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import {
  DiRuby,
  DiNodejsSmall,
  DiMongodb,
  DiReact,
  DiMysql,
} from "react-icons/di"
import { FaServer } from "react-icons/fa"
import "babel-polyfill"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
  border-radius: 40px;
`

const Description = styled.p`
  color: #ed7272;
  font-size: 24px; 
  font-weight: 300; 
  line-height: 32px; 
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  width: 580px;
  text-align: left; 
  text-indent: 10px;

`
const NameHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: -5px;
  color: #606060;
  
  
`

const Bio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }

    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>
            {" "}
            <br />
            — I'm Juan, an enthusiastic Software Developer, who spends most of
            his time programming in Node.js and Ruby. I'm constantly forwarding
            the enrichment of my knowledge and the exploration of new
            technologies.
            <br />
            <br />
            Currently I'm working for <strong>Infosys Ltd</strong> building UI
            solutions in ReactJS <DiReact />, back-end solutions with Node.js{" "}
            <DiNodejsSmall />, Ruby <DiRuby />, MongoDB <DiMongodb />, MySQL{" "}
            <DiMysql />, and several libraries & frameworks including: Fastify,
            ExpressJS <FaServer />, and much more.
          </Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

export default Bio
