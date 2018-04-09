/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import * as R from 'ramda';
import { Button, Icon, Grid } from 'semantic-ui-react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import getQuotes from './api/quote';
import Header from './components/Header';
import Quote from './components/Quote';
import FaceContainer from './components/FaceContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: 0,
    };

    this.changeSelectedQuote = this.changeSelectedQuote.bind(this);
    this.buildAndSendTweet = this.buildAndSendTweet.bind(this);
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

  buildAndSendTweet() {
    const tweet = `"${this.state.quotes[this.state.selectedQuoteIndex]}" - @realDonaldTrump`;
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <FaceContainer onJawDrag={this.changeSelectedQuote} />
            </Grid.Column>
            <Grid.Column verticalAlign="middle" >
              <Quote text={this.state.quotes[this.state.selectedQuoteIndex]} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button
          color="twitter"
          onClick={this.buildAndSendTweet}
        >
          <Icon name="twitter" />
          Tweet yourself a wisdom
        </Button>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
