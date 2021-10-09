import React, { Component } from 'react'
import Nav from './pages/Nav';
import Slideer from './pages/Slideer';

import './App.css';
import Card from './pages/Card';
import Jumbotron from './pages/Jumbotron';
import Footer from './pages/Footer';
export class App extends Component {
  render() {
    return (
      <div>
      <Nav />
 

 <Slideer />

<Jumbotron />
 <Card />
 <Footer />
      </div>
    )
  }
}

export default App
