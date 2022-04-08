import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

class CommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let updatedEntry = {
      note: this.state.note|| this.props.music.note,     
      _id: this.props.music._id,
      __v: this.props.music.__v,
      email: this.props.user
    };
    console.log(updatedEntry);
    this.props.updateMusic(updatedEntry);
    this.props.hideModal();
  };

  handleNote = (e) => {
    e.preventDefault();
    this.setState({
      note: e.target.value
    });
  }

  render() {

    return (
      <Modal
          style={{ width: '25rem' }}
          show={this.props.showModal}
          onHide={this.props.hideModal}
        >

      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add or Change Comments</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Comments</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="What's on your mind?" onInput={this.handleNote}/>
              </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" type="submit">Save changes</Button>
          <Button variant="danger" onClick={() => this.props.deleteMusic(this.props._id)}>Delete Comments</Button>
        </Modal.Footer>

      </Modal.Dialog>

        </Modal>
    )
  }
}

export default CommentModal;