import React, { useContext } from "react";
import { GoodsContext } from "../context";
import { Good } from "./Good";

export function Goods() {
  const { goods } = useContext(GoodsContext);

  return (
    <div className="page__goods">
      {goods.length ? (
        goods.map((good) => <Good key={good.mainId} {...good} />)
      ) : (
        <h2>Перезагрузите страницу....</h2>
      )}
    </div>
  );
}
