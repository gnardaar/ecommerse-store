import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Minus,Plus } from "phosphor-react";

export const Product = (props) => {
  const { id, name, description, category, price, productImage } = props.data;
  const { addToCart,cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  
  const { removeFromCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
        <p>{category}</p>
        <p>{description}</p>
      </div>
      <div  id="actionBttns">
        <button id="addBttn" className="addToCartBttn" onClick={() => addToCart(id)}>
          <Plus className="plusBttn"/>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <button id="removeBttn" className="removeFromCartBttn" onClick={() => removeFromCart(id)}>
          

         <Minus className="minusBttn"/> Remove 
        </button>
      </div>
    </div>
  );
};
