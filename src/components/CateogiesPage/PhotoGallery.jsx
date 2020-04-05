import React from 'react';

import styles from '../../css/resources/CategoriesPage/photogallery.module.css';

const PhotoGallery = ({ GiftPhotoGallery }) => (
  <section className={styles.photoGalleryContainer}>
    <ul className={styles.giftsPhotoShowCase}>
      {GiftPhotoGallery.map((giftPhoto, index) => (
        <li>
          <figure className={styles.giftPhoto}>
            <img
              src={giftPhoto}
              key={index}
              alt="Gift"
            />
          </figure>
        </li>
      ))}
    </ul>
  </section>
);

export { PhotoGallery };