import React from 'react';

class FeedBackFormComponent extends React.Component {
  render() {
    const { nameInput, emailInput, newsletterInput, feedbackInput } = this.props;
    return (
      <section className="section-feedback">
        <div className="row">
          <h2> We're Happy To Hear From You </h2>
        </div>

        <div className="row">
          <form className="section-feedback__form"
            onSubmit={
              event => {
                event.preventDefault();
                this.props.submitForm();
              }}>
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="name"> Name </label>
              </div>
              <div className="col span-2-of-3">
                <input type="text"
                  name="nameInput"
                  placeholder="Your Name"
                  value={nameInput}
                  className="section-feedback__form--input-box"
                  required
                  onChange={event => this.props.parentCallBackForFormInput(event)}
                  onBlur={event => this.props.parentCallBackForFormInput(event)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="email"> Email </label>
              </div>
              <div className="col span-2-of-3">
                <input type="text"
                  name="emailInput"
                  placeholder="Your Email"
                  value={emailInput}
                  className="section-feedback__form--input-box"
                  required
                  onChange={event => this.props.parentCallBackForFormInput(event)}
                  onBlur={event => this.props.parentCallBackForFormInput(event)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="howDidYouFindUs"> How Did You Find Us? </label>
              </div>
              <div className="col span-2-of-3">
                <select
                  name="findUsInput"
                  id="findUsInput"
                  className="section-feedback__form--input-select"
                  onChange={event => this.props.parentCallBackForFormInput(event)}
                  onBlur={event => this.props.parentCallBackForFormInput(event)}
                >
                  <option value="Friends"> Friends </option>
                  <option value="Search Engine"> Search Engine </option>
                  <option value="Advertisement"> Advertisement </option>
                  <option value="Others"> Other </option>

                </select>
              </div>
            </div>

            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="newsletter"> Newsletter? </label>
              </div>
              <div className="col span-2-of-3">
                <input type="checkbox"
                  name="newsletterInput"
                  className="section-feedback__form--input-checkbox"
                  checked={newsletterInput}
                  onChange={event => this.props.parentCallBackForFormInput(event)}
                  onBlur={event => this.props.parentCallBackForFormInput(event)}
                />
                  Yes, Please!
                </div>
            </div>

            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="feedback"> Drop us a message! </label>
              </div>
              <div className="col span-2-of-3">
                <textarea
                  name="feedbackInput"
                  placeholder="Your Message"
                  className="section-feedback__form--input-textbox"
                  value={feedbackInput}
                  onChange={event => this.props.parentCallBackForFormInput(event)}
                  onBlur={event => this.props.parentCallBackForFormInput(event)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col span-1-of-3">
                <label> {<> &nbsp; </>} </label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="submit"
                  className="section-feedback__submit-btn"
                  value="Submit"
                />
              </div>
            </div>

          </form>
        </div>
      </section>
    );
  }
}

export { FeedBackFormComponent };