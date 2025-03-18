import React, { useContext } from "react";
import { View, Text, Alert } from "react-native";

import BorrowedBooks from "@/components/BorrowedBooks";

import { BooksContext } from "@/context/BooksContext";

import styles from "./styles";

const BorrowedScreen = () => {
  const { borrowedBooks, removeBook } = useContext(BooksContext);

  const handleReturn = (bookId) => {
    removeBook(bookId);
    Alert.alert("Returned", "Book returned successfully!");
  };

  return (
    <View style={styles.container}>
      {borrowedBooks.length === 0 ? (
        <Text style={styles.emptyText}>No borrowed books.</Text>
      ) : (
        <BorrowedBooks books={borrowedBooks} onReturn={handleReturn} />
      )}
    </View>
  );
};

export default BorrowedScreen;
