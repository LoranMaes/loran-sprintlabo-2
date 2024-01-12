import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeRoot from "../../screens/HomeRoot";
import GoalScreenRoot from "../../screens/GoalScreenRoot";
import LogoutScreen from "../../screens/LogoutScreen";

export default function BottomNavigator() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeRoot"
        component={HomeRoot}
        options={{ tabBarIcon: "run" }}
      ></Tab.Screen>
      <Tab.Screen
        name="GoalRoot"
        component={GoalScreenRoot}
        options={{ tabBarIcon: "flag-checkered" }}
      ></Tab.Screen>
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ tabBarIcon: "logout" }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
