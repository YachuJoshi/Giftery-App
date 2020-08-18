import React from "react";
import { Router } from "@reach/router";

import "./css/resources/reset.scss";

import "./css/vendors/grid.scss";

import { HomePage } from "./pages/HomePage";
import { MainPage } from "./pages/MainPage";
import { ProductsPage } from "./pages/ProductsPage";
import { DetailsPage } from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <MainPage path="/main" />
        <ProductsPage path="/products" />
        <DetailsPage path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
