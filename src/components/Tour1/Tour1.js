import React from "react";
import "../Tour1/Tour1.css";
import bear_by_river from "../../images/bear_by_river.png";
import bear_in_river from "../../images/bear_in_river.png";
import compass from "../../images/compass.png";
import bears from "../../images/bears.png";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
function Tour1() {
  return (
    <div className="fishing">
      <h2 className="tour__name">Доступная рыбалка (включен трансфер)</h2>
      <h3 className="tour-details">Программа тура</h3>
      <p className="fishing__subtitle_describe">
        Путешествие начинается в Петропавловске-Камчатском (Елизово), куда вам
        нужно добраться самостоятельно. Мы готовы помочь с бронированием
        гостиницы, хостела, при необходимости оставьте комментарий в заявке.
      </p>
      <div className="fishing__container">
        <div className="fishing__wrapper_one">
          <h3 className="tour__day_title">День 1: Знакомство</h3>
          <p className="fishing__wrapper_subtitle">
            После встречи в аэропорту вас отвезут в г. Елизово. Вы посетите
            супермаркет. Предлагаемое размещение на базе Hostel Park.
            <a
  className="tour__link"
  href="https://www.tripadvisor.ru/Hotel_Review-g670596-d12406378-Reviews-Hostel_Park-Yelizovo_Kamchatka_Krai_Far_Eastern_District.html"
  target="_blank">
  https://www.tripadvisor.ru/Hotel_Review-g670596-d12406378-Reviews-Hostel_Park-Yelizovo_Kamchatka_Krai_Far_Eastern_District.html
</a>
            В вашем номере будут 2-3 кровати, стол, стулья, шкаф, телевизор и
            собственная ванная комната (душ). Возможно размещение в хостеле. В
            этот день проживание оплачивается самостоятельно. Рекомендуем
            заранее забронировать номера. Возможно размещение в других отелях.
          </p>
        </div>
        <img src={bear_by_river} className='fishing__image__bear' alt="Медведь у реки" />
        <div className="fishing__wrapper_two">
          <h3 className="tour__day_title">День 2: Длительный переезд</h3>
          <p className="fishing__wrapper_subtitle">
            (10-12 часов в пути, в зависимости от дороги и количества остановок)
            Подъем, самостоятельный завтрак (перекус). Выезд в 07.30. По пути мы
            остановимся в п. Сокоч, где вы отведаете, уже ставшие
            достопримечательностью, знаменитые Сокочинские пирожки (оплачивается
            самостоятельно 150 рублей). Далее мы остановимся в п. Мильково
            (время в пути около 4 часов), где пообедаем (стоимость обеда от 400
            рублей на человека – в зависимости от аппетита. Оплачивается
            самостоятельно). Далее выдвигаемся в п. Усть-Камчатск (по пути
            сделаем пару технических остановок). По прибытию на определенный
            участок дороги мы перегрузимся на катер (возможен вездеход или
            квадроциклы – в зависимости от времени года и погодных условий) и
            выдвинемся на базу. Вечером Вы приедете на базу, разместитесь в доме
            охотника, либо хостеле, поужинаете и отдохнете.
          </p>
        </div>
        <img className="fishing__img_bear" src={bear_in_river} alt="Медведь в реке" />
        <div className="fishing__wrapper_three">
          <h3 className="tour__day_title">
            День 3 – 5 Акклиматизация, подготовительные мероприятия, Рыбалка
          </h3>
          <p className="fishing__wrapper_subtitle">
            В эти дни мы будем совершать радиальные перемещения по берегу и
            рекам «Радуга», «Камчатка». Используемый транспорт – лодки, бот,
            автомобиль (частично), пешком. Опытный инструктор-проводник доставит
            вас в самые рыбные места, принимая во внимание погодные условия и
            сезон. Каждый день нашими соседями будут медведи. Вы получите
            подробный инструктаж по мерам безопасности и правилам поведения. В
            группе сопровождения будет все необходимое для безопасного отдыха и
            защиты. Каждый день мы будем возвращаться в базовый лагерь, однако
            есть вероятность установки бивака на реке. Виды рыб, предполагаемых
            к вылову: кижуч, микижа, горбуша, нерка, голец, чавыча, сазан,
            карась. Во время рыбалки вы можете понаблюдать за дикими животными и
            птицами. В июле-августе на берегах реки медведи охотятся на рыбу,
            идущую на нерест. А в небе можно встретить белоплечих орланов. Вы
            можете посетить старинную Церковь Успения Пресвятой Богородицы (1864
            год), пройтись по уже еле заметным местам Нижне-Камчатского острога.
            Вечером (или в течение дня) вы можете собрать грибы-ягоды (при
            наличии дикоросов и свободного проводника), а во время ужина
            узнаете, как у нас готовят икру-пятиминутку (при вылове самки).
            Также вы можете взять в аренду резиновую лодку для самостоятельного
            перемещения в пределах реки Радуга. В базовом лагере предусмотрена
            баня, беседка На базе связь только экстренная (спутниковая)
          </p>
        </div>
        <div className="fishing__wrapper_for">
          <h3 className="tour__day_title">
            День 6: Возвращение домой (длительный переезд)
          </h3>
          <p className="fishing__wrapper_subtitle">
            Ранний подъем (05.00-06.00) После завтрака на катере (возможен
            вездеход или квадроциклы – в зависимости от времени года и погодных
            условий) перемещаемся к «отправной точке». Далее на автомобиле Урал,
            Камаз или нашем автобусе вы отправитесь в г. Елизово (время в пути
            10-12 часов). Предполагаемое размещение в гостинице Hostel Park
            <a
  className="tour__link"
  href="https://www.tripadvisor.ru/Hotel_Review-g670596-d12406378-Reviews-Hostel_Park-Yelizovo_Kamchatka_Krai_Far_Eastern_District.html"
  target="_blank">
  https://www.tripadvisor.ru/Hotel_Review-g670596-d12406378-Reviews-Hostel_Park-Yelizovo_Kamchatka_Krai_Far_Eastern_District.html
</a>
            В вашем номере будут 2-3 кровати, стол, стулья, шкаф, телевизор и
            собственная ванная комната (душ). Возможно размещение в хостеле. В
            этот день проживание оплачивается самостоятельно. Рекомендуем
            заранее забронировать номера. Возможно размещение в других отелях.
          </p>
          <h3 className="tour__day_title">
            День 7: Рыбный рынок и выезд
          </h3>
          <p className="fishing__wrapper_subtitle">
            Вас отвезут на рыбный рынок. Вы сможете купить красную рыбу, икру,
            крабов и сувениры. Затем вас ждет трансфер в аэропорт и вылет домой.
          </p>
        </div>
        <img className="fishing__img_bears" src={bears} alt="Медведица с медвежатами" />
      </div>
      <h2 className="fishing__price">Стоимость тура (с человека)</h2>
     <ul className="fishing__price_list">
      <li> 5 человек и меньше - 103000</li>
        <li>7 человек - 85000</li>
       <li> 10 человек – 72000</li>
       <li> 14 человек – 60000 </li>
        </ul>
        <p className="fishing__price_describe">Оплата частями, без процентов. Первый взнос — 30% от
        стоимости с человека Второй взнос (перед началом тура) – остаточная
        стоимость
      </p>
      <div className="fishing__price_wrapper">
        <div className="fishing__wrapper">
          <h3 className="fishing__price_title"> В стоимость входит:</h3>
          <ol className="fishing__list">
           <li> питание (перекус) на активной части тура (2-7(завтрак) день)</li>
            <li>Услуги инструктора-проводника, на всей протяженности тура. </li>
            <li>Транспортные услуги (автобус, машина повышенной проходимости, лодки,
            бот). </li>
            <li> Баня (2 посещения – по 4 часа), походный душ, беседка,
            лобное место.</li>
          </ol>
        </div>
        <img className="fishing__image" src={compass} alt="Компас" />
        <div className="fishing__wrapper">
          <h3 className="fishing__price_title">
            В стоимость тура не входит:
          </h3>
          <ol className="fishing__list">
           <li> Авиа перелёт до Камчатки и обратно.</li>
            <li> Питание в дни переездов </li>
            (1,7,8 день)
            <li> Проживание в гостинице г. Елизово, г.
            Петропавловск-Камчатский</li>
          </ol>
        </div>
      </div>
      <h3 className="fishing__head"> Рекомендуемое снаряжение:</h3>
      <ol className="fishing__list">
        <li> легкий рюкзак (положить перекус, воду, ветровку, шапку и т.д.)</li>
        <li>высокие туристические ботинки (трекинговая обувь)</li>
        <li> сменная обувь (кроссовки),</li>
        <li> предметы личной гигиены, купальные принадлежности,</li>
        <li> куртка с капюшоном + лёгкая тёплая жилетка (пуховик),</li>
        <li>Термо белье</li>
        <li> свитер……флис,</li>
        <li> плащ - дождевик,</li>
        <li> очки солнцезащитные,</li>
        <li> головной убор,</li>
        <li> перчатки</li>
        <li> персональная аптечка,</li>
        <li> спрей от комаров, москитная сетка</li>
        <li> Спальный мешок (-5°С экстрим)</li>
        <li> Сапоги резиновые (заброды)</li>
        <li> Рыбацкие принадлежности.</li>
      </ol>
      <h2 className="fishing__nature_title">ДЛЯ КАЖДОЙ ГРУППЫ ПРОГРАММА ОГОВАРИВАЕТСЯ ОТДЕЛЬНО</h2>
      <p className="fishing__nature">
        Камчатка – горный регион, вытянутый с севера на юг и окруженный водами
        Тихого океана и Охотского моря. Погода здесь переменчива, и в разных
        районах разный микроклимат. Лучшими месяцами для летнего путешествия
        считаются июль и август. Средняя температура +10-16°С. В наиболее
        высоких частях гор есть ледники. Возможен дождь, на больших высотах и
        северных районах даже снег. В лесной зоне много комаров и мошки. В конце
        августа и сентябре важно учитывать пониженную температуру и возможность
        заморозков. Ориентируйтесь на все возможные погодные условия — от
        летнего зноя до сильного ветра с холодным осенним дождем и заморозками.
      </p>
      <ScrollToTopButton />
    </div>

  );
}
export default Tour1;
