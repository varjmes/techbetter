import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import BG from '../assets/bg.jpg';
import Mission from '../components/Mission';
import Coc from '../components/Coc';
import Contact from '../components/Contact';

const Section = styled.main`
  width: 100%;
  height: 100vh;%;
  background: url(${BG});
  background-size: cover;
  display: flex;
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: -65px;

  * {
    position: relative;
    z-index: 2;
  }


  &:after {
    content: '';
    width: 100%;
    height: 100vh;
    position: absolute;
    background: rgba(129,103,183, .5);
    left: 0;
    top: 0;
  }
`

const Header = styled.h1`
  font-weight: bold;
  font-size: 90px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 1.5;
  max-width: 50%;
  text-transform: uppercase;

  @media(max-width: 960px) {
    max-width: 100%;
  }

  @media(max-width: 500px) {
      font-size: 60px;
  }
`

const SubHeading = styled.h2`
  color: #FFFFFF;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 2.8px;
  margin-top: -50px;
  font-weight: normal;
`

const Wrapper = styled.div`
  min-height: 100%;
`

const IndexPage = () => (
  <Wrapper>
    <Section>
      <Header>We are Tech Better</Header>
      <SubHeading>Because Tech should be for everyone</SubHeading>
    </Section>
    <Mission />
    <Coc />
    <Contact />
  </Wrapper>
)

export default IndexPage
