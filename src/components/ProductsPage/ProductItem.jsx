/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import styles from '../../css/resources/ProductsPage/productItems.module.css';

import { FaRegHeart, FaHeart } from 'react-icons/fa';

const ProductItem = (props) => {
  const [favourite, setFavourite] = useState(false);
  const [inCart, setInCart] = useState(false);
  const { product, cartModalStatus, setCartModalStatus, addToCart, removeFromCart } = props;

  const updateCart = (cart, product) => {
    !cart ? addToCart(product) : removeFromCart(product);
  }

  return (
    <li className={styles.productItem} key={product.name}>
      <figure className={styles.productImageContainer}>
        <img src={product.imageURL} alt="Product" />
        <button
          className={styles.productCartAdder}
          onClick={() => {
            updateCart(inCart, product)
            setInCart(!inCart)
            setCartModalStatus(!cartModalStatus)
          }}
        >
          {inCart ? 'Added To Cart!' : 'Add To Cart?'}
        </button>
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