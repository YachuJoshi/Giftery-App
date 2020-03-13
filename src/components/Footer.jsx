import React from 'react';

import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaGithub } from 'react-icons/fa';

const FooterComponent = () => {
  const footerItemList = [
    'About Us',
    'Blog',
    'Press',
    'iOS App',
    'Android App',
  ];

  return (
    <footer>
      <div className="row">
        <div className="col span-1-of-2">
          <ul className="footer__about-us-list">
            {footerItemList.map((item, index) => (
              <li key={index}>
                <a href="#getStarted"> {item} </a>
              </li>
            ))
            }
          </ul>
        </div>

        <div className="col span-1-of-2">
          <ul className="footer__social-icons-list">
            <li> <FaFacebookF className="footer__social-icon" /> </li>
            <li> <FaTwitter className="footer__social-icon" /> </li>
            <li> <FaGooglePlusG className="footer__social-icon" /> </li>
            <li> <FaInstagram className="footer__social-icon" /> </li>
            <li> <FaGithub className="footer__social-icon" /> </li>
          </ul>
        </div>

        <div className="row">
          <p class="footer__text">
            Copyright {<> &copy; </>} 2020 by Yachu Joshi. All Rights Reserved.
              </p>
        </div>
      </div>
    </footer>
  );
}

export { FooterComponent }