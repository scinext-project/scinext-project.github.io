import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import R0Estimation from './pages/R0Estimation'
import Sota from './pages/Sota';

import { Container } from 'reactstrap'

class App extends Component {

  render() {
    return (
      <div>
        <Container>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/r0-estimates' element={<R0Estimation />} />
            <Route path='/sota' element={<Sota />} />
            <Route path="/:path" element={<R0Estimation />} />
          </Routes>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
