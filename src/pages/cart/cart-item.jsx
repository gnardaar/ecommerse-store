import React from 'react'

export const CartItems = (props) => {
  const { id, name, description, category, price, productImage } = props.data;
    
  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className='description'>
            <b>
                <p>{name}</p>
                <p>${price}</p>
            </b>
        </div>
    </div>
  )
}
