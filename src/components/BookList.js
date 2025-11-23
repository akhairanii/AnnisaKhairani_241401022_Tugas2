import React from 'react';
import {Link} from 'react-router-dom';

function BookList({ books, onEditBook, onDeleteBook }) {
  return (
    <div className="your-books-card">
      <h2>Your Books</h2>
      {books.length === 0 ? (
        <p>No books added yet. Add a new book to get started!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>AUTHOR</th>
              <th>PUBLICATION DATE</th>
              <th>PUBLISHER</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publicationDate}</td>
                <td>{book.publisher}</td>
                <td className="actions">
                  <button onClick={() => onEditBook(book.id)} className="edit-button">
                    ✏️
                  </button>
                  <button onClick={() => onDeleteBook(book.id)} className="delete-button">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookList;
