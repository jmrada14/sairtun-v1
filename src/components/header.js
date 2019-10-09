import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
    color: #615e5a;  
`

const NavLink = styled(Link)`
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


const HomeLink = styled(NavLink)`
  margin-left: 0;
  color: #615e5a;  
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
        <p>
          <HomeLink to="/">{siteTitle}</HomeLink>
            <NavLink to="/blog">Blog & Works</NavLink>
        </p>
      </Content>
    </SiteHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
