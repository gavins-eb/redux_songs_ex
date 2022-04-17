import React from "react";
import { connect } from "react-redux";
// import { selectedSong } from "../actions";

export function SongDetail({ song }) {
  // conditionally render a placeholder if nothing exists for this piece of state yet
  if (!song) {
    return <div>Select a song!</div>;
  }

  const { title, duration } = song;
  return (
    <div>
      <h3> Details for</h3>
      <p>
        Title: {title}
        <br />
        Duration: {duration}
      </p>
    </div>
  );
}

// STATE will be wired up via connect to our store; so any state. whatever, the whatever will HAVE to be
// a KEY from our reducers object; BUT we can then create a key of ANY NAME to refer to it
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
