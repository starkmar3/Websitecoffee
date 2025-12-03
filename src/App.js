import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Product from './Product';
import Reviews from './Reviews';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Product />
      <Reviews/>
      <Footer />
    </div>
  )

}

export default App;
