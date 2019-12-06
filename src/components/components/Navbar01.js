import React, { Component } from 'react'; // imrc
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component { //cc
  
  static contextType = ThemeContext; // this is not the provider; export const ThemeContext = createContext();

  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;

    const theme = isLightTheme ? light : dark; 

    return(
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
