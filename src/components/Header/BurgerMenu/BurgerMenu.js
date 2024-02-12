// Ваш компонент BurgerMenu
import React, { useState } from 'react';
import "../../Header/BurgerMenu/BurgerMenu.css";

const BurgerMenu = ({ openPopup }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`} >
      <button className="burger-menu__button" onClick={toggleMenu}>
        <div className="burger-menu__icon">
          <div className="burger-menu__bar"></div>
          <div className="burger-menu__bar"></div>
          <div className="burger-menu__bar"></div>
        </div>
      </button>
      <button className="burger-menu__close-button" onClick={toggleMenu}></button>
      <div className="burger-menu__content">
        <nav className="burger-menu__nav">
          <ul className="burger-menu__list">
            <li className="burger-menu__item"><a href="/">Главная</a></li>
            <li
  className="burger-menu__item"
  onMouseEnter={() => openPopup('tour')}
>
  <a href="/tours" >Туры на Камчатку</a>
</li>
            <li className="burger-menu__item"><a href="/tips">Советы туристам</a></li>
            <li className="burger-menu__item"><a href="/contacts">Контакты</a></li>
            <li className="burger-menu__item"><a href="/order">Заказ тура</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;





