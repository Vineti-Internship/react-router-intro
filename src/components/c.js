import React from 'react';

export default
class A extends React.Component {
  render(){
    console.log(this.props.match.params);
    return(
      null
    );
  }
};