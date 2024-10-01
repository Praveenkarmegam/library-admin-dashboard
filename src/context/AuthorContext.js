// src/context/AuthorContext.js
import { createContext, useState } from "react";

export const AuthorContext = createContext();

const initialAuthors = [
  {
    name: "F. Scott Fitzgerald",
    birthDate: "1896-09-24",
    biography:
      "F. Scott Fitzgerald was an American novelist and short-story writer, widely regarded as one of the greatest American writers of the 20th century. He is best known for his novel 'The Great Gatsby.'",
  },
  {
    name: "Harper Lee",
    birthDate: "1926-04-28",
    biography:
      "Harper Lee was an American novelist best known for her 1960 novel 'To Kill a Mockingbird.' It won the Pulitzer Prize and has become a classic of modern American literature.",
  },
  {
    name: "George Orwell",
    birthDate: "1903-06-25",
    biography:
      "George Orwell was an English novelist and essayist, journalist and critic, known for his works '1984' and 'Animal Farm.' His real name was Eric Arthur Blair.",
  },
  {
    name: "J.D. Salinger",
    birthDate: "1919-01-01",
    biography:
      "J.D. Salinger was an American writer best known for his novel 'The Catcher in the Rye,' which has become a classic of American literature.",
  },
  {
    name: "Jane Austen",
    birthDate: "1775-12-16",
    biography:
      "Jane Austen was an English novelist known primarily for her six major novels, including 'Pride and Prejudice' and 'Sense and Sensibility.' Her biting social commentary and masterful use of irony mark her works.",
  },
];


export const AuthorProvider = ({ children }) => {
  const [authors, setAuthors] = useState(initialAuthors);

  return (
    <AuthorContext.Provider value={{ authors, setAuthors }}>
      {children}
    </AuthorContext.Provider>
  );
};
