import React, { useState } from "react";

import styles from "../../css/resources/ProductsPage/cart.module.scss";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const CartItem = (props) => {
  const { product } = props;
  const [productQuantity, setProducQuantity] = useState(1);

  return (
    <li key={product.name}>
      <figure className={styles.productContainer}>
        <img src={product.imageURL} alt="Product" />
        <div className={styles.productDetailsContainer}>
          <p className={styles.productName}>{product.name}</p>
          <p className={styles.productDescription}>{product.description}</p>
          {/* <span
            className={styles.removeItem}
            onClick={() => {
              removeFromCart(product)
              setRenderingFactor(!renderingFactor)
            }}
          >Remove</span> */}
        </div>
        <div className={styles.priceContainer}>
          <p className={styles.productPrice}>
            NPR {productQuantity * Math.round(+product.price)}
          </p>

          {productQuantity === 1 ? (
            <IoIosArrowUp className={styles.reduceQuantityButton} />
          ) : (
            <IoIosArrowUp
              className={styles.reduceQuantityButton}
              onClick={() => {
                setProducQuantity((productQuantity) => productQuantity - 1);
              }}
            />
          )}

          <p className={styles.productQuantity}>{productQuantity}</p>
          <IoIosArrowDown
            className={styles.addQuantityButton}
            onClick={() => {
              setProducQuantity((productQuantity) => productQuantity + 1);
            }}
          />
        </div>
      </figure>
    </li>
  );
};

export { CartItem };
