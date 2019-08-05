import React from 'react'
import './App.css'
import MainPlate from '../MainPlate'
import Display from '../Display'
import Keyboard from '../Keyboard'

export default class App extends React.Component {
  state = {
    firstOperand: 0,
    secondOperand: 0,
    operator: 0,
    operatorIsSet: false
  }  





  render() {
    return (
      <MainPlate>
        <Display value={this.state.displayedValue}/>
        <Keyboard  alertNumber={this.alertNumber}/>
      </MainPlate>
    
    )
  }
  
}




