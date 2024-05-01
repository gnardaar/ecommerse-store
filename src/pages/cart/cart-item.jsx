import React ,{useContext} from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItems = (props) => {
  const { id, name, description, category, price, productImage } = props.data;
  const { cartItems,addToCart,removeFromCart,updateCartItemCount } = useContext(ShopContext);


  return (
    <div className="cartItem" >
      <img src={productImage} alt="" />
      <div className="description" > 
        <b>
          <p style={{marginBottom:'50px'}}>{name}</p>
        </b>
        <p>${price}</p>
        <div className="countHandler">
            <button onClick={()=>removeFromCart(id)}> - </button>
            <input style={{color:'white'}} value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
            <button onClick={()=>addToCart(id)}>+</button>
        </div>
            <div style={{marginRight:'20px' }} id="description">{description}</div>
      </div>
      
    </div>
  );
};
