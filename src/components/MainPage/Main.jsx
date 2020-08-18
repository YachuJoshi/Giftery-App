import React from "react";

import styles from "../../css/resources/MainPage/header.module.scss";

import HeaderImage from "../../css/img/header-image.jpg";

const Main = () => (
  <main className={styles.headerMainSection}>
    <div className="row">
      <h2 className={styles.headerTitle}> About Giftery! </h2>
      <div className={styles.textContainer}>
        <p align="justify" className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
          elit at imperdiet dui.
          <br />
          Ullamcorper dignissim cras tincidunt lobortis feugiat. Faucibus
          pulvinar elementum integer enim neque. Pretium viverra suspendisse
          potenti nullam ac tortor vitae purus. Quisque egestas diam in arcu.
          Elementum nibh tellus molestie nunc non blandit massa enim nec.
          <br />
          Congue eu consequat ac felis donec et. Quam lacus suspendisse faucibus
          interdum posuere lorem ipsum. Venenatis a condimentum vitae sapien
          pellentesque. Velit sed ullamcorper morbi tincidunt.
          <br />
          Sed sed risus pretium quam vulputate dignissim suspendisse in. Eget
          aliquet nibh praesent tristique magna sit amet purus. Sit amet risus
          nullam eget felis eget nunc lobortis mattis.
        </p>
      </div>
      <figure className={styles.imageContainer}>
        <img
          src={HeaderImage}
          className={styles.headerImage}
          alt={`Presents & Gifts`}
        />
      </figure>
    </div>
  </main>
);

export { Main };
