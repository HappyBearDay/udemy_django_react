import React from 'react';
import './App.css';
import {Header} from './components/header'
import Footer from './components/footer'

function OurText(props) {
  return (
    <React.Fragment>
      <p>This is our text + {props.info}</p> 
      <p>This is our sub text + {props.number}</p>
    </React.Fragment>
    )
}

function App() {
  return (
    <div className="App">
      <Header />
      <OurText info='this is my message' number='4'/>
      <Footer trademark='page by bear'/>
      
    </div>
  );
}

export default App ;
