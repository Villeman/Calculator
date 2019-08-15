import React from "react"
import './Button.css'

class CalcButton extends React.Component {
    onButtonClick =() => this.props.onNumberClicked(this.props.value)

        render () {
        return (
            <button onClick = {this.onButtonClick} className="calcButton">
            {this.props.value}</button>
        )
    }
}
export default CalcButton