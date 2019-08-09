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
    renderButton = arrayItem => {
        return <CalcButton onNumberClicked = {this.receiveSymbol} key={'key-'+arrayItem} value={arrayItem}/>
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
    
    renderNumPadButtons = () => this.numPadSymbols.map(this.renderButton)
    renderServiceButtons = () => this.serviceSymbols.map(this.renderButton)
    renderOperatorButtons = () => this.operatorSymbols.map(this.renderButton)
    keySymbols = [...this.numPadSymbols, ...this.operatorSymbols,...this.serviceSymbols, ...this.auxSymbols]
    keyHandlers = this.keySymbols.map((keySymbol)=>{
        return this.addKeyHandler(keySymbol)
    })
    render () {
        return (
            <div className="keyboard">
                {this.keyHandlers}
                <div className="servicePanel">{this.renderServiceButtons()}</div>
                <div className="numPad">{this.renderNumPadButtons()}</div>
                <div className="operatorPanel">{this.renderOperatorButtons()}</div>
            </div>
        )
    }
}

export default Keyboard 