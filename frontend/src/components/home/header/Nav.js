import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import auth from './../../../authguard/auth';
class Nav extends Component {
  render() {
    console.log(this.props)
    const { toggleNote, showNote } = this.props;

    return (
      <div className="nav-container">
        <div className="nav-logo">Dashboard</div>
        <div className="nav-button" onClick={() => toggleNote()} >
          { showNote ? 'Cancel' :  '+ User' }
        </div>
        <div className="nav-button" onClick={() => auth.logout(()=>{
            window.location.reload();
        })} >
          { auth.isAuthenticated() ? 'Logout' :  'Sign In' }
        </div>
      </div>
    );
  }
}

export default Nav;
