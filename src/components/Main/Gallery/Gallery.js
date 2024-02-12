import React from 'react';
import '../../../components/Main/Gallery/Gallery.css';
import River from '../../../images/River.png';
import Heart from '../../../images/Heart.png';
import lake from '../../../images/lake.png';
import tracKs from '../../../images/tracks.png';
import cave from '../../../images/cave.png';
import flowers from '../../../images/flowers.png';

const galleryImages = [
  {
    src: River,
    alt: 'Помощь при переходе через реку',
    title: 'Картинка 1'
  },
  {
    src: Heart,
    alt: 'Каменное сердце',
    title: 'Картинка 2'
  },
  {
    src: lake,
    alt: 'Зимнее озеро',
    title: 'Картинка 3'
  },
  {
    src: tracKs,
    alt: 'Следы медведя и человека',
    title: 'Картинка 4'
  },
  {
    src: cave,
    alt: 'Пещера',
    title: 'Картинка 5'
  },
  {
    src: flowers,
    alt: 'Камчатские цветы',
    title: 'Картинка 6'
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="gallery-title">Мы любим путешествовать</h2>
      <div className="image-container">
        {galleryImages.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.src} alt={image.alt} className="image" />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;