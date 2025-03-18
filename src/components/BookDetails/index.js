import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const BookDetails = ({ book, onBorrow }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: book.cover }} style={styles.coverImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>By {book.author}</Text>
        <Text style={styles.year}>Published: {book.published_year}</Text>
        <Text style={styles.genre}>Genre: {book.genre}</Text>
        <Text style={styles.pageCount}>Pages: {book.page_count}</Text>
        <Text style={styles.description}>{book.description}</Text>
      </View>

      <TouchableOpacity style={styles.borrowButton} onPress={onBorrow}>
        <Text style={styles.borrowButtonText}>Borrow</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BookDetails;
