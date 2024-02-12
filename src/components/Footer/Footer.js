import React from 'react';
import '../../components/Footer/Footer.css'
import logo from '../../images/logo.svg'
import phone from '../../images/phone.svg'
function Footer() {
  return (
    <footer className='footer' id='footer'>
      <div className="footer__container">
        <img src={logo} alt="Логотип компании" className='footer__logo' />
        <h3 className='footer__title'>Камчатка тур</h3>
      </div>
      <div className="footer__contact">
        <img src={phone} className="phone__img"></img>
        <p className='footer__phone'>Телефон: +7 (123) 456-7890</p>
      </div>
    </footer>
  );
}

export default Footer;