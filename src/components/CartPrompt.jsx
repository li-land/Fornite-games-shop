import React, { useEffect, useContext } from "react";
import { GoodsContext } from "../context";

export function CartPrompt() {
  const { namePrompt, closePrompt } = useContext(GoodsContext);

  useEffect(() => {
    const timerId = setTimeout(closePrompt, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [namePrompt]);

  return (
    <div className="prompt">
      <div className="prompt__content">{namePrompt} добавлен(a) в корзину</div>
    </div>
  );
}
