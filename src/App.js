/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import * as R from 'ramda';
import { Button, Icon } from 'semantic-ui-react';
import getQuotes from './api/quote';
import Header from './components/Header';
import Quote from './components/Quote';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: 0,
    };

    this.changeSelectedQuote = this.changeSelectedQuote.bind(this);
  }

  componentDidMount() {
    getQuotes().then((data) => {
      this.setState({
        quotes: R.pathOr([], ['messages', 'non_personalized'], data),
      });
    });
  }

  changeSelectedQuote() {
    const newQuoteIndex = Math.floor(Math.random() * Math.floor(this.state.quotes.length));
    this.setState({
      selectedQuoteIndex: newQuoteIndex,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Quote text={this.state.quotes[this.state.selectedQuoteIndex]} />
        <Button onClick={this.changeSelectedQuote}>MORE WISDOM</Button>
        <Button
          color="twitter"
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?text=${this.state.quotes[this.state.selectedQuoteIndex]}`,
              '_blank',
            )}
        >
          <Icon name="twitter" />
          Tweet yourself a wisdom
        </Button>
      </div>
    );
  }
}

export default App;
