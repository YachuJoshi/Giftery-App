import React from 'react';

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
      and Sarah is so welcoming and helpful. You must visit this little treasure trove asap!`,

        `Love this shop, always changing what's in there so there's always something new to catch your eye. Warm, 
      friendly welcome even when you take a pushchair in and fill the shop up!`
      ]
    }
  }

  renderCustomerImages = () => {
    const { customerImageIndex, customerImages } = this.state;
    const renderingImage = customerImageIndex ? (
      <img src={customerImages[customerImageIndex - 1]}
        alt="Customer Image"
        className="testimonials-section--image" />
    ) : null;
    return renderingImage;
  }

  renderBlockQuotes = () => {
    const { customerImageIndex, customerNames, blockquotes, } = this.state;
    const renderingBlockQuote = customerImageIndex ? (
      <blockquote align="justify" className="testimonials-section--blockquote">
        <cite className="testimonials-section--cite">
          {customerNames[customerImageIndex - 1]}
        </cite>
        <p> {blockquotes[customerImageIndex - 1]} </p>
      </blockquote>) : null;
    return renderingBlockQuote;
  }

  updateImageIndex = (type, index) => {
    let { customerImageIndex, customerImages } = this.state;
    if (type === 'Left' && customerImageIndex === 1) {
      customerImageIndex = customerImages.length;
    } else if (type === 'Right' && customerImageIndex === customerImages.length) {
      customerImageIndex = 1;
    } else {
      customerImageIndex += index;
    }
    this.setState({ customerImageIndex });
  }

  render() {
    return (
      <section className="testimonials-section">
        <div class="row">
          <h2> Here's What Our Customers Say! </h2>
        </div>

        <div className="row">
          <figure className="testimonials-section__image-container">
            {this.renderCustomerImages()}

            <FaAngleLeft
              className="testimonials-section__icon-left"
              onClick={() => this.updateImageIndex('Left', -1)}
            />
            <FaAngleRight
              className="testimonials-section__icon-right"
              onClick={() => this.updateImageIndex('Right', 1)}
            />

          </figure>

          {this.renderBlockQuotes()}

        </div>
      </section>
    )
  }
}

export { TestimonialComponent }