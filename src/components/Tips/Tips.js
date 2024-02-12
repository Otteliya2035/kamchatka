import React from 'react';
import '../../components/Tips/Tips.css'
import Header from '../Header/Header';
import fishinger from '../../images/fisinger.png'
import lava from '../../images/lava.png'
import grass from '../../images/grass.png'
function Tips() {
    return (
        <div className="tips-content">
          <div className="tips-header">
          <img className='tips__fishinger' src={fishinger} alt="Снаряжение" />
              <h1 className="tips-title">Советы туристам</h1>
              <p className='tips__list'>Рекомендуемое <br></br>снаряжение:</p>
            </div>
          <div className="tips-item">
            <img className='tips__lava' src={lava} alt="Застывшая лава" />
            <div className="tips-text">
              <p>Поход:</p>
              <ol>
                <li>рюкзак или дорожная сумка</li>
                <li>легкий рюкзак (положить перекус, воду, ветровку, шапку)</li>
                <li>свой спальный мешок</li>
                <li>высокие туристические ботинки (трекинговая обувь)</li>
                <li>сменная обувь (кроссовки)</li>
                <li>Трекинговые палки</li>
                <li>предметы личной гигиены, купальные принадлежности</li>
                <li>куртка с капюшоном + лёгкая тёплая жилетка (пуховик)</li>
                <li>свитер……флис</li>
                <li>плащ - дождевик</li>
                <li>очки солнцезащитные</li>
                <li>головной убор</li>
                <li>налобный фонарь</li>
                <li>перчатки</li>
                <li>персональная аптечка</li>
                <li>спрей от комаров</li>
              </ol>
            </div>
          </div>
        <img className='tips__grass' src={grass} alt="Травинка покрытая инеем" />
      </div>
    );
  }

  export default Tips;