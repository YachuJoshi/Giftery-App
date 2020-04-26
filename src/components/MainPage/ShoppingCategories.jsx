import React from 'react';

import styles from '../../css/resources/MainPage/occasion.module.scss';

import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';

class ShoppingCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePageIndex: 0
    }
  }

  updateActivePageIndex = () => {
    let { activePageIndex } = this.state;
    activePageIndex = +!activePageIndex;
    this.setState({ activePageIndex });
  }

  updateActivePageIndexDot = (page) => {
    this.setState({ activePageIndex: page });
  }

  render() {
    const { activePageIndex } = this.state;
    const { title, firstImageSources, secondImageSources } = this.props;
    return (
      <section className={styles.occassionSection}>
        <div className="row">
          <h2 className={styles.occassionHeading}> Shop By {title}! </h2>
          <div className={styles.occasionsContainer}>
            <FaChevronLeft
              className={styles.iconLeft}
              onClick={() => this.updateActivePageIndex()}
            />
            <FaChevronRight
              className={styles.iconRight}
              onClick={() => this.updateActivePageIndex()}
            />
            <ul className={styles.occasions}>
              {!activePageIndex ?
                firstImageSources.map((imageSrc, index) => (
                  <li key={imageSrc}>
                    <img src={imageSrc} key={index} alt={`Events`} />
                  </li>
                )) :
                secondImageSources.map((imageSrc, index) => (
                  <li key={imageSrc}>
                    <img src={imageSrc} key={index} alt={`Events`} />
                  </li>
                ))}
            </ul>
            <FaCircle
              className={styles.circleDotLeft}
              onClick={() => this.updateActivePageIndexDot(0)}
            />
            <FaCircle
              className={styles.circleDotRight}
              onClick={() => this.updateActivePageIndexDot(1)}
            />
          </div>
        </div>
      </section>
    );
  }
};

export { ShoppingCategories };