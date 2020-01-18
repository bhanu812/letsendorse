import React, { Component } from 'react';
import UserValidation from './userValidation';
import axios from 'axios';
import urlFor from './../../helpers/urlFor';
class User extends Component {
  constructor(props){
    super(props)
    this.state={
      'userList':[],
      'userEditList':[]
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = {
      Name: this.Name.value,
      District: this.District.value,
      City: this.City.value,
      State: this.State.value,
      Address_Line_1: this.Address_Line_1.value,
      Address_Line_2: this.Address_Line_2.value,
      Status: this.Status.value,
      Qualification: this.Qualification.value,
      Source: this.Source.value,
      Source_Type: this.Source_Type.value,
      Employment_Status: this.Employment_Status.value,
      Occupation: this.Occupation.value,
      Current_Income: this.Current_Income.value,
      Mobile: this.Mobile.value,
      Aadhar:this.Aadhar.value,
      Country:this.Country.value,
      Credit_History:this.Credit_History.value,
      Bank_Account:this.Bank_Account.value,
      Need_Training:this.Need_Training.value,
      DOB:this.DOB.value,
      Email:this.Email.value,
      Assets:this.Assets.value,
      Longitude:this.Longitude.value,
      Latitude:this.Latitude.value,
      Gender:this.Gender.value,
      Alternate_Mobile:this.Alternate_Mobile.value,
      Successful_Enterprises:this.Successful_Enterprises.value,
      Unsuccessful_Enterprises:this.Unsuccessful_Enterprises.value
    };
    const k= new UserValidation();
    if(k.validateData(formData))
      this.props.submitNote(formData, this.props.user.Aadhar);
  }

  onUserSubmit(e) {
    e.preventDefault();
    const formData = {
      userId:e.currentTarget.value
    }
    this.props.addPermission(formData, this.props.user.Aadhar)
    this.props.closeTagForm();
  }

  onUserEditSubmit(e){
    e.preventDefault();
    const formData = {
      userId:e.currentTarget.value
    }
    this.props.editAddPermission(formData, this.props.user.Aadhar)
    this.props.closeEditForm();
  }

  render() {
    const { user, closeTagForm,editMode } = this.props;
    return(
      <div className="note-container">
      {editMode ?
        <h2>Add New User</h2>
        :
        <div>
          <h2>Edit This User</h2>
          <h3 className="margin0px">Name-:</h3>
          <input
            disabled
            className="note-title-input"
            type="text"
            placeholder="Name"
            defaultValue={user.Name}
            ref={(input) => this.Name = input}
          />
          <h3 className="margin0px">Aadhar Card Number-:</h3>
          <input
            disabled
            className="note-title-input"
            type="text"
            placeholder="Aadhar Card Number"
            defaultValue={user.Aadhar}
            ref={(input) => this.Aadhar = input}
          />
          <h3 className="margin0px">Gender-:</h3>
          <input
            disabled
            className="note-title-input"
            type="text"
            placeholder="Gender"
            defaultValue={user.Gender}
            ref={(input) => this.Gender = input}
          />
          <h3 className="margin0px">Source-:</h3>
          <input
            disabled
            className="note-title-input"
            type="text"
            placeholder="Source"
            defaultValue={user.Source}
            ref={(input) => this.Source = input}
          />
        </div>
      }
        <form
          className="note-form"
          onSubmit={(e) => this.onSubmit(e)}
          onClick={() => closeTagForm()}
        >
          <div className="note-title">
          {editMode?
            <div>
            <div className="groupTogether">
              <h3 className="margin0px">Aadhar-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Aadhar Card Number"
                defaultValue={user.Aadhar}
                ref={(input) => this.Aadhar = input}
              />
              <h3 className="margin0px">Name-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Name"
                defaultValue={user.Name}
                ref={(input) => this.Name = input}
                />
            </div>
            <div className="groupTogether">
              <h3 className="margin0px">Source-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Source"
                defaultValue={user.Source}
                ref={(input) => this.Source = input}
              />
              <h3 className="margin0px">Gender-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Gender"
                defaultValue={user.Gender}
                ref={(input) => this.Gender = input}
                />
            </div>



            </div>
            :
            <div></div>

          }
          {editMode?
            <div>
            <h3 className="margin0px">Gender-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Gender"
              defaultValue={user.Gender}
              ref={(input) => this.Gender= input}
              />
              </div>:
              <div></div>
          }
            <div className="groupTogether">
              <h3 className="margin0px">Mobile-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Mobile"
                defaultValue={user.Mobile}
                ref={(input) => this.Mobile = input}
              />
              <h3 className="margin0px">Country-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Country"
                defaultValue={user.Country}
                ref={(input) => this.Country = input}
                />
            </div>
            <div className="groupTogether">
              <h3 className="margin0px">Status-:</h3>
                <input
                  className="note-title-input"
                  type="text"
                  placeholder="Status"
                  defaultValue={user.Status}
                  ref={(input) => this.Status = input}
                />
                <h3 className="margin0px">Occupation-:</h3>
                <input
                  className="note-title-input"
                  type="text"
                  placeholder="Occupation"
                  defaultValue={user.Occupation}
                  ref={(input) => this.Occupation = input}
                />
            </div>
            <div className="groupTogether">
              <h3 className="margin0px">City-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="City"
              defaultValue={user.City}
              ref={(input) => this.City = input}
            />
            <h3 className="margin0px">Qualification-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Qualification"
              defaultValue={user.Qualification}
              ref={(input) => this.Qualification = input}
            />
            </div>
            <div className="groupTogether">
              <h3 className="margin0px">Employment_Status-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Employment Status"
              defaultValue={user.Employment_Status}
              ref={(input) => this.Employment_Status = input}
            />
            <h3 className="margin0px">Alternate_Mobile-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Alternate Mobile"
              defaultValue={user.Alternate_Mobile}
              ref={(input) => this.Alternate_Mobile = input}
            />
            </div>
            <div className="groupTogether">
              <h3 className="margin0px">State-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="State"
              defaultValue={user.State}
              ref={(input) => this.State = input}
            />
            <h3 className="margin0px">Current_Income-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Current Income"
              defaultValue={user.Current_Income}
              ref={(input) => this.Current_Income = input}
            />
            </div>
            <div className="groupTogether">
            <h3 className="margin0px">Source_Type-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Source Type"
              defaultValue={user.Source_Type}
              ref={(input) => this.Source_Type = input}
            />
              <h3 className="margin0px">District-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="District"
              defaultValue={user.District}
              ref={(input) => this.District = input}
            />
            </div>
            <div className="groupTogether">
            <h3 className="margin0px">Address_Line_1-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Address Line 1"
              defaultValue={user.Address_Line_1}
              ref={(input) => this.Address_Line_1 = input}
            />
            <h3 className="margin0px">Address_Line_2-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Address Line 2"
              defaultValue={user.Address_Line_2}
              ref={(input) => this.Address_Line_2 = input}
            />
            </div>
            <div className="groupTogether">
            <h3 className="margin0px">Latitude-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Latitude"
              defaultValue={user.Latitude}
              ref={(input) => this.Latitude = input}
            />
            <h3 className="margin0px">Longitude-:</h3>
            <input
              className="note-title-input"
              type="text"
              placeholder="Longitude"
              defaultValue={user.Longitude}
              ref={(input) => this.Longitude = input}
            />
            </div>
            <div className="groupTogether">
              <h3 className="margin0px">Successful_Enterprises-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Successful Enterprises"
                defaultValue={user.Successful_Enterprises}
                ref={(input) => this.Successful_Enterprises = input}
              />
              <h3 className="margin0px">Unsuccessful_Enterprises-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Unsuccessful Enterprises"
                defaultValue={user.Unsuccessful_Enterprises}
                ref={(input) => this.Unsuccessful_Enterprises = input}
                />
            </div>
            <div className="groupTogether">
              <h3 className="margin0px">Credit_History-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Credit History"
                defaultValue={user.Credit_History}
                ref={(input) => this.Credit_History = input}
              />
              <h3 className="margin0px">Bank_Account-:</h3>
              <input
                className="note-title-input"
                type="text"
                placeholder="Bank Account"
                defaultValue={user.Bank_Account}
                ref={(input) => this.Bank_Account = input}
                />
              </div>
              <div className="groupTogether">
                <h3 className="margin0px">DOB-:</h3>
                <input
                  className="note-title-input"
                  type="date"
                  placeholder="DOB"
                  defaultValue={user.DOB}
                  ref={(input) => this.DOB = input}
                />
                <h3 className="margin0px">Need_Training-:</h3>
                <input
                  className="note-title-input"
                  type="text"
                  placeholder="Need Training"
                  defaultValue={user.Need_Training}
                  ref={(input) => this.Need_Training = input}
                  />
              </div>
              <div className="groupTogether">
                <h3 className="margin0px">Assets-:</h3>
                <input
                  className="note-title-input"
                  type="text"
                  placeholder="Assets"
                  defaultValue={user.Assets}
                  ref={(input) => this.Assets = input}
                />
                <h3 className="margin0px">Email-:</h3>
                <input
                  className="note-title-input"
                  type="text"
                  placeholder="Email"
                  defaultValue={user.Email}
                  ref={(input) => this.Email = input}
                  />
              </div>
          </div>
          <input className="note-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default User;
