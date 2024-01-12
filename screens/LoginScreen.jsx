import { View, Text, Image } from "@gluestack-ui/themed";
import React from "react";
import { styles } from "../assets/Stylesheet";
import login_logo from "../assets/images/login_logo.png";
import LoginForm from "../components/organisms/LoginForm/LoginForm";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.login_container}>
      <Image
        alt="Logo Active"
        role="img"
        source={login_logo}
        style={styles.image}
      ></Image>
      <LoginForm navigation={navigation}></LoginForm>
    </View>
  );
}
