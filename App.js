import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import HomeRoot from "./screens/HomeRoot";
import GoalScreenRoot from "./screens/GoalScreenRoot";
import LogoutScreen from "./screens/LogoutScreen";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeRoot} options={{ tabBarIcon: "run" }}></Tab.Screen>
          <Tab.Screen name="GoalRoot" component={GoalScreenRoot} options={{ tabBarIcon: "flag-checkered" }}></Tab.Screen>
          <Tab.Screen name="Logout" component={LogoutScreen} options={{ tabBarIcon: "logout" }}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
