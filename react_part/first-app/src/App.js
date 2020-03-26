import React from 'react';
import './App.css';
import {Header} from './components/header'
import Footer from './components/footer'

import styled from 'styled-components'


function OurText(props) {
  const Paragraph = styled.p`
  font-size : 3em;
  color : red;
  `
  return (
    <React.Fragment>
      <p>This is our content</p> 
      <Paragraph>This is our content</Paragraph> 
    </React.Fragment>
    )
}

function create_external_alert(){alert('ALERT')}

function App() {
  const userLogin = true
  if (userLogin){
  return (
    <div className="App">
      <Header info='this is my message'/>
      <OurText/>
      <Footer trademark='page by bear' myalert={create_external_alert}/> 
    </div>
  )
  } else {
    return (<div>Forbidden</div>)
  }
}

export default App ;
