import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { css } from 'styled-components'
import { AboutButton, LoginButton } from './Buttons'
import Logo from './Logo'

const media = {
  medium: (...args) => css`
    @media (max-width: 1200px) {
      ${ css(...args) }
    }
  `
}
const HeaderWrapper = styled.header`
  background-image: url(img/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 75px;
`
const HeaderText = styled.span`
  font-family: "Pacifico", cursive;
`
const HeaderTextFirst = HeaderText.extend`
  font-size: 77.32px;
  text-align: left;
  letter-spacing: 2.97px;
  color: #fff;
  margin-top: 96px;
  margin-left: 200px;
  ${ media.medium`
    display: block;
    width: 100%;
    margin-left: 0;
    text-align: center;
    line-height: 84px;
    font-size: 60px;
  `}
`
const HeaderTextSecond = HeaderText.extend`
  font-size: 182.75px;
  text-align: left;
  line-height: 37px;
  letter-spacing: 6.49px;
  color: #b7e611;
  margin-left: 260px;
  ${ media.medium`
    display: block;
    width: 100%;
    margin-left: 0;
    text-align: center;
    line-height: 84px;
    font-size: 100px;
  `}  
`
class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Grid>
          <Row>
            <Col lg={3}>
              <Row center="xs">
                <Logo src="img/logowhite.png" alt="Logo" />
              </Row>
            </Col>
            <Col lgOffset={5} />
            <Col lg={3}>
              <Row center="xs">
                <LoginButton>Вход / Регистрация</LoginButton>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <HeaderTextFirst>Меняйте баллы</HeaderTextFirst>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <HeaderTextSecond>на призы</HeaderTextSecond>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12}>
              <AboutButton>Подробнее</AboutButton>
            </Col>
          </Row>
        </Grid>
      </HeaderWrapper>
    );
  }
}
export default Header