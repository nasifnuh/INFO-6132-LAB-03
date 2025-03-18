import React, { useContext } from "react";
import { View, Alert } from "react-native";

import BookDetails from "@/components/BookDetails";

import { BooksContext } from "@/context/BooksContext";

import styles from "./styles";

const DetailsScreen = ({ route }) => {
  const { book } = route.params;
  const { addBook } = useContext(BooksContext);

  const handleBorrow = () => {
    const result = addBook(book);
    if (result === "limitReached") {
      Alert.alert("Limit Reached", "You cannot borrow more than 3 books.");
    } else if (result === "alreadyBorrowed") {
      Alert.alert("Already Borrowed", "This book is already borrowed.");
    } else {
      Alert.alert("Success", "Book borrowed successfully!");
    }
  };

  return (
    <View style={styles.container}>
      <BookDetails book={book} onBorrow={handleBorrow} />
    </View>
  );
};

export default DetailsScreen;
