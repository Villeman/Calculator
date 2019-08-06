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
  setOperator = (val) => {
      if (val==='÷'){
        val = '/'
      }
      if (val==='×'){
        val = '*'
      }
      this.setState({ operator: val, operatorJustSet: 1}, () => {
        console.log(this.state.operator)
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
      const expression = this.state.firstOperand+this.state.operator+this.state.secondOperand
      this.setState({ displayedValue: math.evaluate(expression)}, () => {

      })
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
    console.log('Clearing all')
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
    else if(val === '=') {
      this.calculate()
    }
    else if(Number.isInteger(parseInt(val, 10))) {
      this.appendDisplay(val)
    }
    else {
      this.setOperator(val);
    }
  }
  render() {
    return (
      <MainPlate>
        <Display value={this.state.displayedValue} />
        <Keyboard onNumberClick={this.receiveSymbol} />
        <p>{this.state.firstOperand}</p>
        <p>{this.state.operator}   {this.state.operatorSet}</p>
        <p>{this.state.secondOperand}</p>
        <p>{this.state.pointSet}</p>
      </MainPlate>
    )
  }
}




