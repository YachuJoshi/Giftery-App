import React, { useState } from 'react';

import styles from '../../css/resources/ProductsPage/productItems.module.css';

import { FaRegHeart, FaHeart } from 'react-icons/fa';

const ProductItem = (props) => {
  const [favourite, setFavourite] = useState(false);
  const ratingStarURL = [
    'https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_one_star_rating-26-512.png',
    'https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_two_star_rating-24-512.png',
    'https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_three_star_rating-23-512.png',
    'https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_four_star_rating-22-512.png',
    'https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_five_star_rating-21-512.png'
  ];
  const { product } = props;
  return (
    <li className={styles.productItem} key={product.name}>
      <figure className={styles.productImageContainer}>
        <img src={product.imageURL} alt="Product" />
        <figcaption>{product.name}</figcaption>
        {favourite ?
          <FaHeart
            className={styles.favIcon}
            onClick={() => setFavourite(!favourite)} /> :
          <FaRegHeart
            className={styles.favIcon}
            onClick={() => setFavourite(!favourite)} />
        }
      </figure>
      <div className={styles.productDeatils}>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}> NRP {Math.round(+product.price)} </p>
      </div>
    </li>
  )
};

export { ProductItem };