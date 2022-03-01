import React from "react";
import { Good } from "./Good";

export function Goods(props) {
  const { goods = [], addtoCart = Function.prototype } = props;

  return (
    <div className="page__goods">
      {goods.length ? (
        goods.map((good) => (
          <Good key={good.mainId} {...good} addtoCart={addtoCart} />
        ))
      ) : (
        <h2>Ничего нет</h2>
      )}
    </div>
  );
}
