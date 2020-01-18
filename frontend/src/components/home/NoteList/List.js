import React, { Component } from 'react';
import NoteCard from './NoteCard';

class List extends Component {
  componentWillMount() {
    this.props.getAllUsers();
    console.log(this.props)
  }

  render() {
    const { notes, getUserDetail, deleteUser } = this.props;
    const cards = notes.map((note, index) => {
      return (
        <NoteCard
          key={index}
          index={index}
          note={note}
          getUserDetail={getUserDetail}
          deleteUser={deleteUser}
        />
      );
    });

    return (
      <div className="list-container">
        {cards}
      </div>
    );
  }
}

export default List;
