import React from "react"
import '../index.css'

class MainPlate extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }
    
    render() {
        const {children} = this.props;
        return (
          <div className='mainPlate'>
              {children}
          </div>
        )
    }
}
export default MainPlate