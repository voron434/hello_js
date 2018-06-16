import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import StoresList from './pages/StoresList'

const NotFound404 = () => (
  <div>
    <h1>404</h1>
    <p>Страница не найдена</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path="/stores" component={StoresList} />
            <Route component={NotFound404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App