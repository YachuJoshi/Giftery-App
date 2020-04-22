import React from 'react';

import { NavigationBar } from '../components/MainPage/NavBar';
import { Article } from '../components/HomePage/Article';

import { productDetails as products } from '../mock';

const DetailsPage = (props) => {
  return (
    <>
      <NavigationBar
        inProductPage={false}
      />
      <Article />
    </>
  )
}

export { DetailsPage };