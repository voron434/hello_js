import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}
export default App;