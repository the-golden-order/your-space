import React from "react";
import Card from "react-bootstrap/Card"
import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";
// THIS IS NOT FRONT FACING. IT'S DESIGNED TO NOT SHOW UP ON THE PROFILE PAGE, BUT ONLY WHAT A USER 
// DESIRS TO ADD TO THEIR PROFILE VIA GAMES AND MUSIC.
const Profile = () => {
const { user, isAuthenticated, isLoading } = useAuth0();

if (isLoading) {
  return <div>Loading ...</div>;
}

return (
  isAuthenticated && (
    <Card>
        <Card.Img className="loggedInPhoto" src={user.picture} alt={user.name} />
        <Card.Body>

        <Card.Text>{user.name}</Card.Text>
        <Card.Text>{user.email}</Card.Text>

        </Card.Body>
      </Card>
    )
  );
};

// constructor(props) {
//   super(props);
//   this.state= {
//     artistName: '',
//     trackName:'',
//     artWork: '',
//     genre: '',
//     note:'',
//   };
  
// };


// {/* <Button variant="primary" onClick={this.showModal}>Details</Button> */}

export default Profile;