import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 2,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 4,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  genre: {
    fontSize: 14,
    color: "#007BFF",
  },
});
