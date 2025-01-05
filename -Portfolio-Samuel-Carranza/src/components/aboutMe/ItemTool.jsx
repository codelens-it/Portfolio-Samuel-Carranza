import React from 'react'
import PropTypes from 'prop-types';

const ItemTool = ({ img, title }) => {
  return (
    <div className='img-card'>
      <div className='img-container'>
        <img src={img} alt={title} className="img" />
      </div>
      <h3 className="img-title">{title}</h3>
    </div>
  )
}

ItemTool.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string
}

export default ItemTool
