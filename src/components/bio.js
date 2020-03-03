import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import {
  DiGithubBadge,
  DiRuby,
  DiNodejsSmall,
  DiMongodb,
  DiReact,
  DiMysql,
} from "react-icons/di"
import { FaStackOverflow, FaDev, FaLinkedin, FaServer } from "react-icons/fa"

import "babel-polyfill"

const Linky = styled.a`
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
    background-color: rgb(107, 199, 122);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  // background-color: #fafafa;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
  border-radius: 40px;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #615e5a;
`

const NameHeader = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 0;
  color: #eba134;
`
const HelloThere = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #615e5a;
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
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <br />
          <HelloThere> <strong>Hi there!</strong> </HelloThere>
          <Description>
            {" "}
            <br />
            — I'm Juan, an enthusiastic Software Developer, who spends most of
            his time programming in Node.js and Ruby. I'm constantly forwarding the
            enrichment of my knowledge and the exploration of new technologies.
            <br />
            <br />
            Currently I'm working for <strong>Infosys Ltd</strong> building UI
            solutions in ReactJS <DiReact />, back-end solutions with Node.js{" "}
            <DiNodejsSmall />, Ruby <DiRuby />, MongoDB <DiMongodb />, MySQL{" "}
            <DiMysql />, and several libraries & frameworks including: Fastify,
            ExpressJS <FaServer />, and much more.
            <br />
            <br />
            Get in touch:
            <br />
            <Linky href="https://github.com/jmrada14" target="_blank">
              {" "}
              <DiGithubBadge size={40} />{" "}
            </Linky>
            <Linky
              href="https://stackoverflow.com/users/11632596/sairtun?tab=profile"
              target="_blank"
            >
              {" "}
              <FaStackOverflow size={40} />{" "}
            </Linky>
            <Linky href="https://dev.to/jmrada14" target="_blank">
              {" "}
              <FaDev size={40} />{" "}
            </Linky>
            <Linky
              href="https://www.linkedin.com/in/juan-rada-4b997b190/"
              target="_blank"
            >
              {" "}
              <FaLinkedin size={40} />{" "}
            </Linky>
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
