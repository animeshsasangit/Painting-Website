import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateUser from './components/CreateUser'
import {createUser } from './services/UserService'


function isEmpty(str){
  return (!str || str.length === 0)
}
class AddUser extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
      let user = this.state.user
      if(!isEmpty(document.getElementById("firstname").value)){
        user.firstName = document.getElementById("firstname").value;
      }
      if(!isEmpty(document.getElementById("lastname").value)){
        user.lastName = document.getElementById("lastname").value;
      }
      if(!isEmpty(document.getElementById("email").value)){
        user.email = document.getElementById("email").value;
      }
      this.setState({user: user})
      if(isEmpty(user.firstName) || isEmpty(user.lastName) || isEmpty(user.email)){
        alert("Please enter all values!!" + user.firstName + user.lastName + user.email);
        return;
      }
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
      this.setState({user: {}})
  }

  onChangeForm(){

  }

  render() {
    // this.getAllUsers();
    return (
      <div className="App">
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
