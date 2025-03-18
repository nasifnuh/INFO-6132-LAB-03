import React from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const BorrowedBooks = ({ books, onReturn }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.cover }} style={styles.coverImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>By {item.author}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => onReturn(item.id)}>
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default BorrowedBooks;
