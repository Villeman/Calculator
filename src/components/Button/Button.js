import React from "react"
import './Button.css'

class CalcButton extends React.Component {
    constructor() {
        super();

        this.clickHandler = () => {
            console.log('Button pressed')
        };


        this.keyDownHandler = () => {
        };
    }
        render () {
        return (
            <button onClick={this.clickHandler} className="calcButton">
            {this.props.value}</button>
        )
    }
}
export default CalcButton