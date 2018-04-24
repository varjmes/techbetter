import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'


const HeaderStyled = styled(Flex) `
  position: relative;
  z-index: 2;
  padding: 20px;
`

const Anchor = styled(Link) `
  font-weight: bold;
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 2.4px;
  text-align: center;
  text-decoration: none;

  &:not(:last-child) {
    padding-right: 30px;
  }

`

const Header = ({ siteTitle }) => (
  <HeaderStyled flexWrap='wrap' justifyContent="space-between">
    <img src={Logo} alt="TechBetter Logo" />
    <nav>
      <Anchor
        to="/#mission"
      >
        Mission
        </Anchor>
      <Anchor
        to="/#coc"
      >
        Code Of Conduct
        </Anchor>
      <Anchor
        to="/#contact"
      >
        Contact
        </Anchor>
    </nav>
  </HeaderStyled>
)

export default Header
