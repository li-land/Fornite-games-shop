import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { Goods } from "./Goods";
import { Cart } from "./Cart";
import { Basket } from "./Basket";
import { CartPrompt } from "./CartPrompt";

const Main = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [namePrompt, setNamePrompt] = useState("");

  const addtoCart = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setNamePrompt(item.displayName);
  };

  const removeFromCart = (id) => {
    const newOrder = order.filter((item) => item.mainId !== id);
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const changeQuantity = (id, bool) => {
    const newOrder = order.map((item) => {
      if (item.mainId === id) {
        if (bool) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return {
            ...item,
            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
          };
        }
      } else {
        return {
          ...item,
        };
      }
    });
    setOrder(newOrder);
  };

  const closePrompt = () => {
    setNamePrompt("");
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="page">
      <div className="page__container">
        <Cart quantity={order.length} handleCartShow={handleCartShow} />
        {loading ? (
          <Preloader />
        ) : (
          <Goods goods={goods} addtoCart={addtoCart} />
        )}
        {isCartShow && (
          <Basket
            order={order}
            handleCartShow={handleCartShow}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
          />
        )}
        {namePrompt && (
          <CartPrompt displayName={namePrompt} closePrompt={closePrompt} />
        )}
      </div>
    </main>
  );
};

export { Main };
