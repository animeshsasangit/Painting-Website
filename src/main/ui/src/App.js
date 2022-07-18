import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'


function isEmpty(str){
  return (!str || str.length === 0)
}
class App extends Component {

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

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  onChangeForm = (e) => {
      // let user = this.state.user
      // // user.id = this.state.numberOfUsers + 1
      // if(document.getElementById("firstname")){
      //   user.firstName = document.getElementById("firstname");
      // }
      // if(document.getElementById("lastname")){
      //   user.lastName = document.getElementById("lastname");
      // }
      // if(document.getElementById("email")){
      //   user.email = document.getElementById("email");
      // }
      
      // this.setState({user})
  }
  
  render() {
    getAllUsers();
    return (
      <div className="App">
        <Header></Header>
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
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}

export default App;
