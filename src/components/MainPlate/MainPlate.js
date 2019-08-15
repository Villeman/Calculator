import React from "react"

class MainPlate extends React.Component {
      
    render() {
        const {children} = this.props;
        return (
          <div className='mainPlate' onKeyPress={this.props.clickKey}>
              {children}
          </div>
        )
    }
}
export default MainPlate