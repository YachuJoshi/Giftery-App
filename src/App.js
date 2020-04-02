import React from 'react';
import { Router } from '@reach/router';

import './css/resources/reset.css';

import './css/vendors/grid.css';

import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <CategoriesPage path="/categories" />
      </Router>
    </div>
  );
}

export default App;
