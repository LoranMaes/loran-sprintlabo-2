import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  login_container: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  loginform: {
    padding: 36,
    gap: 8
  },
  loginform_buttons: {
    gap: 8,
    paddingLeft: "50%"
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
  }
});
