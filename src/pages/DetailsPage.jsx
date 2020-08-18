import React, { useState } from "react";

import { NavigationBar } from "../components/MainPage/NavBar";
import { Testimonial } from "../components/HomePage/Testimonials";
import { Footer } from "../components/HomePage/Footer";

import styles from "../css/resources/DetailsPage/details.module.scss";

import { productDetails as products } from "../mock";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const DetailsPage = (props) => {
  const product = products[props.id - 1];
  const [quantity, setQuantity] = useState("");
  const [inCart, setInCart] = useState(false);

  return (
    <>
      <NavigationBar inProductPage={false} />
      <section className={styles.sectionProductDetails}>
        <div className="row">
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <img
                src={product.imageURL}
                alt="Gift"
                className={styles.productImage}
              />
            </div>
            <div className={styles.detailsContainer}>
              <h4 className={styles.productLabel}>
                {product.label.map((label, index) =>
                  index !== product.label.length - 1
                    ? `${label} / `
                    : `${label}`
                )}
              </h4>
              <h2 className={styles.productTitle}>{product.name}</h2>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>
                NPR{" "}
                {quantity === ""
                  ? Math.round(product.price)
                  : Math.round(quantity * product.price)}
              </p>
              <div className={styles.quantityAndCart}>
                <select
                  className={styles.selectQty}
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  onBlur={(event) => setQuantity(event.target.value)}
                >
                  <option hidden> Qty </option>
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                  <option> 4 </option>
                </select>
                <button
                  className={styles.productCartAdder}
                  onClick={() => {
                    setInCart(!inCart);
                  }}
                >
                  {inCart ? "Added To Cart" : "Add To Cart?"}
                </button>
              </div>
              <span className={styles.socialSites}>
                Liked It? Share it on:
                <ul className={styles.socialList}>
                  <li>
                    <FaFacebookF
                      style={{ color: "#3b5999" }}
                      className={styles.socialIcon}
                    />{" "}
                  </li>
                  <li>
                    <FaInstagram
                      style={{ color: "#e4405f" }}
                      className={styles.socialIcon}
                    />{" "}
                  </li>
                  <li>
                    <FaPinterestP
                      style={{ color: "#bd081c" }}
                      className={styles.socialIcon}
                    />
                  </li>
                  <li>
                    <FaTwitter
                      style={{ color: "#55acee" }}
                      className={styles.socialIcon}
                    />{" "}
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <Footer />
    </>
  );
};

export { DetailsPage };
