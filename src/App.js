import React from 'react';
import { Router } from '@reach/router';

import './css/resources/reset.css';

import './css/vendors/grid.css';

import { HomePage } from './pages/HomePage';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <MainPage path="/main" />
      </Router>
    </div>
  );
}

export default App;
