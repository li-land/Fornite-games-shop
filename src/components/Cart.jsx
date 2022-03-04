import React, { useContext } from "react";
import { GoodsContext } from "../context";
import cartIcon from "../icon/shopping-cart.png";

function Cart({ quantity = 0 }) {
  const { handleCartShow } = useContext(GoodsContext);

  const body = document.body;

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
