import React, { useState } from 'react';

function AddNewBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [publisher, setPublisher] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !publicationDate || !publisher) {
      alert('Please fill in all fields.');
      return;
    }
    const newBook = {
      id: Date.now(), // ID unik 
      title,
      author,
      publicationDate,
      publisher,
    };
    onAddBook(newBook); // Panggil fungsi dari parent untuk nambah buku
    setTitle('');
    setAuthor('');
    setPublicationDate('');
    setPublisher('');
  };

  return (
    <div className="add-new-book-card">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="publicationDate">Publication Date (YYYY-MM-DD)</label>
          <input
            type="date" // input tanggal
            id="publicationDate"
            placeholder="Publication date"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="publisher">Publisher</label>
          <input
            type="text"
            id="publisher"
            placeholder="Publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
        </div>
        <button type="submit" className="add-book-button">
          + Add Book
        </button>
      </form>
    </div>
  );
}

export default AddNewBookForm;