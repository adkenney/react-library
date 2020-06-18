import React from 'react';

class FormButton extends React.Component {
  render() {
    return (
      <div>
        <button type="submit">Add Book</button>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form>
        <label for="title">Title:</label>
        <input type="text" name="title" required />
        <label for="author">Author:</label>
        <input type="text" name="author" required />
        <label for="pages">Pages:</label>
        <input type="number" name="pages" required />
        <button type="submit">Add Book</button>
      </form>
    );
  }
}
