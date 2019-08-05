import React from "react"
import CalcButton from '../Button'
import './NumPad.css'

class NumPad extends React.Component {
    constructor(props) {
        super(props);
        
        this.alertNumber = () => {
            console.log('Button pressed')
        }
        this.state = {
            };
      }
      renderButton (i) {
        return <CalcButton numberClick = {this.alertNumber} key={'key-'+i} value={i}/>
    }


    numPadSymbols = ['0', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    numPadButtons = this.numPadSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })

    render () {
        return (
            <div className="numPad">
              {this.numPadButtons}
            </div>
        )
    }
}
export default NumPad