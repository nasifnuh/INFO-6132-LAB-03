import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import styles from "./styles";

const BookItem = ({ book, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: book.cover }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>By {book.author}</Text>
        <Text style={styles.genre}>{book.genre}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;
