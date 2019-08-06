import React from 'react'
import './App.css'
import MainPlate from '../MainPlate'
import Display from '../Display'
import Keyboard from '../Keyboard'

export default class App extends React.Component {
  state = {
    lastReceivedSymbol: null,
    displayedValue: '0',
    firstOperand: null,
    secondOperand: null,
    operator: null,
    operatorSet: false,
    pointSet: false
  }  
  receiveSymbol = (val) => {
    this.setState({ lastReceivedSymbol: val }, () => {
        this.inputParser(val)
    })
  }
  setOperator = (val) => { 

  }
  appendDisplay = (val) => {
    if (this.state.displayedValue === '0') {
      this.setState({ displayedValue: val}, () => {})
    }
    else {
      this.setState({ displayedValue: this.state.displayedValue+val}, () => {})
    }
  } 
  setPoint = () => {
    if(!this.state.pointSet)
    {
      this.setState({ displayedValue: this.state.displayedValue+'.', pointSet: true}, () => {})
    }
  }
  clearDisplay = () => {
    this.setState({ displayedValue: '0'}, () => {})
  }
  clearAll = () => {
    console.log('Clearing display')
    this.setState({ displayedValue: '0', firstOperand: null, 
      secondOperand: null, operatorSet: false, pointSet: false}, () => {})
  }

  inputParser = (val) => { 
    console.log('input parser received '+ this.state.lastReceivedSymbol)
    switch (true) {
      case(val ==='AC'):
        this.clearAll()
      break;
      case(val ==='.'):
        this.setPoint()
      break;
      case(!Number.isInteger(val)):
        console.log(Number.isInteger(val))
        // this.appendDisplay(val);
        break;
      default:
        break;
    }
  }

  




  render() {
    return (
      <MainPlate>
        <Display value={this.state.displayedValue} />
        <Keyboard onNumberClick={this.receiveSymbol} 
                                                    />
      </MainPlate>
    
    )
  }
  
}




