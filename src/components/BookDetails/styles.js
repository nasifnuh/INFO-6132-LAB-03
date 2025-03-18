import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  coverImage: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    color: "#555",
    marginBottom: 8,
  },
  year: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  genre: {
    fontSize: 16,
    color: "#007BFF",
    marginBottom: 4,
  },
  pageCount: {
    fontSize: 16,
    color: "#28a745",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
    marginBottom: 20,
  },
  borrowButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  borrowButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
