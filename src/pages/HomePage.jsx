import React from "react";

import { HeaderComponent } from '../componenets/Header';
import { ArticleComponent } from '../componenets/Article';
import { FeatureComponent } from '../componenets/Features';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: ''
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
      </>
    );
  }
}

export default HomePage;
