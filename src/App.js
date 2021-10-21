import './App.css';
import styled from '@emotion/styled';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          ScrollToBottom
        </button>
      </div>
    );
  }
}

export default App;
