import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';

class App extends Component {
  render() {
    return (
      <div classNane="App">
      <ThemeContextProvider>
        <Navbar/>
        <BookList/>
      </ThemeContextProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
