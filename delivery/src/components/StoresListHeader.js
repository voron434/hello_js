import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import { LoginButton } from './Buttons'
import Logo from './Logo'

const media = {
  medium: (...args) => css`
    @media (max-width: 1200px) {
      ${ css(...args) }
    }
  `
}
const HeaderText = styled.span`
  font-family: "Pacifico", cursive;
`
class StoresListHeader extends React.Component {
  render() {
    return (
      <header>
        <Grid>
          <Row between="xs" bottom="lg">
            <Col lg={2}>
              <Link to="/">
                <Logo src="img/logoblack.png" alt="Logo"/>
              </Link>
            </Col>
            <Col lgOffset={5} />
            <Col lg={2}>
              <Row center="xs">
                <LoginButton>Вход / Регистрация</LoginButton>
              </Row>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}
export default StoresListHeader