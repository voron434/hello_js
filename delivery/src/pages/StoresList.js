import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { RingLoader } from 'react-spinners';
import styled from 'styled-components';
import { Button } from '../components/Buttons'
import Footer from '../components/Footer'
import StoreCard from '../components/StoreCard'
import StoresListHeader from '../components/StoresListHeader'
import Title from '../components/Title'

const PageWrapper = styled.div`
  font-family: "Open Sans", Regular;
`
const HorizontalRow = styled.hr`
  color: gray;
  margin-top: 50px;
  margin-bottom: -10px;
`
class StoresList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      loading: true,
      offset: 0
    };
    this.loadMore = this.loadMore.bind(this);
  }
  loadMore() {
    let offset = this.state.offset
    let stores = this.state.stores
    this.setState(
      {
        stores: stores,
        offset: offset,
        loading: true
      }
    )
    fetch(`https://itc-web1-server.now.sh/stores?limit=9&offset=${offset}`)
        .then(
          (response) => response.json()
        ).then(
          (response_json) => this.setState(
            {
            stores: stores.concat(response_json.payload.stores),
            offset: offset+9,
            loading: false
            }
          )
        )
  }
  componentDidMount() {
    fetch("https://itc-web1-server.now.sh/stores?limit=9")
        .then(
          (response) => response.json()
        ).then(
          (response_json) => this.setState(
            {
              stores: response_json.payload.stores,
              loading: false,
              offset: 9
            }
          )
        )
  }
  render() {
    return (
      <PageWrapper>
        <StoresListHeader />
        <HorizontalRow />
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
            <RingLoader
              color={'#000'}
              loading={this.state.loading}
            />
          </Row>
          <Row center="xs">
            <Col sm={12}>
              <Button onClick={this.loadMore}>Ещё</Button>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </PageWrapper>
    );
  }
}
export default StoresList