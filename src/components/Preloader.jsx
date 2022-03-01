import React from "react";
import "../scss/Preloader.scss";

export function Preloader() {
  return (
    <div className="preloader__container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
