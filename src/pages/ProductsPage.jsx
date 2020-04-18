import React, { useState } from 'react';

import styles from '../css/resources/ProductsPage/main.module.css';

// import cartModalStyles from '../css/resources/ProductsPage/cart.module.css';

import { Header } from '../components/ProductsPage/Header';
import { ProductItem } from '../components/ProductsPage/ProductItem';

import { Footer } from '../components/HomePage/Footer';

import { productDetails as products } from '../mock';
import { useEffect } from 'react';

const ProductsPage = () => {
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

  useEffect(() => {

  }, [])

  console.log(cart);
  return (
    <>
      <Header />
      <main className="section-main">
        <section className={styles.section__Products}>
          <div className={styles.center_Text}>
            <h2 className={styles.secondaryHeading}>Our Products!</h2>
          </div>
          <ul className={styles.productList}>
            {products.map(product =>
              <ProductItem
                key={product.name}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartModalStatus={cartModalStatus}
                setCartModalStatus={setCartModalStatus}
                product={product}
              />)}
          </ul>
        </section>
        {/* <div className={cartModalStyles.cartModal}>
          <div className={cartModalStyles.cartModal__background}>
            <div className={cartModalStyles.cartModal__container}>

            </div>
          </div>
        </div> */}
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