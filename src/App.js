import React from 'react';

import './css/resources/reset.css';

import './css/resources/header.css';
import './css/resources/article.css';
import './css/resources/features.css';
import './css/resources/testimonials.css';
import './css/resources/plans.css';
import './css/resources/feedback.css'
import './css/resources/footer.css';

import './css/vendors/grid.css';

import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;