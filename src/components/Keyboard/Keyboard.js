import React from "react"
import './Keyboard.css'
import './NumPad.css'
import './ServicePanel.css'
import './OperatorPanel.css'
import CalcButton from '../Button'
import KeyHandler, { KEYDOWN } from 'react-key-handler';

class Keyboard extends React.Component {
    state = {
        lastPressedButton: 0
    }
    receiveSymbol = (val) => {
        this.setState({ lastPressedButton: val }, () => {
            this.props.onNumberClick(this.state.lastPressedButton)
        })
    }
    renderButton (i) {
        return <CalcButton onNumberClicked = {this.receiveSymbol} key={'key-'+i} value={i}/>
    }
    addKeyHandler = (keyValue) => {
        return <KeyHandler key={'key-'+keyValue} keyValue={keyValue} keyEventName={KEYDOWN} onKeyHandle={this.keyboardHandler} />
    }
    keyboardHandler = (event) => {
        this.receiveSymbol(event.key)
    }
    numPadSymbols = ['0', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    operatorSymbols = ['÷', '×', '-', '+', '=']
    serviceSymbols = ['AC', '±', '%']
    auxSymbols = ['Enter', '/', '*', 'Delete', 'Backspace']
    serviceButtons = this.serviceSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })
    operatorButtons = this.operatorSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })
    numPadButtons = this.numPadSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })
    keySymbols = [...this.numPadSymbols, ...this.operatorSymbols,...this.serviceSymbols, ...this.auxSymbols]
    keyHandlers = this.keySymbols.map((keySymbol)=>{
        return this.addKeyHandler(keySymbol)
    })
    render () {
        return (
            <div className="keyboard">
                {this.keyHandlers}
                <div className="servicePanel">{this.serviceButtons}</div>
                <div className="numPad">{this.numPadButtons}</div>
                <div className="operatorPanel">{this.operatorButtons}</div>
            </div>
        )
    }
}

export default Keyboard 