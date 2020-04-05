import React from 'react';

import { Link } from '@reach/router';

import styles from '../../css/resources/HomePage/plans.module.css';

import { FaPencilAlt, FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";

class Plans extends React.Component {
  render() {
    return (
      <section className={styles.plansSection}>
        <div className="row">
          <h4 className={styles.plansHeading}> Getting Started Is Easier Than Ever! </h4>
          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="Type your email...."
              className={styles.plansSectionInputEmail}
              required
              onChange={
                event => this.props.parentCallBackForEmail(event.target.value)
              }
              onBlur={
                event => this.props.parentCallBackForEmail(event.target.value)
              }
            />
            <Link to="/main" className={styles.plansGetStartedBtn}> Get Started For Free! </Link>
          </div>
        </div>

        <div className="row">
          <div className="col span-1-of-3">
            <FaPencilAlt className={styles.plansSection__icons} />
            <h3> Sign Up {<> &amp; </>} Login </h3>
            <p align="justify" className={styles.plansSection__text}>
              It's as easy as this. Just sign up with the required contact informantion and start
              browsing now!
              </p>
          </div>

          <div className="col span-1-of-3">
            <FaSearch className={styles.plansSection__icons} />
            <h3> Search {<> &amp; </>} Select </h3>
            <p align="justify" className={styles.plansSection__text}>
              Search and browse through 500+ expensive and premium gifts from the store perfect for all ages.
              </p>
          </div>

          <div className="col span-1-of-3">
            <FiShoppingCart className={styles.plansSection__icons} />
            <h3> Order {<> &amp; </>} Payment </h3>
            <p align="justify" className={styles.plansSection__text}>
              Select your preferred gift and add it to your cart. Additional information about payment will be given
              accordingly.
              </p>
          </div>
        </div>

      </section>
    );
  }
}

export { Plans }