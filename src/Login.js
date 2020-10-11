import React, { Component } from 'react';
import './App.css';
import Itemlist from './Itemlist';

// main component
class Login extends Component {
  constructor(props) {
    super(props)
  }

  userLogin(e) {
    const userField = document.querySelector("#username");
    const passField = document.querySelector("#password");
    const username = userField.value;
    const password = passField.value;
    console.log("Username: " + username + " Password: " + password);
    userField.value = "";
    passField.value = "";

    //Talk to server
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(users => {
        console.log(users)
        if (users.length == 0) {
          window.alert("Username or password is incorrect.")
        }
        else {
          //REDIRECT TO THE ITEMLIST GOES HERE
        }
      })
  }

  userCreate(e) {
    const userField = document.querySelector("#username");
    const passField = document.querySelector("#password");
    const username = userField.value;
    const password = passField.value;
    console.log("Username: " + username + " Password: " + password);
    fetch("/create", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
    //REDIRECT TO ITEMLIST GOES HERE!!!
  }

  render() {
    return (
      <div className="Login">
        <body>
          <h1>Login</h1>
          <p>Enter your credentials or Create Account:</p>
          <label for="username" class="neededLabel">Username *</label>
          <input id="username" type="text" maxlength="100" required placeholder="Username"/>
          <label for="password" class="neededLabel">Password *</label>
          <input id="password" type="text" maxlength="100" required placeholder="Password"/><br />
              Password should be secure and unique to your account<br /><br />
              * Passwords and Usernames are case sensitive<br />
            <button id="create-button" onClick={e => this.userCreate(e)}>Create Account</button><br />
            <button id="login-button" onClick={e => this.userLogin(e)}>Login</button><br />
        </body>
      </div>
    )
  }
}

export default Login;