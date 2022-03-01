import React from "react";
import cartIcon from "../icon/shopping-cart.png";

function Cart(props) {
  const body = document.body;
  const { quantity = 0, handleCartShow = Function.prototype } = props;
  return (
    <div
      className="cart"
      onClick={() => {
        handleCartShow();
        if (!body.classList.contains("lock")) {
          body.classList.add("lock");
        } else {
          body.classList.remove("lock");
        }
        console.log(document.body.style);
      }}
    >
      <div className="cart__icon">
        <img src={cartIcon} alt="Корзина" />
      </div>
      {quantity ? (
        <div className="cart__quantity">{quantity}</div>
      ) : (
        <div className="cart__quantity">0</div>
      )}
    </div>
  );
}

export { Cart };
