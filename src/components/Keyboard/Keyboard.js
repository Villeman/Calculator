import React from "react"
import './Keyboard.css'
import ServicePanel from '../ServicePanel'
import NumPad from '../NumPad'
import OperatorPanel from '../OperatorPanel'

class Keyboard extends React.Component {













    render () {
        return (
            <div className="keyboard">
                <ServicePanel/>
                    <NumPad />
                <OperatorPanel/>
            </div>
        )
    }
}

export default Keyboard 