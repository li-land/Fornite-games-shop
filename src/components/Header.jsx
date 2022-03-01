import React from "react";

const Header = () => {
  const scrollToPage = () => {
    const page = document.querySelector(".page");
    page.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">
          Интернет-магазин <span>Fortnite Games</span>
        </h1>
        <div className="header__subtitle">
          Отбивайся от монстров и зомби, с помощью оружия, уникальных персонажей
          и различных построек. Более 100+ видов оружия и персонажей каждый день
        </div>
        <button className="header__button" onClick={scrollToPage}>
          Перейти к покупкам
        </button>
      </div>
    </header>
  );
};
export { Header };
