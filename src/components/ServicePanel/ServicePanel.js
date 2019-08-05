import React from "react"
import CalcButton from '../Button'
import './ServicePanel.css'
class ServicePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            };
      }
    renderButton (i) {
        return <CalcButton key={'key-'+i} value={i}/>
    }
    operatorSymbols = ['AC', '±', '%']
    operatorButtons = this.operatorSymbols.map((symbol)=> {
        return this.renderButton(symbol)
    })
  
    render () {
        return (
            <div className="servicePanel">
              {this.operatorButtons}
            </div>
        )
    }
}

export default ServicePanel