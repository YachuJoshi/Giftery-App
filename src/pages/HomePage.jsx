import React from "react";

import { HeaderComponent } from '../componenets/Header';
import { ArticleComponent } from '../componenets/Article';
import { FeatureComponent } from '../componenets/Features';
import { TestimonialComponent } from '../componenets/Testimonials';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
    };
  }

  setEmailInputValue = (emailDataFromChild) => {
    this.setState({
      emailInput: emailDataFromChild
    });
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <ArticleComponent parentCallBackForEmail={this.setEmailInputValue} />
        <FeatureComponent />
        <TestimonialComponent />
      </>
    );
  }
}

export { HomePage };
