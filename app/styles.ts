import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00FF88", 
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    color: "#A0A0A0", 
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#E0E0E0", 
    textAlign: "center",
    lineHeight: 24,
  },
  logo: {
    width:150,
    height:150,
  },
});

export default styles;
