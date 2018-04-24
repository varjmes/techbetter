import styled from 'styled-components'

export const Header = styled.h1`
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

export const SubHeading = styled.h2`
  color: #FFFFFF;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 2.8px;
  margin-top: -50px;
  font-weight: normal;
`

export const Section = styled.section`
  width: 90%;
  height: 100%;
  display: flex;
  padding: 40px;
  flex-direction: column;
  position: relative;
  margin: auto;
`

export const H2 = Header.extend`
  max-width: 100%;
  color: #2C2C2C;
  line-height: 1;
  margin-top: 0;
`

export const Paragraph = styled.p`
    color: #2C2C2C;
    font-size: 16px;
    line-height: 1.5;
`
