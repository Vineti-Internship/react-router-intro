import React from 'react';
import { Redirect } from 'react-router-dom';

export default
class B extends React.Component {
  render(){
    return(
      <Redirect to="/" />
    );
  }
};