import React from 'react';
import { Link } from 'react-router-dom';

export default
class A extends React.Component {
  render(){
    return(
      <Link to="/b">Go to B</Link>
    );
  }
};