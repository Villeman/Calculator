import React from "react"
import './Keyboard.css'
import './NumPad.css'
import './ServicePanel.css'
import './OperatorPanel.css'
import CalcButton from '../Button'


class Keyboard extends React.Component {
    state = {
        lastPressedNum:0,
        lastPressedOperator:0
    }
    receiveSymbol = (val) => {
        this.setState({ lastPressedNum: val }, () => {
            this.props.onNumberClick(this.state.lastPressedNum)
        })
    }
    renderButton (i) {
        return <CalcButton onNumberClicked = {this.receiveSymbol} key={'key-'+i} value={i}/>
    }
    numPadSymbols = ['0', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    operatorSymbols = ['÷', '×', '-', '+', '=']
    serviceSymbols = ['AC', '±', '%']
    serviceButtons = this.serviceSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })
    operatorButtons = this.operatorSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })
    numPadButtons = this.numPadSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })

    
    render () {
        return (
            <div className="keyboard">
                <div className="servicePanel">{this.serviceButtons}</div>
                <div className="numPad">{this.numPadButtons}</div>
                <div className="operatorPanel">{this.operatorButtons}</div>
            </div>
        )
    }
}

export default Keyboard 