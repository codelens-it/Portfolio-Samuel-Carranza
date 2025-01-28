import React from 'react'
import PropTypes from 'prop-types';

const ItemTool = ({ img, title }) => {
  return (
    <div className='img-card'>
      <div className='img-container'>
        <img src={"/iconTools/"+img+".svg"} alt={title} className="img" />
      </div>
      <span className="img-title">{title}</span>
    </div>
  )
}

ItemTool.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string
}

export default ItemTool
