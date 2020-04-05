import React from 'react';

import { Header } from '../components/CateogiesPage/Header';
import { ShoppingCategories } from '../components/CateogiesPage/ShoppingCategories';

import { EventImageSources, GiftPhotoGallery, PersonImageSources } from '../components/CateogiesPage/Images';
import { PhotoGallery } from '../components/CateogiesPage/PhotoGallery';
import { Footer } from '../components/HomePage/Footer';

class MainPage extends React.Component {
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
            EventImageSources.Birthday,
            EventImageSources.Wedding,
            EventImageSources.Anniversary
          ]}
          secondImageSources={[
            EventImageSources.Valentines,
            EventImageSources.TeachersDay,
            EventImageSources.HouseWarming
          ]}
        />
        <PhotoGallery
          GiftPhotoGallery={GiftPhotoGallery}
        />
        <ShoppingCategories
          title={`Cateogiers & Personalities`}
          firstImageSources={[
            PersonImageSources.Men,
            PersonImageSources.Women,
            PersonImageSources.Kids
          ]}
          secondImageSources={[
            PersonImageSources.PartyStarter,
            PersonImageSources.SuperHero,
            PersonImageSources.Photographer
          ]}
        />
        <Footer
          footerItemList={[
            'About Us',
            'Blog',
            'Press',
            'iOS App',
            'Android App'
          ]} />
      </>
    );
  }
};

export { MainPage };