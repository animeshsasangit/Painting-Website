import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Users } from './components/Users'
import { getAllUsers} from './services/UserService'

class Home extends Component {

    state = {
      user: {},
      users: [],
      numberOfUsers: 0
    }
  
    getAllUsers = () => {
      getAllUsers()
        .then(users => {
            console.log(users)
          this.setState({users: users, numberOfUsers: users.length})
        });
    }
  
    onChangeForm = (e) => {
        
    }
  
    componentDidMount() {
        this.getAllUsers();
        window.addEventListener('load', this.getAllUsers);
    }
  
    componentWillUnmount() { 
      window.removeEventListener('load', this.getAllUsers)  
    }
    
    render() {
    //   this.getAllUsers();
      return (
        <div className="App">
          <div className="container mrgnbtm">
          </div>
          <div className="row mrgnbtm">
            <Users users={this.state.users}></Users>
          </div>
        </div>
      );
    }
  }
  
  export default Home;