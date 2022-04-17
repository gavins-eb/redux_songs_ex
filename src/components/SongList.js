import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  // this.props == {songs: state.songs}

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// this is just unpacking VALUES, not actionCreators (thats the SECOND part of the connect function)
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// selectSong comes from the import of the action; the connect call makes this something that automatically
// will be used as "dispatch" step
const songListConnect = connect(mapStateToProps, { selectSong });
// FUNKY SYNTAX: whatever connect returns is a function that accepts an arg, thats what songlist will be
export default songListConnect(SongList);
