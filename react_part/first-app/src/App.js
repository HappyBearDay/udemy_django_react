import React from 'react';
import './App.css';
import {Header} from './components/header'
import Footer from './components/footer'

function OurText() {
  return <p>This is our text</p>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <OurText/>
      <Footer/>
      
    </div>
  );
}

export default App ;
