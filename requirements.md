# Software Requirements

## Vision
Minimum Length: 3-5 sentences

What is the vision of this product? 
  * Allow a user to have a collection of all their favorite music (artist, songs, lyrics). Allow them search an existing API for music and then to save that music within a database for later viewing. 

What pain point does this project solve?
  * It's mostly for boredom, a fun way to search for music they know and a way to share their music taste with one simple link. Potentially a way to find new music.  

Why should we care about your product?
  * It's just a fun little app to spend some time familiarizing yourself with the music you like and potentially finding new music to listen to.

## Scope (In/Out)

IN - What will your product do  
Describe the individual features that your product will do.  
High overview of each. Only need to list 4-5  
  1. Allow user to search music 
  2. Allow user to save music to DB
  3. Allow user to view that saved music 
  4. Allow user to find new music
 

OUT - What will your product not do.  
  1. The app will not make suggestions based off existing music saved 
  2. The app will not allow you to add music that is not within the API that we're referencing 




### Minimum Viable Product vs
What will your MVP functionality be?
  * User will be able to search for music by name and save that music to a DB.
  * the saved music will render on the users profile page

What are your stretch goals?
  * Stretch goal for the music aspect will be to allow the the user to play the music on the site (maybe with an embedded video?)

### Stretch
What stretch goals are you going to aim for?
  * If we have time and reach MVP early we would like to look into incorporating the same sort of functionality but with video games, and movies. 

## Functional Requirements
List the functionality of your product.  

* A user can login via their google account  
* A user can update their profile information, and music lists  
* A user can search for artists/songs in the music API

### Data Flow
Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

1. User logs in
2. user searches music via artist or song name
3. User saves favorite songs/artists
4. user views saved music in their profile page
5. user logs out happy :)

## Non-Functional Requirements (301 & 401 only)
Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.  


1. Testability - Testability will be testing things such as performance, and stress. To test this we can have all members of the team go onto the finished deployed site and try to use it at the same time, this will allow us to test how having multiple people accessing the API and DB functionality will be effected in times of "stress." Will people be able to add/delete/update music as necessary 

2. Usability - How easy is the product to use? We can test how easy and intuitive the product is by having each member (and maybe a friend/fam) use our page, make sure they understand whats going on with minimal(no) explanation of what to do. 