import React, { Component } from 'react';

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>The Lord of the Rings</li>
          <li>I, robot</li>
          <li>The art of war</li>
        </ul>
      </div>
    );
  }

}

export default BookList;