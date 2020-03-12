import React from 'react';

import { FaPencilAlt, FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";

class PlansComponent extends React.Component {
  render() {
    return (
      <section className="plans-section">
        <div className="row">
          <h4> Getting Started Is Easier Than Ever! </h4>
          <div className="row">
            <input type="email"
              name="email"
              placeholder="Type your email...."
              className="plans-section--input-email"
              required
              onChange={
                event => this.props.parentCallBackForEmail(event.target.value)
              }
              onBlur={
                event => this.props.parentCallBackForEmail(event.target.value)
              }
            />
            <a class="plans--get-startedBtn" href="#getStarted"> Get Started For Free! </a>
          </div>
        </div>

        <div className="row">
          <div class="col span-1-of-3 box">
            <FaPencilAlt className="plans-section__icons" />
            <h3> Sign Up {<> &amp; </>} Login </h3>
            <p align="justify" className="plans-section__text">
              It's as easy as this. Just sign up with the required contact informantion and start
              browsing now!
              </p>
          </div>

          <div class="col span-1-of-3 box">
            <FaSearch className="plans-section__icons" />
            <h3> Search {<> &amp; </>} Select </h3>
            <p align="justify" className="plans-section__text">
              Search and browse through 500+ expensive and premium gifts from the store perfect for all ages.
              </p>
          </div>

          <div class="col span-1-of-3 box">
            <FiShoppingCart className="plans-section__icons" />
            <h3> Order {<> &amp; </>} Payment </h3>
            <p align="justify" className="plans-section__text">
              Select your preferred gift and add it to your cart. Additional information about payment will be given
              accordingly.
              </p>
          </div>
        </div>

      </section>
    );
  }
}

export { PlansComponent }