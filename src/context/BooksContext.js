import React, { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const addBook = (book) => {
    if (borrowedBooks.find((b) => b.id === book.id)) {
      return "alreadyBorrowed";
    }
    if (borrowedBooks.length >= 3) {
      return "limitReached";
    }
    setBorrowedBooks([...borrowedBooks, book]);
    return "success";
  };

  const removeBook = (bookId) => {
    setBorrowedBooks(borrowedBooks.filter((book) => book.id !== bookId));
  };

  return (
    <BooksContext.Provider
      value={{ borrowedBooks, addBook, removeBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
