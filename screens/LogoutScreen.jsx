import { View, Text } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../services/config/firebaseConfig";

export default function LogoutScreen() {
  signOut(auth);

  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
}
