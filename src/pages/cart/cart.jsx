import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItems } from "./cart-item";
import "./cart.css";
import { Navigate, useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <h1 style={{ color: "white" }}>Your Cart Items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            subtotal: ${totalAmount}
          </p>
          <button onClick={() => navigate("/")}>continue shopping</button>
          <button>Check Out</button>
        </div>
      ) : (
        <h1>No items in the cart</h1>
      )}
    </div>
  );
};
