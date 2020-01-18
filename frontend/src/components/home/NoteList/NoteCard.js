import React, { Component } from 'react';
import './note-card.css';

class NoteCard extends Component {
  render() {
    const { note, getUserDetail, deleteUser } = this.props;
    return(
    <div className="col-md-3" style={{borderRadius:5}}>
        <span className="note-card-delete" onClick={() => deleteUser(note.Aadhar)}>
          <i className="material-icons">close</i>
        </span>:<span></span>
        <span className="note-card-edit" onClick={() => getUserDetail(note)}>
          <i className="material-icons">mode_edit</i>
        </span>
    	<div className="our-team-main">
	        <div className="team-front">
	            <h3>Name-: {note.Name}</h3><br></br>
              <p><strong>Aadhar Number-:{note.Aadhar}</strong></p>
              <p><strong>Gender-:</strong> {note.Gender}</p>
	            <p><strong>Source-:</strong> {note.Source}</p>
              <p><strong>Email Id:</strong> {note.Email}</p>
              <p><strong>Current Income of user:</strong> {note.Current_Income}</p>
              <p><strong>Current Occupation-:</strong> {note.Occupation}</p>
              <p><strong>Qualification of user-:</strong> {note.Qualification}</p>
              <p><strong>Employment_Status of User-:</strong> {note.Employment_Status}</p>
              <br></br>
	            <p><strong>Mobile Number:-({note.Mobile})</strong></p>
	        </div>
	      <div className="team-back">
	        <span>
            {note.content}
	        </span>
	      </div>
	    </div>
	  </div>
    );
  }
}

export default NoteCard;
