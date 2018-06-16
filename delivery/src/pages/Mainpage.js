import Hide from 'hidden-styled'
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { RingLoader } from 'react-spinners';
import styled from 'styled-components';
import { Button } from '../components/Buttons'
import Footer from '../components/Footer'
import Header from '../components/Header'
import StoreCard from '../components/StoreCard'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const PlainText = styled.div`
  font-family: "Open Sans", Regular;
  font-size: 18px;
`
const DescriptionCover = styled.img.attrs({
    src: "img/picpizzaaa.jpg"
}) `
    width: 100%;
`
const PageWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
`
class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      loading: true
    };
  }
  componentDidMount() {
    fetch("https://itc-web1-server.now.sh/stores?limit=8")
        .then(
          (response) => response.json()
        ).then(
          (response_json) => this.setState(
            {
              stores: response_json.payload.stores,
              loading: false
            }
          )
        )
  }
  render() {
    return (
      <PageWrapper>
        <Header />
        <Grid>
          <Row>
            <Col lg={6} md={12}>
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
            <Col lg={6}>
              <Hide md sm xs>
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
            {this.state.stores.map(
              (store, key) => (
                <Col lg={3} md={6} sm={12}>
                  <StoreCard store={store} key={key} />
                </Col>
              )
            )}
            <Col lg={3} md={6} sm={12}>
              <RingLoader
                color={'#000'}
                loading={this.state.loading}
              />
            </Col>
          </Row>
          <Row center="xs">
            <Col sm={12}>
              <Link to="/stores"><Button to="/stores">Все рестораны</Button></Link>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </PageWrapper>
    );
  }
}
export default Mainpage