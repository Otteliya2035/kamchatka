import React, { useState, useRef } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import BurgerMenu from '../../components/Header/BurgerMenu/BurgerMenu';
import TourPopup from '../../components/Header/TourPopup/TourPopup';
import './Header.css';

function Header() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const footerRef = useRef(null);
  const contactRef = useRef(null);

  const openPopup = (tour) => {
    setSelectedTour(tour);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedTour(null);
  };

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
   contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <h1 className="header__title">Камчатка тур</h1>
      <nav>
        <BurgerMenu openPopup={openPopup} />
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/">Главная</Link></li>
          <li className="nav-item" onMouseEnter={() => openPopup('tour')}>
            Туры на Камчатку
          </li>
          <li className="nav-item"><Link to="/tips">Советы туристам</Link></li>
          <li className="nav-item"><a href="#footer" onClick={scrollToFooter}>Контакты</a></li>
          <li className="nav-item"><a href="#contact" onClick={scrollToContact}>Заказ тура</a></li>
        </ul>
      </nav>
      {popupVisible && (
        <TourPopup tour={selectedTour} onClose={closePopup}  />
      )}
      <div ref={footerRef}></div>
      <div ref={contactRef}></div>
    </header>
  );
}
export default Header;


