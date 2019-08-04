import React from "react"
import CalcButton from '../components/Button.js'
import '../index.css'
class OperatorPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            };
      }
    renderButton (i) {
        return <CalcButton value={i}/>
    }
    render () {
        return (
            <div className="operatorPanel">
                {this.renderButton('÷')}
                {this.renderButton('×')}
                {this.renderButton('-')}
                {this.renderButton('+')}
                {this.renderButton('=')}
            </div>
        )
    }
}

export default OperatorPanel