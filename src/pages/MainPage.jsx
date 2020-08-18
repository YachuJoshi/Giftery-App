import React from "react";

import { Header } from "../components/MainPage/Header";
import { ShoppingCategories } from "../components/MainPage/ShoppingCategories";

import {
  EventImageSources,
  GiftPhotoGallery,
  PersonImageSources,
} from "../components/MainPage/Images";
import { PhotoGallery } from "../components/MainPage/PhotoGallery";
import { Footer } from "../components/HomePage/Footer";

const MainPage = () => {
  return (
    <>
      <Header inProductPage={false} />
      <ShoppingCategories
        title={`Occasion`}
        firstImageSources={[
          EventImageSources.Birthday,
          EventImageSources.Wedding,
          EventImageSources.Anniversary,
        ]}
        secondImageSources={[
          EventImageSources.Valentines,
          EventImageSources.TeachersDay,
          EventImageSources.HouseWarming,
        ]}
      />
      <PhotoGallery GiftPhotoGallery={GiftPhotoGallery} />
      <ShoppingCategories
        title={`Cateogiers & Personalities`}
        firstImageSources={[
          PersonImageSources.Men,
          PersonImageSources.Women,
          PersonImageSources.Kids,
        ]}
        secondImageSources={[
          PersonImageSources.PartyStarter,
          PersonImageSources.SuperHero,
          PersonImageSources.Photographer,
        ]}
      />
      <Footer />
    </>
  );
};

export { MainPage };
