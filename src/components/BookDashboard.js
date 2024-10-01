// src/components/BookDashboard.js
import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BookContext } from "../context/BookContext";
import { Card, Button } from "react-bootstrap";

// Validation schema
const bookSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  isbn: Yup.string().required("ISBN is required"),
  publicationDate: Yup.date().required("Publication Date is required"),
});

const BookDashboard = () => {
  const { books, setBooks } = useContext(BookContext);
  const handleFormSubmit = (values, { resetForm }) => {
    setBooks([...books, values]);
    resetForm();
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <Formik
        initialValues={{ title: "", author: "", isbn: "", publicationDate: "" }}
        validationSchema={bookSchema}
        onSubmit={handleFormSubmit}
      >
        {() => (
          <Form>
            <Card className="p-3 mb-4">
              <div className="mb-3">
                <label>Title</label>
                <Field name="title" className="form-control" />
                <ErrorMessage name="title" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Author</label>
                <Field name="author" className="form-control" />
                <ErrorMessage name="author" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>ISBN</label>
                <Field name="isbn" className="form-control" />
                <ErrorMessage name="isbn" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Publication Date</label>
                <Field name="publicationDate" type="date" className="form-control" />
                <ErrorMessage name="publicationDate" component="div" className="text-danger" />
              </div>

              <Button type="submit" variant="primary">
                Add Book
              </Button>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookDashboard;
