import React from 'react';

import styles from '../css/resources/ProductsPage/main.module.css';

import { Header } from '../components/ProductsPage/Header';
import { ProductItem } from '../components/ProductsPage/ProductItem';

import { Footer } from '../components/HomePage/Footer';

import { productDetails as products } from '../mock';

const ProductsPage = (props) => {

  console.log(products);
  return (
    <>
      <Header />
      <main className="section-main">
        <section className={styles.section__Products}>
          <div className={styles.center_Text}>
            <h2 className={styles.secondaryHeading}>Our Products!</h2>
          </div>
          {/* <div className="row"> */}
          <ul className={styles.productList}>
            {products.map(product => <ProductItem product={product} />)}
          </ul>
          {/* </div> */}
        </section>
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