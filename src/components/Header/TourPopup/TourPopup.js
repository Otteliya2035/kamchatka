import React from 'react';
import { Link } from 'react-router-dom';
import './TourPopup.css';

function TourPopup({ tour, onClose, closeBurgerMenu }) {
  return (
    <div className={`tour-popup ${tour ? 'active' : ''}`} onMouseEnter={() => {}} onMouseLeave={onClose}>
      <div className="tour-popup-content">
        <ul className='tour-popup-list'>
          <li className='tour-popup-item'>
          <Link to="/tour/dostupnaya-rybalka" onClick={() => { onClose(); closeBurgerMenu && closeBurgerMenu(); }}>
              Доступная рыбалка
            </Link>
          </li>
          <li className='tour-popup-item'>
            <Link to="/tour/shiveluch-nizhniy" onClick={() => { onClose(); closeBurgerMenu && closeBurgerMenu(); }}>
              Шивелуч-Нижний
            </Link>
          </li>
          <li className='tour-popup-item'>
            <Link to="/tour/shiveluch-tolbachik-nizhniy" onClick={() => { onClose(); closeBurgerMenu && closeBurgerMenu(); }}>
              Шивелуч-Толбачик-Нижний
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default TourPopup;

