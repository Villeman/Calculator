import React from "react"
import './Display.css'

class Display extends React.Component {
    state = {
        displayedValue: 0
    }
    
    render () {
        return (
            <div className="displayArea">
                <p className="displayValue">{this.props.displayedValue}</p>
            </div>
        )
    }
}
export default Display