import React, { useEffect } from "react";

export function CartPrompt(props) {
  const { displayName = "", closePrompt = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closePrompt, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [displayName]);

  return (
    <div className="prompt">
      <div className="prompt__content">{displayName} добавлен(a) в корзину</div>
    </div>
  );
}
