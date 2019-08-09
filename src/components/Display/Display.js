import React from "react"
import './Display.css'

class Display extends React.Component {
    render () {
        return (
            <div className="displayArea" >
                <div className="displayValue">{this.props.value}</div>
            </div>
        )
    }
}
export default Display