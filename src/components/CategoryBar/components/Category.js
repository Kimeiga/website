import React from 'react'
import '../../../styles/Category.css'

class Category extends React.Component {
  constructor(props){
    super(props)
  }

  onHover(){
    // Material UI Dropdown hover effect here
  }

  render(){
    let {name, percentageWidth, color, toggleActive} = this.props
    return (
      <div className='category' key={name} style={{width: percentageWidth, height: '100%', backgroundColor: color}} onClick={toggleActive}>
        <div className='percentage-count' style={{color: color, opacity: `${this.props.showPercentage ? 1 : 0}`}}>{percentageWidth} {name} blogs</div>
      </div>
    )
  }
}

export default Category
