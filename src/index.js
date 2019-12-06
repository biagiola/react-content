import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div classNane="App">
        <Navbar/>
        <BookList/>
        <p>hola</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
