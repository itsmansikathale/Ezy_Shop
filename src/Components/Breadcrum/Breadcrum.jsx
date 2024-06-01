import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div classname = 'breadcrum'>
      HOME | SHOP | {product.category} |  {product.name}
    </div>
  )
}

export default Breadcrum
