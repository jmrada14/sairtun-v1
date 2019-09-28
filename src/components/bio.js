import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

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
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #615e5a;  
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
  color: #eba134;
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
                    <Description>Hello there! <br></br>—  I'm a Software Developer with interests in Cryptography, Economic systems, and much more. My goal is to build free, efficient, and secure software to help society.</Description>
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
