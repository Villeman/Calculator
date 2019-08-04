import React from 'react'
import './App.css'
import MainPlate from './components/MainPlate.js'
import Keyboard from './components/Keyboard.js'
import Display from './components/Display.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "POW",
      content: "PAW"
      
    }
    
  }
  render() {
    return (
      <MainPlate>
        <Display/>
        <Keyboard/>
      </MainPlate>
    
    )
  }
  
}


export default App;
