// src/context/BookContext.js
import { createContext, useState } from "react";

export const BookContext = createContext();

const initialBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publicationDate: "1925-04-10",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780060935467",
    publicationDate: "1960-07-11",
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publicationDate: "1949-06-08",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "9780316769488",
    publicationDate: "1951-07-16",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    publicationDate: "1813-01-28",
  },
];


export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(initialBooks);


  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};
