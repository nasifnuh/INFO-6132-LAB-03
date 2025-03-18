import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BooksProvider } from "@/context/BooksContext";

import HomeScreen from "@/screens/HomeScreen";
import DetailsScreen from "@/screens/DetailsScreen";
import BorrowedScreen from "@/screens/BorrowedScreen";

import styles from "./styles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BooksProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: () => (
                <Text style={styles.header}>📚 Library</Text>
              ),
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Borrowed" component={BorrowedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BooksProvider>
  );
}
