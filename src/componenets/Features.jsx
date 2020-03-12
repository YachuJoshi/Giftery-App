import React from 'react';

import { IoMdInfinite, IoMdThumbsUp } from "react-icons/io";
import { GiRunningNinja } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";

const FeatureComponent = () => {
  return (
    <section className="features-section">
      <div className="row">
        <h2> Delivering Gifts In Nepal Since 2016! </h2>
        <p align="justify" className="features-section__heading-text">
          Send personalized gifts for every occasion and recipient. Thousands of expertly
          personalized unique gifts and ideas. Fast Shipping + Free Personalization!
            </p>
      </div>

      <div class="row">
        <div class="col span-1-of-4 box">
          <IoMdInfinite className="features-section__icons" />
          <h3> Anytime {<> &mdash; </>} Anywhere </h3>
          <p align="justify" className="features-section__text">
            Never go out for gifts again! We really mean that. Our subscription plans include up to 365 days/year coverage.
            You can also choose limited presents to order more flexibly if that's your style.
              </p>
        </div>

        <div class="col span-1-of-4 box">
          <GiRunningNinja className="features-section__icons" />
          <h3> Fast Delivery System </h3>
          <p align="justify" className="features-section__text">
            You're only twenty minutes away from your precious gifts delivered right to your home. We ensure that you're
            100% happy with your decision.
              </p>
        </div>

        <div class="col span-1-of-4 box">
          <IoMdThumbsUp className="features-section__icons" />
          <h3> Easy Resolution </h3>
          <p align="justify" className="features-section__text">
            We have open complaint resolution meaning that we're free to hear and take feedbacks from our customers. We are
            also open to any sort of suggestions you'd like us to feature in the upcoming days.
              </p>
        </div>

        <div class="col span-1-of-4 box">
          <FiShoppingCart className="features-section__icons" />
          <h3> Order Anything </h3>
          <p align="justify" className="features-section__text">
            We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our
            shopping list containing over thousands of precious gifts. It's up to you!
              </p>
        </div>

      </div>

    </section>
  );
}

export { FeatureComponent }