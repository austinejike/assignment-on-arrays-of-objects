/*
Create an array of movie objects. 
  Each movie should have a title, rating, and 
  hasWatched properties. Iterate through the array 
  and print out something that looks like

  You have watched "The Man Died" - 5 stars
  You have not seen "Kings Guard" - 4.5 starts
  You have seen "24 Redemption" - 5 stars
  You have seen "The Warrior Man" - 3.5 stars
  */

let word;
let myMovie = [
  {hasWatched: true, title: 'The Man Die', rating:'-5 star' },
  {hasWatched: false,  title: "Kings Guard", rating:'- 4.5 starts' },
  {hasWatched: true,  title: "24 Redemption",  rating: '- 5 stars'},
  {hasWatched: true, title: "The Warrior Man", rating: '- 3.5 stars'},
  {hasWatched: false,  title: "The Walker",rating: '5 stars'},
  {hasWatched: true,  title: "The Warrior Man", rating: '- 3.5 stars'},
  {hasWatched: false, title: "Men of war", rating: '- 3.5 stars'}

]

// debugger
for (let i = 0; i < myMovie.length; i++) {
  debugger
  if(myMovie[i].hasWatched === true)
  {
    word = 'You have watched'
  }else{
    word = 'You have not seen'
  }
  word  += ` " ${myMovie[i].title}" ${myMovie[i].rating}`
  console.log(word)
}

