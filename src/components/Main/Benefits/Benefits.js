import React from 'react';
import '../Benefits/Benefits.css'
import Volcano from '../../../images/Volcano.svg'
import ship from '../../../images/ship.svg'
import tree from '../../../images/tree.svg'
import fish from '../../../images/fish.svg'

function Benefits() {
  
  const benefitsData = [
    { image: Volcano, alt: "Вулкан", subtitle: "Турбаза находится в труднодоступном живописном месте." },
    { image: ship, alt: "Корабль", subtitle: "Увлекательный и незабываемый путь до турбазы." },
    { image: tree, alt: "Дерево", subtitle: "Уникальные природные красоты." },
    { image: fish, alt: "Рыба", subtitle: "Разнообразие рыболовных водоемов." }
  ];

  return (
    <section className="benefits">
      <h2 className="benefits__title">Почему выбирают наши туры.</h2>
      <ul className="benefits__list">
        {benefitsData.map((item, index) => (
          <li className="benefits__item" key={index}>
            <div className="benefits__item-content">
              <img className='benefits__image' src={item.image} alt={item.alt} />
              <p className='benefits__subtitle'>{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Benefits