import React from 'react';

import styles from '../../css/resources/HomePage/footer.module.scss';

import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const footerItemList = [
    'About Us',
    'Blog',
    'Press',
    'iOS App',
    'Android App'
  ]
  return (
    <footer>
      <div className="row">
        <div className="col span-1-of-2">
          <ul className={styles.footer__aboutUsList}>
            {footerItemList.map((item, index) => (
              <li key={index}>
                <a href="#getStarted"> {item} </a>
              </li>
            ))
            }
          </ul>
        </div>

        <div className="col span-1-of-2">
          <ul className={styles.footer__socialIconsList}>
            <li> <FaFacebookF className={styles.footer__socialIcon} /> </li>
            <li> <FaTwitter className={styles.footer__socialIcon} /> </li>
            <li> <FaGooglePlusG className={styles.footer__socialIcon} /> </li>
            <li> <FaInstagram className={styles.footer__socialIcon} /> </li>
            <li> <FaGithub className={styles.footer__socialIcon} /> </li>
          </ul>
        </div>

        <div className="row">
          <p className={styles.footer__text}>
            Copyright {<> &copy; </>} 2020 by Yachu Joshi. All Rights Reserved.
              </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer }