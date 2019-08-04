import React from "react"
import '../index.css'

class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keySymbol: ''};
      }
    
    render () {
        return (
            <button className="calcButton">{this.props.value}</button>
        )
    }
}
export default CalcButton