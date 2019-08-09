import React from 'react'
import './App.css'
import MainPlate from '../MainPlate'
import Display from '../Display'
import Keyboard from '../Keyboard'
import * as math from 'mathjs'

export default class App extends React.Component {
  state = {
    displayedValue: '0',
    firstOperand: 0,
    secondOperand: 0,
    result: 0,
    operator: null,
    operatorJustSet: false
  }  
  receiveSymbol = (val) => {
    console.log('receiving symbol')
    this.setState({ lastReceivedSymbol: val }, () => {
        this.inputParser(val)
    })
  }
 
  setOperator = (val) => {
    console.log('setting operator')
      if (val==='÷'){
        val = '/'
      }
      if (val==='×'){
        val = '*'
      }
      this.setState({ operator: val, operatorJustSet: true}, () => {
        if(this.state.operator) {
          this.setFirstOperand(parseFloat(this.state.displayedValue))
        }
      })
    }
  toggleSign = () => {
    console.log('toggling sign')
    this.setState({ displayedValue: (math.evaluate(this.state.displayedValue*-1))}, () => {})
  }
  
  setFirstOperand = (val) => { 
    console.log('setting first operand')
    this.setState({ firstOperand: val}, () => {})
  }

  setSecondOperand = (val) => { 
    console.log('setting second operand')
    this.setState({ secondOperand: val}, () => {})
  }

  calculate = () => {
    console.log('calculating')
    this.setState({ secondOperand: this.state.displayedValue}, () => {
      const { firstOperand, operator, secondOperand } = this.state
      let expression = firstOperand + operator + secondOperand
      this.setState({ result: (math.evaluate(expression))}, () => {
        this.setState({ displayedValue:this.state.result}, () => {})
      })
    })
  }

  calculatePercentage = () => {
    console.log('calculating percentage')
    this.setState({ secondOperand: this.state.displayedValue}, () => {
      const expression = this.state.firstOperand+this.state.operator+(this.state.firstOperand/100*this.state.secondOperand)
          this.setState({ displayedValue: (math.evaluate(expression))}, () => {})         
    })
  }

  appendDisplay = (val) => {
    console.log('appending display')
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
    console.log('setting point')
    if(!this.state.displayedValue.includes('.')) {
      this.setState({ displayedValue: this.state.displayedValue+'.'}, () => {})
    }
  }

  clearDisplay = (val) => {
    console.log('clearing display')
    this.setState({ displayedValue:val,operatorJustSet:false}, () => {})
  }

  clearAll = () => {
    console.log('clearing all')
    this.setState({ displayedValue: '0', firstOperand: 0, 
      secondOperand: 0, operator:null, operatorSet: 0}, () => {})
  }

  inputParser = (val) => {
    console.log('parsing input')
    if(val === 'AC' || val === 'Delete') {
        this.clearAll()
    }
    else if(val === 'Backspace') {
      let displayed = this.state.displayedValue
      if (displayed.length > 1) {
        this.setState({ displayedValue: this.state.displayedValue.substr(0, this.state.displayedValue.length-1)}, () => {
        })
      }
      else {
        this.clearAll()
      }
    }
    else if(val === '.') {
      this.setPoint()
    }
    else if(val === '±') {
      this.toggleSign()
    }
    else if(val === '%') {
      this.calculatePercentage()
    }
    else if(val === '=' || val==='Enter') {
      if(this.state.displayedValue === '0' && this.state.operator==='/') {
        this.clearAll()
        alert('Divide by zero error');
      }
      else this.calculate()
    }
    else if(/[0-9]/.test(val)) {
      this.appendDisplay(val)
    }
    else if('+-÷×/*'.includes(val)) {
      this.setOperator(val)
    }
    else {}
  }

  render() {
    let sendToDisplay = this.state.displayedValue
    sendToDisplay = parseFloat(sendToDisplay)
    sendToDisplay = +sendToDisplay.toFixed(10)
    return (
      <MainPlate tabIndex={0}>
        <Display value={sendToDisplay} />
        <Keyboard onNumberClick={this.receiveSymbol} />
      </MainPlate>
    )
  }
}




