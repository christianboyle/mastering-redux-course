import React from 'react'

const Product = ({ image, name }) => {
  return (
    <li className='product'>
      <img src={image} alt={name} className='product-img' />
      <div className='product-title'>{name}</div>
    </li>
  )
}

export default Product
