import React from 'react';
import Header from '../../components/header/header';
import './App.scss';
import Carousel from "../../components/carousel";
import NowShowing from '../../components/showingmovies';
import Footer from '../../components/footer';
import LanguageFilter from '../../components/filter';

function App() {
  return (
    <div >
      <Header/>
      <Carousel/>
      <h1 className="text-center movietitle">Movies</h1>
      <ul className="filter">
<li><button className="nav-link btn btn-light" >Now Showing</button></li>
<li><button className="nav-link btn btn-light"  >Coming Soon</button></li>
<li><LanguageFilter/></li>
      </ul>
<div className="container">
<NowShowing/></div>
<Footer/>
  </div>
  );
}

export default App;
