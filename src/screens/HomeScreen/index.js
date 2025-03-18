import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";

import { db, ref, get } from "@/config/firebaseConfig";

import BookItem from "@/components/BookItem";

import styles from "./styles";

const HomeScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Borrowed")}>
          <Text style={styles.buttonText}>Borrowed</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const snapshot = await get(ref(db, "books"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const bookList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setBooks(bookList);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookItem
            book={item}
            onPress={() => navigation.navigate("Details", { book: item })}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
