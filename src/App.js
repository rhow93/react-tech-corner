/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import * as R from 'ramda';
import getQuotes from './api/quote';
import Header from './components/Header.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    getQuotes().then((data) => {
      console.log(data);
      this.setState({
        quotes: R.pathOr([], ['messages', 'non_personalized'], data),
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header text="Columbia Road Tech Corner" />
      </div>
    );
  }
}

export default App;
