import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { GoodsContext } from "../context";
import { Preloader } from "./Preloader";
import { Goods } from "./Goods";
import { Cart } from "./Cart";
import { Basket } from "./Basket";
import { CartPrompt } from "./CartPrompt";

const Main = () => {
  const { loading, order, isCartShow, namePrompt, setGoods } =
    useContext(GoodsContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
  }, []);

  return (
    <main className="page">
      <div className="page__container">
        <Cart quantity={order.length} />
        {loading ? <Preloader /> : <Goods />}
        {isCartShow && <Basket />}
        {namePrompt && <CartPrompt />}
      </div>
    </main>
  );
};

export { Main };
