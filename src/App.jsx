import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Explore from './components/Explore';
import Classes from './components/Classes';
import Join from './components/Join';
import Pricing from './components/Pricing';
import Review from './components/Review';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Explore />
      <Classes />
      <Join />
      <Pricing />
      <Review />
      <Footer />
    </div>
  );
}

export default App;