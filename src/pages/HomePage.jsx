import React from "react";

import { Header } from "../components/HomePage/Header";
import { Article } from "../components/HomePage/Article";
import { Feature } from "../components/HomePage/Features";
import { Testimonial } from "../components/HomePage/Testimonials";
import { Plans } from "../components/HomePage/Plans";
import { FeedBackForm } from "../components/HomePage/Form";
import { Footer } from "../components/HomePage/Footer";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: {
        nameInput: "",
        emailInput: "",
        findUsInput: "Friends",
        newsletterInput: true,
        feedbackInput: "",
      },
    };
  }

  handleFormInputChange = (event) => {
    const name = event.target.name;
    const formInput = this.state.formInput;
    name === "newsletterInput"
      ? (formInput[name] = event.target.checked)
      : (formInput[name] = event.target.value);
    this.setState({ formInput });
  };

  submitForm = () => {
    console.log(this.state.formInput);
  };

  render() {
    const {
      nameInput,
      emailInput,
      newsletterInput,
      feedbackInput,
    } = this.state.formInput;
    return (
      <>
        <Header />
        <Article />
        <Feature />
        <Testimonial />
        <Plans />
        <FeedBackForm
          nameInput={nameInput}
          emailInput={emailInput}
          newsletterInput={newsletterInput}
          feedbackInput={feedbackInput}
          parentCallBackForFormInput={this.handleFormInputChange}
          submitForm={this.submitForm}
        />
        <Footer />
      </>
    );
  }
}

export { HomePage };
