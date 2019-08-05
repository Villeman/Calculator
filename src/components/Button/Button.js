import React from "react"
import './Button.css'

class CalcButton extends React.Component {
    
        

        render () {
        return (
            <button onClick = {() => this.props.onNumberClicked(this.props.value)} className="calcButton">
            {this.props.value}</button>
        )
    }
}
export default CalcButton