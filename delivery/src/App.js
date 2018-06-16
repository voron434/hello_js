import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Mainpage from './pages/Mainpage'
import StoresList from './pages/StoresList'

const NotFound404 = () => (
  <div>
    <h1>404</h1>
    <p>Страница не найдена</p>
  </div>
);
const Wrapper = styled.div`
  text-align: left;
`
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper className="App">
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path="/stores" component={StoresList} />
            <Route component={NotFound404} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    );
  }
}
export default App