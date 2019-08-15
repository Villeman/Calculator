import React from "react"
import './Display.css'
import { Textfit } from 'react-textfit';

class Display extends React.Component {
    render () {
        return (
            <Textfit  className="displayValue" mode="single" max="55">{this.props.value}</Textfit>
        )
    }
}
export default Display