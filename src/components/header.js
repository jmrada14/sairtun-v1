import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
  color: #615e5a;
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: #ed7272;
  font-size: 3.8rem;
  font-family: "Bebas Neue";
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  margin-left: 0;
  color: #606060;
  :hover {
    color: #ed7272;
    text-decoration: none;
    cursor: pointer;
  }
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <div>
        <br />
        <NavLink to="/">{siteTitle}</NavLink>
      </div>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
