import React from "react"
import '../index.css'

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: 0};
      }
    
    render () {
        return (
            <div className="displayArea">
                <p className="displayValue">{this.state.displayValue}</p>
            </div>
        )
    }
}
export default Display