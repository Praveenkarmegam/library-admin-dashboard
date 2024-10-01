// src/components/Library.js
import React, { useContext, useState } from "react";
import { Card, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { BookContext } from "../context/BookContext";
import { AuthorContext } from "../context/AuthorContext";

const Library = () => {
  const { books, setBooks } = useContext(BookContext);
  const { authors, setAuthors } = useContext(AuthorContext);

  const [editBook, setEditBook] = useState(null);
  const [editAuthor, setEditAuthor] = useState(null);

  const [showBookModal, setShowBookModal] = useState(false);
  const [showAuthorModal, setShowAuthorModal] = useState(false);

  // Delete Book
  const handleDeleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  // Delete Author
  const handleDeleteAuthor = (index) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  // Edit Book
  const handleEditBook = (index) => {
    setEditBook({ ...books[index], index });
    setShowBookModal(true);
  };

  // Edit Author
  const handleEditAuthor = (index) => {
    setEditAuthor({ ...authors[index], index });
    setShowAuthorModal(true);
  };

  // Save Edited Book
  const saveBook = () => {
    const updatedBooks = [...books];
    updatedBooks[editBook.index] = { ...editBook };
    setBooks(updatedBooks);
    setShowBookModal(false);
  };

  // Save Edited Author
  const saveAuthor = () => {
    const updatedAuthors = [...authors];
    updatedAuthors[editAuthor.index] = { ...editAuthor };
    setAuthors(updatedAuthors);
    setShowAuthorModal(false);
  };

  return (
    <div>
      <h2>Library Collection</h2>
      <Row>
        <Col>
          <h3>Books</h3>
          {books.length > 0 ? (
            books.map((book, index) => (
              <Card className="mb-3" key={index}>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Author: {book.author}
                  </Card.Subtitle>
                  <Card.Text>ISBN: {book.isbn}</Card.Text>
                  <Card.Text>Published on: {book.publicationDate}</Card.Text>
                  <Button variant="warning" onClick={() => handleEditBook(index)}>
                    Edit
                  </Button>{" "}
                  <Button variant="danger" onClick={() => handleDeleteBook(index)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No books available.</p>
          )}
        </Col>
        <Col>
          <h3>Authors</h3>
          {authors.length > 0 ? (
            authors.map((author, index) => (
              <Card className="mb-3" key={index}>
                <Card.Body>
                  <Card.Title>{author.name}</Card.Title>
                  <Card.Text>Born: {author.birthDate}</Card.Text>
                  <Card.Text>{author.biography}</Card.Text>
                  <Button variant="warning" onClick={() => handleEditAuthor(index)}>
                    Edit
                  </Button>{" "}
                  <Button variant="danger" onClick={() => handleDeleteAuthor(index)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No authors available.</p>
          )}
        </Col>
      </Row>

      {/* Book Edit Modal */}
      <Modal show={showBookModal} onHide={() => setShowBookModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editBook && (
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={editBook.title}
                  onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  value={editBook.author}
                  onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type="text"
                  value={editBook.isbn}
                  onChange={(e) => setEditBook({ ...editBook, isbn: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Publication Date</Form.Label>
                <Form.Control
                  type="date"
                  value={editBook.publicationDate}
                  onChange={(e) =>
                    setEditBook({ ...editBook, publicationDate: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBookModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={saveBook}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Author Edit Modal */}
      <Modal show={showAuthorModal} onHide={() => setShowAuthorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Author</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editAuthor && (
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editAuthor.name}
                  onChange={(e) => setEditAuthor({ ...editAuthor, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="date"
                  value={editAuthor.birthDate}
                  onChange={(e) =>
                    setEditAuthor({ ...editAuthor, birthDate: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Biography</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={editAuthor.biography}
                  onChange={(e) =>
                    setEditAuthor({ ...editAuthor, biography: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAuthorModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={saveAuthor}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Library;
