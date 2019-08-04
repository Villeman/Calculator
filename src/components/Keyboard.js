import React from "react"
import OperatorPanel from '../components/OperatorPanel.js'
import ServicePanel from "./ServicePanel.js";
import NumPad from "./NumPad.js";
import '../index.css'
class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            };
      }
    render () {
        return (
            <div className="keyboard">
                <ServicePanel/>
                <NumPad/>
                <OperatorPanel/>
            </div>
        )
    }
}

export default Keyboard