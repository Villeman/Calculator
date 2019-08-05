import React from "react"
import CalcButton from '../Button'
import './NumPad.css'

class NumPad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastSymbol: "0"
        };
    }
    receiveSymbol = (sym) => {
        this.setState({
            lastSymbol: sym
        }, function () {
            console.log(this.state.lastSymbol);
        });
    }
      renderButton (i) {
        return <CalcButton onNumberClicked = {this.receiveSymbol} key={'key-'+i} value={i}/>
    }


    numPadSymbols = ['0', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    numPadButtons = this.numPadSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })

    render () {
        return (
            <div onClick={this.props.onNumKeyPress} className="numPad">
              {this.numPadButtons}
            </div>
        )
    }
}
export default NumPad