import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import { css } from 'styled-components'

const media = {
  small: (...args) => css`
    @media (min-width: 768px) {
      ${ css(...args) }
    }
  `
}
const FooterWrapper = styled.footer`
  margin-top: 30px;
  padding-bottom: 64px;
  background-color: #333333;
  ${ media.small`
    margin-top: 100px;
  `}
` 
const FooterTitle = styled.h4`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #999999;
  margin-top: 40px;
  ${ media.small`
    text-align: left;
  `}
`
const FooterLink = styled.a`
  display: block;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  text-decoration: underline;
  color: #cccccc;
  &:hover {
    color: #a3d200;
  }
  ${ media.small`
    text-align: left;
  `}
`
const FooterSocialBlock = styled.div`
  text-align: center;
  ${ media.small`
    text-align: right;
  `}
`
const FooterSocialIcon = styled.img`
  margin-top: 40px;
  margin-left: 15px;
  height: 64;
  widht: 64;
`
const FooterSocialLinkHref = styled.a`
  height: 64;
  widht: 64;
`
const FooterSocialLink = ({ src, href, alt }) => (
    <FooterSocialLinkHref href={href}>
        <FooterSocialIcon src={src} alt={alt} />
    </FooterSocialLinkHref>
)
const FooterCopyright = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 18px;
  line-height: 24px;
  color: #cccccc;
  ${ media.small`
    text-align: right;
  `}
`
class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <Grid>
          <Row between="xs">
            <Col md={6} xs={12}>
              <FooterTitle>Компания</FooterTitle>
              <FooterLink>Для курьеров</FooterLink>
              <FooterLink>Партнерство для ресторанов</FooterLink>
              <FooterLink>Условия проведения акций</FooterLink>
              <FooterLink>Контакты</FooterLink>
            </Col>
            <Col md={6} xs={12}>
              <FooterSocialBlock>
                <FooterSocialLink src="img/ig.png" href="#" alt="Instagram" />
                <FooterSocialLink src="img/vk.png" href="#" alt="VK" />
              </FooterSocialBlock>
              <FooterCopyright>
                &copy;2009-2018 Delivery Club&trade;
                <br />
                Все права защищены
              </FooterCopyright>
            </Col>
          </Row>
        </Grid>
      </FooterWrapper>
    );
  }
}
export default Footer