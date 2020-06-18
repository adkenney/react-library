import React from 'react';

class TableRow extends React.Component {
  render() {
    const { book } = this.props;

    return (
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.pages}</td>
      </tr>
    );
  }
}

class Table extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <div>
        <table style={{ border: '1px solid black' }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <TableRow book={book} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
