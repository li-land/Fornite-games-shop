import React, { useContext } from "react";
import { GoodsContext } from "../context";

export function Good(props) {
  const { mainId, displayName, displayType, displayDescription } = props;

  const price = props.price.regularPrice;
  const displayAssets = props.displayAssets[0].background;

  const { addtoCart } = useContext(GoodsContext);

  return (
    <div className="page__card card">
      <div className="card__item">
        <div className="card__image">
          <img src={displayAssets} alt={displayName} loading="lazy" />
        </div>
        <div className="card__content">
          <div className="card__title">{displayName}</div>
          <div className="card__type">{displayType}</div>
          <div className="card__decription">{displayDescription}</div>

          <div className="card__price">{price} руб.</div>
          <button
            className="card__button"
            onClick={() =>
              addtoCart({ mainId, displayName, price, displayAssets })
            }
          >
            + в корзину
          </button>
        </div>
      </div>
    </div>
  );
}
