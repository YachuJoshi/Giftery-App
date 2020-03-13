import React from "react";

import { HeaderComponent } from '../componenets/Header';
import { ArticleComponent } from '../componenets/Article';
import { FeatureComponent } from '../componenets/Features';
import { TestimonialComponent } from '../componenets/Testimonials';
import { PlansComponent } from '../componenets/Plans';
import { FeedBackFormComponent } from '../componenets/Form';
import { FooterComponent } from '../componenets/Footer';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      formInput: {
        nameInput: '',
        emailInput: '',
        findUsInput: 'Friends',
        newsletterInput: true,
        feedbackInput: ''
      }
    };
  }

  handleFormInputChange = (event) => {
    const name = event.target.name;
    const formInput = this.state.formInput;
    name === "newsletterInput" ?
      formInput[name] = event.target.checked :
      formInput[name] = event.target.value;
    this.setState({ formInput });
  }

  setEmailInputValue = (emailDataFromChild) => {
    this.setState({
      emailInput: emailDataFromChild
    });
  }

  submitForm = () => {
    console.log(this.state.formInput);
  }

  render() {
    const { nameInput, emailInput, newsletterInput, feedbackInput } = this.state.formInput;
    return (
      <>
        <HeaderComponent />
        <ArticleComponent parentCallBackForEmail={this.setEmailInputValue} />
        <FeatureComponent />
        <TestimonialComponent />
        <PlansComponent parentCallBackForEmail={this.setEmailInputValue} />
        <FeedBackFormComponent
          nameInput={nameInput}
          emailInput={emailInput}
          newsletterInput={newsletterInput}
          feedbackInput={feedbackInput}
          parentCallBackForFormInput={this.handleFormInputChange}
          submitForm={this.submitForm}
        />
        <FooterComponent />
      </>
    );
  }
}

export { HomePage };
