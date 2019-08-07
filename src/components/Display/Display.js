import React from "react"
import './Display.css'
import { Textfit } from 'react-textfit';
class Display extends React.Component {
 
    render () {
        return (
            <div className="displayArea" >
                <Textfit className="displayValue">{this.props.value}</Textfit>
            </div>
        )
    }
}
export default Display