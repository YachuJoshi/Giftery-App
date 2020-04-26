import React, { useState } from 'react';

import styles from '../css/resources/ProductsPage/main.module.scss';
import cartModalStyles from '../css/resources/ProductsPage/cart.module.scss';

import { Header } from '../components/ProductsPage/Header';
import { ProductItem } from '../components/ProductsPage/ProductItem';
import { CartItem } from '../components/ProductsPage/CartItem';
import { Footer } from '../components/HomePage/Footer';

import { IoMdClose } from 'react-icons/io';

import { productDetails as products } from '../mock';

const ProductsPage = () => {
  const [renderingFactor, setRenderingFactor] = useState(false);
  const [cartModalStatus, setCartModalStatus] = useState(false);
  const [cart, setCart] = useState([]);
  let cartArray = [];

  const addToCart = (product) => {
    cartArray = cart;
    cartArray.push(product);
    setCart(cartArray);
  }

  const removeFromCart = (product) => {
    cartArray = cart;
    let indexOfProduct = cartArray.indexOf(product)
    cartArray.splice(indexOfProduct, 1);
    setCart(cartArray);
  }

  return (
    <>
      <Header
        inProductPage={true}
        cartModalStatus={cartModalStatus}
        cartOnClick={setCartModalStatus}
      />

      <main className="section-main">

        <section id="product-section" className={styles.section__Products}>
          <div className={styles.center_Text}>
            <h2 className={styles.secondaryHeading}>Our Products!</h2>
          </div>
          <ul className={styles.productList}>
            {products.map(product =>
              <ProductItem
                key={product.name}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartModalStatus={cartModalStatus}
                setCartModalStatus={setCartModalStatus}
                renderingFactor={renderingFactor}
                setRenderingFactor={setRenderingFactor}
              />)}
          </ul>
        </section>

        {cartModalStatus &&
          <section className={cartModalStyles.cartModal}>
            <div className={cartModalStyles.cartModal__container}>
              <IoMdClose
                className={cartModalStyles.closeButton}
                onClick={() => setCartModalStatus(false)}
              />

              <h2 className={cartModalStyles.heading}>Your Cart</h2>

              <ul>
                {cart.map(product => (
                  <CartItem
                    key={product.name}
                    product={product}
                  />
                ))}
              </ul>
            </div>
          </section>
        }
      </main>

      <Footer />
    </>
  );
}

export { ProductsPage };