import { StyleSheet } from "react-native";

export default StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 2,
  },
  coverImage: {
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
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  author: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#007BFF",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
