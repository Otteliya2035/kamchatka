import React from 'react';
import '../../../components/Main/Flight/Flight.css';
import Moscow from '../../../images/MoscowAirport.png';
import Kamchatka from '../../../images/KamchatkaAirport.png';
import RealTimeClock from '../RealTimeClock/RealTimeClock';

function Flight() {
  return (
    <section className='flight'>
      <h2 className='flight__title'>Как добраться до Камчатки</h2>
      <div className='flight__container'>
        <RealTimeClock
          backgroundImage={Moscow} className="flight__image"
          location="Москва"
          timeDifference={9} // Разница во времени в часах
        />
        <div className="flight-info__time-difference">
          <p className='flight__name'>Как долететь</p>
          <div className='flight__links'>
          <a className='flight__linK' href="https://www.aviasales.ru/" target="_blank">Авиасейлс</a>
          <a className='flight__linK' href="https://www.aeroflot.ru/xx-ru" target="_blank">Аэрофлот</a>
          </div>
          <p className='flight__name'>Разница во времени:</p>
          <ul className='flight__list'>
            <li>Москва: +9 часов</li>
            <li>Новосибирск: +6 часов</li>
            <li>Хабаровск: +2 часа</li>
            <li>Екатеринбург: +7 часов</li>
          </ul>
        </div>
        <RealTimeClock
          backgroundImage={Kamchatka} className="flight__image"
          location="Петропавловск-Камчатский"
          timeDifference={9} // Разница во времени в часах
        />
      </div>
    </section>
  );
}

export default Flight;

