import React, { Component } from 'react';
import decode from 'jwt-decode';
import {
  getLogs,
  postLog,
  loginUser,
  registerUser
} from './services/api';

import Scaler from './Scaler';
import Login from './Login';
import Register from './Register';
import Wordbank from './Wordbank';
import Thankyou from './ThankYou';
import Burger from './Burger';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userForm: {
        username: "",
        email: "",
        password: "",
        account_type: ""
      },
      currentUser: null,
      formData: {
        user_id: "",
        feeling_scale: 2,
        feelings: [],
        comment: ""
      },
      view: {
        loginView: true,
        registerView: false,
        formView: false,
        thankyouView: false,
        dashboardView: false
      },
      logs: []
    }
  }

  componentDidMount = async () => {
    const logs = await getLogs();
    if (logs) {
      this.setState({
        logs
      })
    }
    const checkUser = localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      this.setState({
        currentUser: user
      })
    }
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const userData = await loginUser(this.state.userForm);
    this.setState({
      currentUser: decode(userData.token),
      userForm: {
        username: "",
        email: "",
        password: "",
        account_type: ""
      }
    })
    this.state.currentUser && this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        user_id: this.state.currentUser.user_id
      }
    }))
    localStorage.setItem("jwt", userData.token);
    this.handleChangeView();
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.userForm);
    this.handleLogin();
    this.handleChangeView();
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userForm: {
        ...prevState.userForm,
        [name]: value
      }
    }));
  }

  toRegisterView = () => {
    this.setState({
      view: {
        loginView: false,
        registerView: true,
        formView: false,
        thankyouView: false,
        dashboardView: false
      }
    })
  }


  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  handleSubmit = async () => {
    const resp = await postLog(this.state.formData);
    console.log(resp);
    this.setState({
      view: {
        loginView: false,
        registerView: false,
        formView: false,
        thankyouView: true,
        dashboardView: false
      }
    })
  }

  handleChangeView = () => {
    this.setState({
      view: {
        loginView: false,
        registerView: false,
        formView: true,
        thankyouView: false,
        dashboardView: false
      }
    })
  }

  backtoLogin = (ev) => {
    ev.preventDefault();
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null,
      view: {
        loginView: true,
        registerView: false,
        formView: false,
        thankyouView: false,
        dashboardView: false
      },
      formData: {
        username: "",
        feeling_scale: "",
        feelings: "",
        comment: ""
      }
    })
  }

  todashboardView = (ev) => {
    ev.preventDefault();
    this.setState({
      view: {
        loginView: false,
        registerView: false,
        formView: false,
        thankyouView: false,
        dashboardView: true
      },
    })
  }

  setFeelings = (ev) => {
    ev.preventDefault();
    const feeling = ev.target.name;
    this.state.formData.feelings.indexOf(feeling) === -1 ?
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          feelings: [...prevState.formData.feelings, feeling]
        }
      }))
      :
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          feelings: prevState.formData.feelings.filter(f => f !== feeling)
        }
      }))
  }

  setScale = (ev) => {
    let scale = ev;
    if (!scale) {
      scale = 0;
    }
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        feeling_scale: scale
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <Burger
          currentUser={this.state.currentUser}
          logout={this.backtoLogin}
          todashboardView={this.todashboardView}
        />
        {this.state.view.loginView &&
          <Login
            onChange={this.authHandleChange}
            account_type={this.state.userForm.account_type}
            username={this.state.userForm.username}
            onSubmit={this.handleLogin}
            password={this.state.userForm.password}
            toRegisterView={this.toRegisterView}
          />
        }
        {this.state.view.registerView &&
          <Register
            onChange={this.authHandleChange}
            onSubmit={this.handleRegister}
            backtoLogin={this.backtoLogin}
            username={this.state.userForm.username}
            email={this.state.userForm.email}
            password={this.state.userForm.password}
            account_type={this.state.userForm.account_type}
          />
        }
        {this.state.view.formView &&
          <>
            <Scaler
              onChange={this.handleChange}
              feeling_scale={this.state.formData.feeling_scale}
              setScale={this.setScale}
            />
            <Wordbank
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              feelings={this.state.formData.feelings}
              setFeelings={this.setFeelings}
              comment={this.state.formData.comment}
            />

          </>
        }
        {this.state.view.thankyouView &&
          <Thankyou
            nextButton={this.backtoLogin}

          />
        }
      </div>
    );
  }
}

export default App;
