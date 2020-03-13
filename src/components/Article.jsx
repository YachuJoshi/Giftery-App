import React from 'react';

class ArticleComponent extends React.Component {
  render() {
    return (
      <article>
        <div className="row">
          <h2> We Got The Perfect Gift For Everyone! </h2>
          <p align="justify" className="article__text">
            Gifts are the best means to convey love, wishes, and congratulatory messages to your loved ones.
            They add fun and fervor to every occasion while making your loved ones beaming with a smile.
            Choose from our extensive collection of yummy cakes, splendid flowers, assorted chocolates, and
            personalised gifts to offer your friends and family members on important occasions.
            </p>
        </div>

        <div className="row">
          <input type="email"
            name="email"
            placeholder="Type your email...."
            className="article--input-email"
            required
            onChange={
              event => this.props.parentCallBackForEmail(event.target.value)
            }
            onBlur={
              event => this.props.parentCallBackForEmail(event.target.value)
            }
          />
          <a class="article--get-startedBtn" href="#getStarted"> Get Started For Free! </a>
        </div>

      </article>
    );
  }
}

export { ArticleComponent };