// hold the reducers here; rememeber, they are what take in, update and return bits of state to our store
import { combineReducers } from "redux";

// ... but this will be a static array of songs
const songsReducer = () => {
  return [
    { title: "No Scrubz", duration: "4:05" },
    { title: "macarena", duration: "2:35" },
    { title: "all start", duration: "3:45" },
    { title: "I WANT it tht way fucker", duration: "1:45" },
  ];
};

// this will manage the piece of state that's just the single value of the current song (not a list or some shit); kinda like
// the number from the accounting department in the example
// null as a default value before anything is selected; we coullldd specify a default state value here though!
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

// export the default result of combine Reducers call
// KEYS inside our reducer are going to be the KEYS INSIDE OUR STATE OBJECT
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
