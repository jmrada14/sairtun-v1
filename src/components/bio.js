import React, {Component} from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql, Link} from "gatsby";
import styled from "@emotion/styled";
import { DiGithubBadge, DiRuby, DiNodejsSmall, DiMongodb, DiRor, DiLaravel, DiReact,DiMysql } from "react-icons/di"
import { FaStackOverflow, FaDev, FaLinkedin, FaServer } from "react-icons/fa"

import 'babel-polyfill'

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
    background-color:  rgb(107, 199, 122);
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

`;

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
  border-radius: 40px;
`;

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #615e5a;  
`;

const NameHeader = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 0;
  color: #eba134;
`;
const HelloThere = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #615e5a;  
`;

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
                    <br/><HelloThere> Hello there! </HelloThere>
                    <Description>  <br/>
                        —  I'm Juan, a Full Stack Developer who focuses on writing secure, clean, and efficient code to help society.
                        <br/><br/>
                           I have experience with Ruby <DiRuby/>, ES6 <DiNodejsSmall/>, R, and several libraries & frameworks including: Ruby on Rails <DiRor/>, ExpressJS <FaServer/>, Laravel <DiLaravel/>, React <DiReact/>, Mongoose <DiMongodb/>, Sequelize <DiMysql/>, Ggplot2, and much more.<br/>
                           <br/>
                           Check out my networks:<br/>

                        <Linky href="https://github.com/jmrada14" target="_blank"> <DiGithubBadge/> </Linky>
                        <Linky href="https://stackoverflow.com/users/11632596/sairtun?tab=profile" target="_blank"> <FaStackOverflow/> </Linky>
                        <Linky href="https://dev.to/jmrada14" target="_blank"> <FaDev/> </Linky>
                        <Linky href="https://www.linkedin.com/in/juan-rada-4b997b190/" target="_blank"> <FaLinkedin/> </Linky>
                    </Description>
                </Container>
            </OuterContainer>
        )}
    />
);

NameHeader.propTypes = {
    siteTitle: PropTypes.string,
};

NameHeader.defaultProps = {
    siteTitle: ``,
};

export default Bio
