import React, { Component } from 'react'; // imrc
import { ThemeContext } from '../contexts/ThemeContext';

/* 
  Aproches with this...
  
 1- With ThemeContext.Consumer we can use in functional components.
 2- We can consume multiple contexts in one component

 */ 

class Navbar extends Component { //cc
  
  render() {
    
    return(
      <ThemeContext.Consumer>{(context) => {
  
        const { isLightTheme, light, dark } = context;
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
        )
      }}
        
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
