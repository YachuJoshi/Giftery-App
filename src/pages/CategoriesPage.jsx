import React from 'react';
import { Link } from '@reach/router';

class CategoriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('Hello World');
    return (
      <>
        <Link to="/"> HOME </Link>
        <h2> Hello World! </h2>
      </>
    );
  }
};

export { CategoriesPage };