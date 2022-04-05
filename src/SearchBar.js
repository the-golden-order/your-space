import React from 'react';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

class SearchBar extends React.Component {
  render() {
    return (
      <Container className="search-bar">
        <form>

          <label className="search-label">Search an Artist: </label>
          <input type="text" onInput={(event) => { this.props.handleMusicInput(event.target.value) }} placeholder="search for an Artist!"></input>
          <Button className="search-button" onClick={this.props.getItunesData}>Music!</Button>

        </form>
      </Container>
    );
  }
}

export default SearchBar;

/* this is the code that I put in my Main.js that was passed down to my SearchBar component 
  handleCityInput = (event) => {
    this.setState({
      query: event,
    });
  } 
    getCityData = async (event) => {
    event.preventDefault();

    try {
      let cityRequest = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.query}&format=json`
      let cityData = await axios.get(cityRequest);
      this.setState({
        cityData: cityData.data,
      });
    } catch (error) {
      console.log('Error: ', error.response);
      this.setState({
        error: true,
        showModal: true,
        errorMessage: `An Error Occurred ${error.response.status}, ${error.response.statusText}`,
      });
    }
  };         
          <SearchBar 
            handleCityInput={this.handleCityInput}
            getCityData={this.getCityData} />
            */
