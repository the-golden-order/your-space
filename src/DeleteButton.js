import { Component } from 'react';
import { Button } from 'react-bootstrap';

class Deletebutton extends Component {
  render() {
    return (
      <>
        <Button onClick={() => this.props.deletebook(this.props._id)}>Delete This</Button>
      </>
    );
  }
}

export default Deletebutton;
