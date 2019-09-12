import React, { Component } from 'react';
import { postLog } from './services/api';

import Scaler from './Scaler';
import Login from './Login';
import Wordbank from './Wordbank';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        username: "",
        feeling_scale: "",
        feelings: "",
        comment: ""
      },
      view: {
        loginView: true,
        formView: false
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
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
        loginView: true,
        formView: false
      }
    })
  }

  handleChangeView = () => {
    this.setState({
      view: {
        loginView: false,
        formView: true
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.view.loginView &&
          <Login
            onChange={this.handleChange}
            nextButton={this.handleChangeView}
            username={this.state.formData.username}
          />
        }
        {this.state.view.formView &&
          <>
            <Scaler
              onChange={this.handleChange}
              feeling_scale={this.state.formData.feeling_scale}
            />
            <Wordbank
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              comment={this.state.formData.comment}
            />
          </>
        }
      </div>
    );
  }
}

export default App;
