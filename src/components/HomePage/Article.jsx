import React from 'react';

import { Link } from '@reach/router';

import styles from '../../css/resources/HomePage/article.module.css';

const Article = (props) => {
  const { parentCallBackForEmail } = props;
  return (
    <article className={styles.homePageArticle}>
      <div className="row">
        <h2
          className={styles.articleHeading}
        >
          We Got The Perfect Gift For Everyone!
        </h2>
        <p align="justify" className={styles.article__text}>
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
          className={styles.articleInputEmail}
          required
          onChange={
            event => parentCallBackForEmail(event.target.value)
          }
          onBlur={
            event => parentCallBackForEmail(event.target.value)
          }
        />
        <Link to="/categories" className={styles.articleGetStartedBtn} > Get Started For Free! </Link>
      </div>

    </article>
  );
}

export { Article };