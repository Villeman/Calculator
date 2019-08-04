import React from "react"
import CalcButton from './Button.js'
import '../index.css'
class NumPad extends React.Component {
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
            <div className="numPad">
                {this.renderButton('0')}
                {this.renderButton('.')}
                {this.renderButton('1')}
                {this.renderButton('2')}
                {this.renderButton('3')}
                {this.renderButton('4')}
                {this.renderButton('5')}
                {this.renderButton('6')}
                {this.renderButton('7')}
                {this.renderButton('8')}
                {this.renderButton('9')}
                
            </div>
        )
    }
}

export default NumPad