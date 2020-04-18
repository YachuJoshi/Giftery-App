import React, { useState } from 'react';

import styles from '../css/resources/ProductsPage/main.module.css';
import cartModalStyles from '../css/resources/ProductsPage/cart.module.css';

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
  const [finalPrice, setFinalPrice] = useState([]);
  let cartArray = [];
  let totalPriceArray = [];

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

  const calcTotalPrice = (index, quantity, price) => {
    totalPriceArray = finalPrice;
    totalPriceArray.splice(index, 0, quantity * price);
    setFinalPrice(totalPriceArray)
  }

  console.log(finalPrice);

  return (
    <>
      <Header
        inProductPage={true}
        cartModalStatus={cartModalStatus}
        cartOnClick={setCartModalStatus}
      />

      <main className="section-main">

        <section className={styles.section__Products}>
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
                calcTotalPrice={calcTotalPrice}
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

              <h2 className={cartModalStyles.heading}>Your Cart </h2>

              <ul>
                {cart.map(product => (
                  <CartItem
                    key={product.name}
                    product={product}
                  // removeFromCart={removeFromCart}
                  // renderingFactor={renderingFactor}
                  // setRenderingFactor={setRenderingFactor}
                  />
                ))}
              </ul>
            </div>
          </section>
        }
      </main>

      <Footer
        footerItemList={[
          'About Us',
          'Blog',
          'Press',
          'iOS App',
          'Android App'
        ]} />
    </>
  );
}

export { ProductsPage };