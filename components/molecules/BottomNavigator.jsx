import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeRoot from "../../screens/HomeRoot";
import GoalScreenRoot from "../../screens/GoalScreenRoot";
import LogoutScreen from "../../screens/LogoutScreen";
import { useTheme } from "react-native-paper";

export default function BottomNavigator() {
  const Tab = createMaterialBottomTabNavigator();
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";

  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#E6EFF1" }}
      activeColor="#70C031"
    >
      <Tab.Screen
        name="HomeRoot"
        component={HomeRoot}
        options={{ tabBarIcon: "run", tabBarLabel: "Input" }}
      ></Tab.Screen>
      <Tab.Screen
        name="GoalRoot"
        component={GoalScreenRoot}
        options={{ tabBarIcon: "flag-checkered", tabBarLabel: "Goal" }}
      ></Tab.Screen>
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ tabBarIcon: "logout" }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
