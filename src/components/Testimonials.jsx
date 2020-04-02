import React from 'react';

import styles from '../css/resources/testimonials.module.css';

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import customerPic1 from '../css/img/customer-1.jpg';
import customerPic2 from '../css/img/customer-2.jpg';
import customerPic3 from '../css/img/customer-3.jpg';

class TestimonialComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerImageIndex: 2,
      customerImages: [customerPic1, customerPic2, customerPic3],
      customerNames: ['Blake Lively', 'Kiernan Shipka', 'Camila Mendes'],
      blockquotes: [
        `This adorable shop is filled with delights and you will be spoilt for choice. 
      Prices are amazing and perfect for little ones to do some shopping with their pocket money.`,

        `I managed to get presents for them, for friends, family and even my dad! There truly is something for everyone 
      and the site is so welcoming and helpful. You must visit this little treasure trove as soon as possible!`,

        `Love this shop, always changing what's in there so there's always something new to catch your eye. Warm, 
      friendly welcome even when you take a pushchair in and fill the shop up!`
      ]
    }
  }

  renderCustomerImages = () => {
    const { customerImageIndex, customerImages } = this.state;
    const renderingImage = (
      <img src={customerImages[customerImageIndex - 1]}
        alt="Customer"
        className={styles.testimonialsSectionImage} />
    );
    return renderingImage;
  }

  renderBlockQuotes = () => {
    const { customerImageIndex, customerNames, blockquotes, } = this.state;
    const renderingBlockQuote = (
      <blockquote align="justify" className={styles.testimonialsSectionBlockquote}>
        <cite className={styles.testimonialsSectionCite}>
          {customerNames[customerImageIndex - 1]}
        </cite>
        <p> {blockquotes[customerImageIndex - 1]} </p>
      </blockquote>
    );
    return renderingBlockQuote;
  }

  updateImageIndex = (type, factor) => {
    let { customerImageIndex, customerImages } = this.state;
    if (type === 'Left' && customerImageIndex === 1) {
      customerImageIndex = customerImages.length;
    } else if (type === 'Right' && customerImageIndex === customerImages.length) {
      customerImageIndex = 1;
    } else {
      customerImageIndex += factor;
    }
    this.setState({ customerImageIndex });
  }

  render() {
    return (
      <section className={styles.testimonialsSection}>
        <div class="row">
          <h2 className={styles.testimonialsHeading}> Here's What Our Customers Say! </h2>
        </div>

        <div className="row">
          <figure className={styles.testimonialsSsection__imageContainer}>
            {this.renderCustomerImages()}

            <FaAngleLeft
              className={styles.testimonialsSection__iconLeft}
              onClick={() => this.updateImageIndex('Left', -1)}
            />
            <FaAngleRight
              className={styles.testimonialsSection__iconRight}
              onClick={() => this.updateImageIndex('Right', 1)}
            />

          </figure>

          {this.renderBlockQuotes()}

        </div>
      </section>
    )
  }
}

export { TestimonialComponent };