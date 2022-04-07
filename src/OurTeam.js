import React from 'react';
import { Carousel, CarouselItem, Button } from 'react-bootstrap';
import "./OurTeam.css";
import Eden from './OurTeamPics/picture_for_codle_aboutus.png';
import Marcus from './OurTeamPics/Marcus.jpeg';
import Ryan from './OurTeamPics/me.jpeg'
import Roger from './OurTeamPics/rogger.jpg'


class OurTeam extends React.Component {
  render() {
    return (
      <>

      <Carousel className="carry" interval={null} >
        <CarouselItem>
          <h2>Welcome to The Golden Order's Software Dev Team Page! </h2>
          <p> Scroll through the Carousel to Meet the Devs! We are a wile group of folks who desire to see the world through the eyes of code! If you asked, I'm sure you'd find out that half of us believe that we are just in a simulation and that the Matrix movie was just a ploy from BIG BRIAN to mess with 'humanity' as a whole. All the same, we are excited that you chose to stop by and check out this site! We hope that you enjoy what you see, and that the rainbow page hasn't thrown you too much for a loop (we have a teammate who loves to use rainbows in all their sites. it's a tough habbit to break). ~ LOVE, The GOLDEN ORDER  </p>
        </CarouselItem>
        <CarouselItem>
          <h2> Eden Brekke </h2>
          <h3> Full-Stack Software Developer</h3>
          <p> Hello! Excited to have you here! I'm Eden, and I'm just a Baby Software Developer, and a trained Virology Research Scientist. I love video games and art of all sorts, including but not limited to drawing, cooking, and crafting. I'm also always interested in trying new activities, some of my favorites that I've tried are skateboarding, rock climbing and aerial yoga!  Finally I think a large part of myself is my love for animals, I have two cats and I'm always eager to meet and make new animal friends. I hope you enjoyed Your Space!</p>
          <div className="carousel-div">
          <img 
          className="ourTeamImg"
          src= {Eden} 
          alt="Eden and a Llama" 
          />
          <Button className="carousel-button" href="https://github.com/eden-brekke">GitHub Profile</Button>
          <Button className="carousel-button" href="https://www.linkedin.com/in/eden-brekke/" >LinkedIn Profile</Button>
          </div>
          </CarouselItem>
          <CarouselItem>
            <h2> Ryan McMillan </h2>
            <h3> Full-Stack Software Developer </h3>
            <p> Greeting my fellow human, Glad to see ya here! My name is Ryan and I'm a new and excited software developer! I personally love to play and stream video games, as well as spending a lot of time playing my guitar.One of my favorite outdoor activities is Disc Golf, such a great sport and a great hike all in one! Thanks for coming to my Ted talk ya'll!</p>
            <img
            className="ourTeamImg"
            src={Ryan}
            alt="Ryan French Pose 1"
            />
            <Button className="carousel-button" href="https://github.com/RyanLMcMillan">GitHub Profile</Button>
            <Button className="carousel-button" href="https://www.linkedin.com/in/https://www.linkedin.com/in/ryan-m-369b50132/" >LinkedIn Profile</Button>
          </CarouselItem>
          <CarouselItem>
            <h2> Thomas Basham </h2>
            <h3> Full-Stack Software Developer </h3>
            <p>Youll update this later</p>
            <img
            className="ourTeamImg"
            src=""
            alt=""
            />
            <Button className="carousel-button" href="https://github.com/UPDATE ME!!!!!!!!!!!!">GitHub Profile</Button>

            <Button className="carousel-button" href="https://www.linkedin.com/in/ UPDATE ME!!!!!!!!!!!!!!!!!!" >LinkedIn Profile</Button> 

          </CarouselItem>
          <CarouselItem>
            <h2> Roger Wells </h2>
            <h3> Full-Stack Software Developer </h3>
            <p>Welcome to Yourspace, everyone! I'm Roger, cyclist, developer, photographer. We wanted to create this resource for you to search for and share music with your friends. I hope you enjoy it! </p>
            <img
            className="ourTeamImg"
            src={Roger}
            alt="Roger on a bicycle"
            />
            <Button className="carousel-button" href="https://github.com/rsw359">GitHub Profile</Button>

            <Button className="carousel-button" href="https://www.linkedin.com/in/roger-s-wells/">LinkedIn Profile</Button> 

          </CarouselItem>
          <CarouselItem>
            <h2> Marcus Hartwig </h2>
            <h3> Full-Stack Software Developer </h3>

            <p>Hey there! I'm Marcus Hartwig and I'm happy you're here. I am both a husband and father, and my family is currently based in the Seattle, WA area. I have extensive leadership experiance particularly in the context in deep wilderness areas. I love traveling and experiancing all that this world has to offer. I have also gotten to visit all 50 States and I am often traveling between Europe and Asia.</p>
            <img 
            className="ourTeamImg"
             src= {Marcus} 
             alt="Marcus and Denise below the Materhorne, CH" 
          />
            <Button className="carousel-button" href="https://github.com/marcusdnhartwig">GitHub Profile</Button>

            <Button className="carousel-button" href="https://www.linkedin.com/feed/" >LinkedIn Profile</Button> 
          </CarouselItem> 
      </Carousel>

      </>
    )
  }
}

export default OurTeam;