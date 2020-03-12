import React from 'react';

const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <div className="row">
          <ul className="header__main-nav">
            <li> <a href="#features"> Features </a> </li>
            <li> <a href="#cart"> Cart </a> </li>
            <li> <a href="#plans"> Sign Up </a> </li>
            <li> <a href="#login"> Login </a> </li>
          </ul>
        </div>
      </nav>

      <div className="header__text-box">
        <h1> Find The Perfect Gift, Everytime! </h1>
        <a class="header--btn" href="#getStarted"> I'm Interested! </a>
        <a class="header--btn" href="#getStarted"> Show Me More! </a>
      </div>
    </header>
  );
}

export { HeaderComponent };