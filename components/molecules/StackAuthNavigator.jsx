import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";

export default function StackAuthNavigator(navigation) {
  console.log(navigation);
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        navigation={navigation}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        navigation={navigation}
      />
    </Stack.Navigator>
  );
}
