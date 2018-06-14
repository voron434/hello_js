import Hide from 'hidden-styled'
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Footer from '../components/Footer'
import Header from '../components/Header'
import StoreCard from '../components/StoreCard'
import {Button} from '../components/Buttons'

const Title =  styled.h1`
    margin-top: 50px;
    line-height: 48px;
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 35px;
    text-align: left;
    color: #333333;
`
const PlainText = styled.div`
  font-family: "Open Sans", Regular;
  font-size: 18px;
`
const DescriptionCover = styled.img.attrs({
    src: "img/picpizzaaa.jpg"
}) `
    width: 100%;
`
class Mainpage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Grid>
          <Row>
            <Col lg={6} md={12} >
              <Title>Что мы делаем?</Title>
              <PlainText>
                <p>
                  Delivery Club - это независимый клубный проект, объединивший сотни служб доставки еды и продуктов в Единую Систему Заказов.                </p>
                <p>
                  Цель проекта - обеспечить своим пользователям наилучшие условия для быстрого, удобного и выгодного осуществления заказов.
                  Услуги сайта абсолютно бесплатны, а условия доставки очень простые
                </p>
              </PlainText>                  
            </Col>
            <Col lg={6} >
              <Hide md>
                <DescriptionCover aria-hidden="true" />
              </Hide>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={12}>
              <Title>Рестораны</Title>
            </Col>
          </Row>
          <Row around="xs">
            <Col lg={3} md={6} sm={12}>
              <StoreCard img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"/>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <StoreCard img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"/>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <StoreCard img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"/>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <StoreCard img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"/>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <StoreCard img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"/>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <StoreCard img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"/>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <StoreCard img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"/>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <StoreCard img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"/>
            </Col>
          </Row>
          <Row center="xs">
            <Col sm={12}>
              <Button>Все рестораны</Button>
            </Col>
          </Row>
        </Grid>
        <Footer/>
      </div>
    );
  }
}
export default Mainpage