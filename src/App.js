/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import * as R from 'ramda';
import getQuotes from './api/quote';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuote: 0,
    };
  }

  componentDidMount() {
    getQuotes().then((data) => {
      this.setState({
        quotes: R.pathOr([], ['messages', 'non_personalized'], data),
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
