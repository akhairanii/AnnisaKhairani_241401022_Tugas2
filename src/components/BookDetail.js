import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetail({ books }) {
  const { id } = useParams(); // Mengambil ID dari URL
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-detail-container">
        <h2>Book Not Found</h2>
        <p>The book you are looking for does not exist.</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="book-detail-container">
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publication Date:</strong> {book.publicationDate}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}

export default BookDetail;