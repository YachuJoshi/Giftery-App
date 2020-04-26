import React, { useState } from 'react';
import { Link } from '@reach/router';

import styles from '../../css/resources/ProductsPage/productItems.module.scss';

import { FaRegHeart, FaHeart } from 'react-icons/fa';

const ProductItem = (props) => {
  const [favourite, setFavourite] = useState(false);
  const [inCart, setInCart] = useState(false);
  const {
    product,
    setCartModalStatus,
    renderingFactor,
    setRenderingFactor,
    addToCart,
    removeFromCart
  } = props;

  const updateCart = (cart, product) => {
    !cart ? addToCart(product) : removeFromCart(product);
  }

  return (
    <li className={styles.productItem} key={product.name}>
      <figure className={styles.productImageContainer}>
        <Link to={`/details/${product.id}`} >
          <img src={product.imageURL} alt="Product" />
        </Link>
        <button
          className={styles.productCartAdder}
          onClick={() => {
            updateCart(inCart, product)
            setInCart(!inCart)
            setCartModalStatus(true)
            setRenderingFactor(!renderingFactor)
          }}
        >
          {inCart ? 'Remove From Cart?' : 'Add To Cart?'}
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
        <p className={styles.productPrice}> NPR {Math.round(+product.price)} </p>
      </div>
    </li >
  )
};

export { ProductItem };