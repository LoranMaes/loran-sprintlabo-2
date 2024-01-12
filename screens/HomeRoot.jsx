import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import AddWorkoutScreen from "./AddWorkoutScreen";

export default function HomeRoot() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Input" }}
      />
      <Stack.Screen
        name="AddWorkoutScreen"
        component={AddWorkoutScreen}
        options={{ headerTitle: "" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
