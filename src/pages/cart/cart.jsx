import React,{useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from "../../context/shop-context";
import { CartItems } from "./cart-item";

export const Cart = () => {

  const  {  cartItems} = useContext(ShopContext)
  return (
    <div className='cart'>
      <h1 style={{color:'white'}}>Your Cart Items</h1>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !==0){
            return  <CartItems data={product} />
          }
        })}
      </div>
    </div>
  )
}


