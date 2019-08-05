import React from "react"
import CalcButton from '../Button'
import './OperatorPanel.css'
class OperatorPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            };
      }
    renderButton (i) {
        return <CalcButton key={'key-'+i} value={i}/>
    }
    operatorSymbols = ['÷', '×', '-', '+', '=']
    operatorButtons = this.operatorSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })
  
    render () {
        return (
            <div className="operatorPanel">
              {this.operatorButtons}
                
            </div>
        )
    }
}

export default OperatorPanel