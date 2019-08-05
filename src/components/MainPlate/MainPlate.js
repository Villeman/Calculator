import React from "react"

class MainPlate extends React.Component {
      
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