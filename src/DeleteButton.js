import React from 'react';
// import { Component } from 'react';
import { Button } from 'react-bootstrap';
// import { Container, Form } from 'react-bootstrap/Container';

class Deletebutton extends React.Component {
  deleteMusicFuncion = (event) => {
    event.prevenDefault();
    let deleteMusic = {
      _id: event.target._id.value,
    }
    this.props.deleteMusicS(deleteMusic)
    this.props.onHide();
  }
  render() {
    return (
      <>
        <Button onClick={this.deleteMusicFuncion}>Delete This</Button>
      </>
    );
  }
}


export default Deletebutton;
