import React, { Component } from 'react';
import HttpService from './services/http/http.services';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getUser = this.getUser.bind(this);
  }
  getUser() {
    return new HttpService().get('https://jsonplaceholder.typicode.com/users');
  }
  componentDidMount() {
    this.getUser().then(response => console.log(response));
  }
  render() {
    return (
        <div>App</div>
    );
  }
}

export default App;
