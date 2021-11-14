import React from 'react';
import s from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

function ImageGalleryItem({ source, description, id }) {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        src={source}
        alt={description}
        className={s.ImageGalleryItem__image}
      />
    </li>
  );
}

export { ImageGalleryItem };
