import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalScreen from "./GoalScreen";

export default function GoalScreenRoot() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Goal" component={GoalScreen} />
    </Stack.Navigator>
  );
}
