//src/app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Untuk styling dasar
import { useState } from 'react';
import AddNewBookForm from './components/addNewBookForm';
import BookList from './components/BookList';
import EditBookModal from './components/EditBookModal';
import BookDetail from './components/BookDetail';

function App() {
  //data dummy
  const [books, setBooks] = useState([
    { id: 1, title: 'Bumi', author: 'Annisa Khairani', publicationDate: '2010-01-01', publisher: 'Gramedia' }   ,
  ]);

  //modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEditBook = (id) => {
    const book = books.find((b) => b.id === id);
    setBookToEdit(book);
    setShowEditModal(true);
  };

  const handleSaveEditedBook = (id, updatedData) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...updatedData } : book))
    );
    setShowEditModal(false);
    setBookToEdit(null);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setBookToEdit(null);
  };

  return (
    <Router>
          <div className="app-container">
      <header className="app-header">
        <h1><Link to="/" style={{ textDecoration: 'none', color: '#333' }}> Book Manager</Link></h1>
        <p>atur koleksi bukumu</p>
        </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
            <AddNewBookForm onAddBook={handleAddBook} />
            <BookList books={books} onDeleteBook={handleDeleteBook} onEditBook={handleEditBook} />
            </>
          } />
          <Route path="/book/:id" element= {<BookDetail books={books} />} /> 
        </Routes>
      </main>

      {showEditModal && bookToEdit && (
          <EditBookModal
          book={bookToEdit}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditedBook}
          />  
        )}
      </div>
    </Router>
  );
}

export default App;
