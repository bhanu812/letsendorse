import React, { Component } from 'react';
import './index.css';
import Nav from './header/Nav';
import List from './NoteList/List';
import User from './User';
import axios from 'axios';
import urlFor from './../../helpers/urlFor';
import Flash from './../../lib/Flash';

axios.interceptors.request.use((config) => {
 let token=window.localStorage.getItem("token")
  if (token) {
    config.headers['authorization'] = 'Token ' + token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false,
      notes: [],
      note: {},
      newTag: false,
      newEdit:false,
      error: '',
      addUser:false,
      editMode:false
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote,
      note: {},
      editMode:true
    })
  }

  getAllUsers = () => {
    axios.get(urlFor('all'))
    .then((res) =>  this.setState({notes: res.data}))
    .catch((err) => console.log(err.response.data) );
  }

  getUserDetail = (userDetail) => {
    console.log("ggiuuhuuhlgk")
    console.log(userDetail)
    this.setState({note: userDetail, showNote: true, editMode:false })
  }

  performSubmissionRequest = (data, id) => {
    //console.log("AJkshlhdlalksj")
    if(id!=undefined)
      data["Aadhar"]=id
    //console.log(id);
    //console.log(data);
    if (id) {
      return axios.put(urlFor(`update`), data);
    } else {
      return axios.post(urlFor('/'), data);
    }
  }

  submitNote = (data, id) => {
    console.log(data);
    this.performSubmissionRequest(data, id)
    .then((res) => this.setState({ showNote: false }) )
    .catch((err) => {
      console.log(err)
      // console.log(err.response)
      // if (errors.content) {
      //   this.setState({ error: "Missing Note Content!" });
      // } else if (errors.title) {
      //   this.setState({ error: "Missing Note Title!" });
      // }
    });
  }

  deleteUser = (aadhar) => {
    axios.post(urlFor('/delete'),{"Aadhar":aadhar})
    .then((res) => this.setState({ notes: res.data }) )
    .catch((err) => console.log(err.response.data) );
  }

  showTagForm = () => {
    this.setState({ newTag: true });
  }
  showEditForm = () => {
    this.setState({ newEdit: true });
  }
  closeTagForm = () => {
    this.setState({ newTag: false });
  }
  closeEditForm = () => {
    this.setState({ newEdit: false });
  }

  resetError = () => {
    this.setState({ error: '' });
  }

  render() {
    const { showNote, notes, note, newTag, error,newEdit } = this.state;

    return (
      <div className="App">
        <Nav toggleNote={this.toggleNote} showNote={showNote} editMode={this.state.editMode} />
        {error && <Flash error={error} resetError={this.resetError} />}
        <br />
        { showNote ?
            <User
              user={note}
              newTag={newTag}
              newEdit={newEdit}
              editMode={this.state.editMode}
              submitNote={this.submitNote}
              showTagForm={this.showTagForm}
              showEditForm={this.showEditForm}
              closeTagForm={this.closeTagForm}
              closeEditForm={this.closeEditForm}
            />
            :
            <List
              getAllUsers={this.getAllUsers}
              notes={notes}
              getUserDetail={this.getUserDetail}
              deleteUser={this.deleteUser}
            /> }
      </div>
    );
  }
}

export default Home;
