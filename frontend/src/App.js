import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Carousel from './components/carousel';
import NowShowing from './components/showingmovies';
import Footer from './components/footer';
import LanguageFilter from './components/filter';

function App() {
  return (
    <div >
      <Header/>
      <Carousel/>
      <ul className="filter">
<li><h1>Movies</h1></li>
<li><h6 class="nav-link" >Now Showing</h6></li>
<li><h6 class="nav-link" >Coming Soon</h6></li>
<li><LanguageFilter/></li>
      </ul>
<div className="container">
<NowShowing/></div>
<Footer/>
  </div>
  );
}

export default App;
