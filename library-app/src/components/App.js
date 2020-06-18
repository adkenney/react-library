import React from 'react';
import Table from './Table';

function App() {
  return (
    <div>
      <Table books={bookList} />
    </div>
  );
}

const bookList = [
  {
    title: 'Sample Title 1',
    author: 'Sample Author 2',
    pages: 200,
  },
  {
    title: 'Sample Title 2',
    author: 'Sample Author 2',
    pages: 300,
  },
  {
    title: 'Sample Title 3',
    author: 'Sample Author 3',
    pages: 400,
  },
];

export default App;
