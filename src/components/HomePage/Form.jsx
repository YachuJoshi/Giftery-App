import React from "react";

import styles from "../../css/resources/HomePage/feedback.module.scss";

class FeedBackForm extends React.Component {
  render() {
    const {
      nameInput,
      emailInput,
      newsletterInput,
      feedbackInput,
    } = this.props;
    return (
      <section id="section-feedback" className={styles.sectionFeedback}>
        <div className="row">
          <h2 className={styles.feedbackHeading}>
            {" "}
            We're Happy To Hear From You{" "}
          </h2>
        </div>

        <div className="row">
          <form
            className={styles.sectionFeedback__form}
            onSubmit={(event) => {
              event.preventDefault();
              this.props.submitForm();
            }}
          >
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="name"> Name </label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="text"
                  name="nameInput"
                  placeholder="Your Name"
                  value={nameInput}
                  className={styles.sectionFeedback__formInputBox}
                  required
                  onChange={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
                  onBlur={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="email"> Email </label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="email"
                  name="emailInput"
                  placeholder="Your Email"
                  value={emailInput}
                  className={styles.sectionFeedback__formInputBox}
                  required
                  onChange={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
                  onBlur={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
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
                  className={styles.sectionFeedback__formInputSelect}
                  onChange={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
                  onBlur={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
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
                <input
                  type="checkbox"
                  name="newsletterInput"
                  className={styles.sectionFeedback__formInputCheckbox}
                  checked={newsletterInput}
                  onChange={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
                  onBlur={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
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
                  className={styles.sectionFeedback__formInputTextbox}
                  value={feedbackInput}
                  onChange={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
                  onBlur={(event) =>
                    this.props.parentCallBackForFormInput(event)
                  }
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
                  className={styles.sectionFeedback__submitBtn}
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

export { FeedBackForm };
