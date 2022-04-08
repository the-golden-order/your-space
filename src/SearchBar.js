import React from 'react';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import './Button.css'

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <Container className="search-bar">
          <form>
            <label className="search-label">Find a Song: </label>
            <input type="text" onInput={(event) => { this.props.handleMusicInput(event.target.value) }} placeholder="Type Song Here!"></input>
            <Button className="rainbow-button" onClick={this.props.getItunesData}>Get Music!</Button>
          </form>
          <form>
            <label className="search-label">Find a Game: </label>
            <input type="text" onInput={(event) => { this.props.handleMusicInput(event.target.value) }} placeholder="Type The Game Title Here!"></input>
            <Button className="rainbow-button" onClick={this.props.getItunesData}>Get Games!</Button>
          </form>
        </Container>
      </>
    );
  }
}

export default SearchBar;
