import React, { useState, useEffect } from 'react';

function EditBookModal({ book, onClose, onSave }) {
  // 1. Inisialisasi state dengan nilai buku yang akan diedit
  const [editedTitle, setEditedTitle] = useState(book.title);
  const [editedAuthor, setEditedAuthor] = useState(book.author);
  const [editedPublicationDate, setEditedPublicationDate] = useState(book.publicationDate);
  const [editedPublisher, setEditedPublisher] = useState(book.publisher);

  // 2. Gunakan useEffect untuk memastikan state terupdate jika buku yang diedit berubah (jika modal digunakan ulang)
  useEffect(() => {
    setEditedTitle(book.title);
    setEditedAuthor(book.author);
    setEditedPublicationDate(book.publicationDate);
    setEditedPublisher(book.publisher);
  }, [book]);

  // 3. Fungsi saat form disubmit (Disimpan)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Panggil fungsi onSave yang dikirim dari App.js
    onSave(book.id, {
      title: editedTitle,
      author: editedAuthor,
      publicationDate: editedPublicationDate,
      publisher: editedPublisher,
    });
    onClose(); // Tutup modal setelah disimpan
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Book</h2>
        <form onSubmit={handleSubmit}>
          {/* Input untuk Title */}
          <div className="form-group">
            <label htmlFor="editTitle">Title</label>
            <input
              type="Text"
              id="editTitle"
              placeholder='Masukkan judul buku'
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="editAuthor">Author</label>
            <input
              type="text"
              id="editAuthor"
              placeholder='Masukkan nama author'
              value={editedAuthor}
              onChange={(e) => setEditedAuthor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="editPublisher">Publication Date (YYY-MM-DD)</label>
            <input
              type="Date"
              id="editedPublicationDate"
              placeholder='Masukkan tanggal publikasi'
              value={editedPublicationDate}
              onChange={(e) => setEditedPublicationDate(e.target.value)}
            />
          </div>  
          <div className="form-group">
            <label htmlFor="editPublicationDate">Publisher</label>
            <input
              type="text"
              id="editedPublisher"
              placeholder='Masukkan nama penerbit'
              value={editedPublisher}
              onChange={(e) => setEditedPublisher(e.target.value)}
            />
          </div>  
         
          <div className="modal-actions">
            <button type="submit" className="save-button">Save Changes</button>
            <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBookModal;