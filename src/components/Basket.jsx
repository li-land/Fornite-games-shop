import React from "react";
import { BasketItem } from "./BasketItem";

export function Basket(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    changeQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="basket">
      <div className="basket__container">
        <div className="basket__title">Корзина</div>
        <div
          className="basket__close"
          onClick={() => {
            handleCartShow();
            document.body.classList.remove("lock");
          }}
        >
          <span></span>
        </div>
        <ul className="basket__list">
          {order.length ? (
            order.map((item) => {
              return (
                <BasketItem
                  key={item.mainId}
                  {...item}
                  removeFromCart={removeFromCart}
                  changeQuantity={changeQuantity}
                />
              );
            })
          ) : (
            <li className="basket__empty">Товаров в корзине нет...</li>
          )}
        </ul>
        <div className="basket__total">
          <div className="basket__total-price">
            К оплате: <span>{totalPrice} руб.</span>
          </div>
          <button className="basket__button">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
