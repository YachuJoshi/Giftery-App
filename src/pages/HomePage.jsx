import React from "react";

import { HeaderComponent } from '../components/Header';
import { ArticleComponent } from '../components/Article';
import { FeatureComponent } from '../components/Features';
import { TestimonialComponent } from '../components/Testimonials';
import { PlansComponent } from '../components/Plans';
import { FeedBackFormComponent } from '../components/Form';
import { FooterComponent } from '../components/Footer';

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
