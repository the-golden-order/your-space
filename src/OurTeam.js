import React from 'react'; 
import { Carousel, CarouselItem, Button } from 'react-bootstrap';
import "./OurTeam.css";
import Eden from './OurTeamPics/picture_for_codle_aboutus.png';

class OurTeam extends React.Component {
  render(){
    return(
      <>
      <Carousel interval={null} >
        <CarouselItem>
          <h2>Welcome to The Golden Order's Software Dev Team Page! </h2>
          <p> Scroll through the Carousel to Meet the Devs!</p>
        </CarouselItem>
        <CarouselItem>
          <h2> Eden Brekke </h2>
          <h3> Full-Stack Software Developer</h3>
          <p> Hello! Excited to have you here! I'm Eden, and I'm just a Baby Software Developer, and a trained Virology Research Scientist. I love video games and art of all sorts, including but not limited to drawing, cooking, and crafting. I'm also always interested in trying new activities, some of my favorites that I've tried are skateboarding, rock climbing and aerial yoga!  Finally I think a large part of myself is my love for animals, I have two cats and I'm always eager to meet and make new animal friends. I hope you enjoyed our CODLE program!</p>
          <img 
          src= {Eden} 
          alt="Eden and a Llama" 
          />

          <Button className="carousel-button" href="https://github.com/eden-brekke">GitHub Profile</Button>
          <Button className="carousel-button" href="https://www.linkedin.com/in/eden-brekke/" >LinkedIn Profile</Button>
          </CarouselItem> 
      </Carousel>
      </>
    )
  }
}

export default OurTeam;