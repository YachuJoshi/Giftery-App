import React from 'react';

import { Header } from '../components/CateogiesPage/Header';
import { ShoppingCategories } from '../components/CateogiesPage/ShoppingCategories';

import { ImageSources } from '../components/CateogiesPage/Images';

class CategoriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <ShoppingCategories
          title={`Occasion`}
          firstImageSources={[
            ImageSources.Birthday,
            ImageSources.Wedding,
            ImageSources.Anniversary
          ]}
          secondImageSources={[
            ImageSources.Valentines,
            ImageSources.TeachersDay,
            ImageSources.HouseWarming
          ]}
        />
      </>
    );
  }
};

export { CategoriesPage };