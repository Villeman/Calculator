import React from "react"
import './Button.css'

class CalcButton extends React.Component {
    
        clickHandler = () => {
            console.log('pow')
            console.log (this.props)
        }
        


        keyDownHandler = () => {
        };
    
        render () {
        return (
            <button onClick = {this.clickHandler} className="calcButton">
            {this.props.value}</button>
        )
    }
}
export default CalcButton