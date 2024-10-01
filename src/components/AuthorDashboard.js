// src/components/AuthorDashboard.js
import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthorContext } from "../context/AuthorContext";
import { Card, Button } from "react-bootstrap";

// Validation schema for author form using Yup
const authorSchema = Yup.object().shape({
  name: Yup.string().required("Author name is required"),
  birthDate: Yup.date().required("Birth date is required"),
  biography: Yup.string().required("Biography is required"),
});

const AuthorDashboard = () => {
  const { authors, setAuthors } = useContext(AuthorContext);

  // Add or edit an author
  const handleFormSubmit = (values, { resetForm }) => {
    setAuthors([...authors, values]);
    resetForm();
  };

  // Delete an author
  const handleDelete = (index) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Manage Authors</h2>
      <Formik
        initialValues={{ name: "", birthDate: "", biography: "" }}
        validationSchema={authorSchema}
        onSubmit={handleFormSubmit}
      >
        {() => (
          <Form>
            <Card className="p-3 mb-4">
              <div className="mb-3">
                <label>Name</label>
                <Field name="name" className="form-control" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Birth Date</label>
                <Field name="birthDate" type="date" className="form-control" />
                <ErrorMessage name="birthDate" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label>Biography</label>
                <Field name="biography" as="textarea" className="form-control" />
                <ErrorMessage name="biography" component="div" className="text-danger" />
              </div>

              <Button type="submit" variant="primary">
                Add Author
              </Button>
            </Card>
          </Form>
        )}
      </Formik>

      <h3>Author List</h3>
      <ul className="list-group">
        {authors.length > 0 ? (
          authors.map((author, index) => (
            <li key={index} className="list-group-item">
              <h5>{author.name}</h5>
              <p>Born: {author.birthDate}</p>
              <p>{author.biography}</p>
              <Button variant="danger" onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </li>
          ))
        ) : (
          <p>No authors available.</p>
        )}
      </ul>
    </div>
  );
};

export default AuthorDashboard;
