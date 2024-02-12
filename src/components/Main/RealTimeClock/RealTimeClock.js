import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RealTimeClock.css';

const timeDifferenceInMs = 9 * 60 * 60 * 1000; // Разница в 9 часов

function RealTimeClock({ backgroundImage, location }) {
  const [currentMoscowTime, setCurrentMoscowTime] = useState(new Date());
  const [timeState, setTimeState] = useState({
    currentKamchatkaTime: 'default',
    currentMoscowTime: 'default',
  })

  // setTimeState((prev) => ({ ...prev, currentKamchatkaTime: 'new Time' }))
  // setTimeState(prev => {
  //   return {
  //     ...prev,
  //     currentMoscowTime: "new time"
  //   }
  // })
  const [currentKamchatkaTime, setCurrentKamchatkaTime] = useState(new Date(new Date().getTime() + timeDifferenceInMs));
  const [moscowWeather, setMoscowWeather] = useState(null);
  const [petropavlovskWeather, setPetropavlovskWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '1ecc6215f0cfe07a688ee632234ca4b5';

        // Запрос погоды в Москве
        // добавляем к запросу &lang=ru если хотим русскую локализацию
        const moscowResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${apiKey}&units=metric&lang=ru`);
        setMoscowWeather(moscowResponse.data);

        // Запрос погоды в Петропавловске-Камчатском
        const petropavlovskResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Petropavlovsk-Kamchatsky&appid=${apiKey}&units=metric&lang=ru`);
        setPetropavlovskWeather(petropavlovskResponse.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentMoscowTime(now);

      const kamchatkaTime = new Date(now.getTime() + timeDifferenceInMs);
      setCurrentKamchatkaTime(kamchatkaTime);
      fetchData();
    }, 1000);

    fetchData(); // Обновление данных о погоде при каждом тике часов

    return () => {
      clearInterval(intervalId);
    };
  }, [location]);

  const formatDateTime = (dateTime) => {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = dateTime.toLocaleDateString('ru-RU', options);
    const formattedTime = formattedDate.replace(' в', '');
    return `${formattedTime}`;
  };

  // const formattedTimeObj = {
  //   moscowFormattedTime: currentMoscowTime.toLocaleTimeString('ru-RU', {
  //     hour: 'numeric',
  //     minute: 'numeric',
  //   }),
  //   kamchatkaFormattedTime: currentKamchatkaTime.toLocaleTimeString('ru-RU', {
  //     hour: 'numeric',
  //     minute: 'numeric',
  //   })
  // } // todo: changing
  const moscowFormattedTime = currentMoscowTime.toLocaleTimeString('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
  });

  const kamchatkaFormattedTime = currentKamchatkaTime.toLocaleTimeString('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
  });

  const moscowFormattedDate = formatDateTime(currentMoscowTime);
  const kamchatkaFormattedDate = formatDateTime(currentKamchatkaTime);

  return (
    <div className="real-time-clock" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className='real-time-location'>
        {location}
        <br />
        {location === "Москва" ? <span className="time-text">{moscowFormattedTime}</span> : <span className="time-text">{kamchatkaFormattedTime}</span>}
        <br />
        <span className="date-text">{location === "Москва" ? moscowFormattedDate : kamchatkaFormattedDate}</span>
        <br />
        {moscowWeather && location === "Москва" && (
  <span className={`weather-text ${moscowWeather.weather[0].main.toLowerCase()}`}>
    {` ${moscowWeather.weather[0].description},  ${Math.round(moscowWeather.main.temp)} °C, Скорость ветра: ${moscowWeather.wind.speed} м/с, Влажность: ${moscowWeather.main.humidity}%`}
  </span>
)}
        {petropavlovskWeather && location === "Петропавловск-Камчатский" && (
          <span className={`weather-text ${petropavlovskWeather.weather[0].main.toLowerCase()}`}>
            {petropavlovskWeather.weather[0].description}, {Math.round(petropavlovskWeather.main.temp)} °C, Скорость ветра: {petropavlovskWeather.wind.speed} м/с, Влажность: {petropavlovskWeather.main.humidity}%
          </span>
        )}
      </p>
    </div>
  );
}

export default RealTimeClock;
