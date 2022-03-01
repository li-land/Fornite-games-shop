import React from "react";

export function BasketItem(props) {
  const {
    mainId,
    displayName,
    displayAssets,
    price,
    quantity,
    removeFromCart = Function.prototype,
    changeQuantity = Function.prototype,
  } = props;

  return (
    <li className="basket__item">
      <ul className="basket__item-container item">
        <li className="item__title">
          Товар:
          <div className="item__icon">
            <img src={displayAssets} alt={displayName} />
          </div>
          <span>{displayName}</span>
        </li>
        <li className="item__quantity">
          Количество:{" "}
          <button
            className="item__btn"
            onClick={() => changeQuantity(mainId, 0)}
          >
            -
          </button>{" "}
          <span>{quantity}</span>
          <button
            className="item__btn"
            onClick={() => changeQuantity(mainId, 1)}
          >
            +
          </button>
        </li>
        <li className="basket__item-price">
          Стоимость: {price * quantity} руб.
        </li>
      </ul>
      <div className="basket__delete" onClick={() => removeFromCart(mainId)}>
        <span></span>
      </div>
    </li>
  );
}
