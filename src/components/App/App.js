import React from 'react'
import './App.css'
import MainPlate from '../MainPlate'
import Display from '../Display'
import Keyboard from '../Keyboard'
import * as math from 'mathjs'

export default class App extends React.Component {
  state = {
    lastReceivedSymbol: null,
    displayedValue: '0',
    firstOperand: 0,
    secondOperand: 0,
    operator: null,
    operatorJustSet: 0,
    pointSet: 0
  }  
  receiveSymbol = (val) => {
    this.setState({ lastReceivedSymbol: val }, () => {
        this.inputParser(val)
    })
  }
  keyboardHandler = (event) => {
    this.inputParser(event.key)
  }
  setOperator = (val) => {
      if (val==='÷'){
        val = '/'
      }
      if (val==='×'){
        val = '*'
      }
      this.setState({ operator: val, operatorJustSet: 1}, () => {
        if(this.state.operator) {
          this.setFirstOperand(parseFloat(this.state.displayedValue))
        }
      })
    }

  
  toggleSign = () => {

  }
  setFirstOperand = (val) => { 
    this.setState({ firstOperand: val}, () => {})
  }
  setSecondOperand = (val) => { 
    this.setState({ secondOperand: val}, () => {})
  }
  calculate = () => {
    this.setState({ secondOperand: this.state.displayedValue}, () => {
      if(this.state.secondOperand === 0 && this.state.operator==='/') {
        this.setState({ displayedValue: 'Divide by zero error'}, () => {
          // this.clearAll()
        })       
      }
      else {
          const expression = this.state.firstOperand+this.state.operator+this.state.secondOperand
          this.setState({ displayedValue: math.evaluate(expression)}, () => {})         
      }
    })
  }
  appendDisplay = (val) => {
    if (this.state.displayedValue === '0') {
      this.setState({ displayedValue: val}, () => {})
    }
    else {
      this.setState({ displayedValue: this.state.displayedValue+val}, () => {})
    }
    if(this.state.operatorJustSet) {
      this.clearDisplay(val)
    }
  }
  
  setPoint = () => {
    if(!this.state.pointSet) {
      this.setState({ displayedValue: this.state.displayedValue+'.', pointSet: 1}, () => {})
    }
  }
  clearDisplay = (val) => {
    this.setState({ displayedValue:val,operatorJustSet:0,pointSet:0}, () => {})
  }

  clearAll = () => {
    this.setState({ displayedValue: '0', firstOperand: 0, 
      secondOperand: 0, operator:null, operatorSet: 0, pointSet: 0}, () => {})
  }
  inputParser = (val) => {
    if(val === 'AC') {
        this.clearAll()
    }
    else if(val === '.') {
      this.setPoint()
    }
    else if(val === '±') {
      this.toggleSign()
    }
    else if(val === '=' || val==='Enter') {
      this.calculate()
    }
    else if(/[0-9]/.test(val)) {
      this.appendDisplay(val)
    }
    else if('+-÷×/*'.includes(val)) {
      this.setOperator(val)
    }
  }
  render() {
    let sendToDisplay = this.state.displayedValue
    sendToDisplay = parseFloat(sendToDisplay)
    sendToDisplay = +sendToDisplay.toFixed(10)
    return (
      <MainPlate clickKey={this.keyboardHandler} tabIndex={0}>
        <Display value={sendToDisplay} />
        <Keyboard onNumberClick={this.receiveSymbol} />
        <p>{this.state.firstOperand}</p>
        <p>{this.state.operator}   {this.state.operatorSet}</p>
        <p>{this.state.secondOperand}</p>
        <p>{this.state.pointSet}</p>
      </MainPlate>
    )
  }
}




