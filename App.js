import { GluestackUIProvider, View } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import BottomNavigator from "./components/molecules/BottomNavigator";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/config/firebaseConfig";
import LoginScreen from "./screens/LoginScreen";
import { ActivityIndicator } from "react-native";
import StackAuthNavigator from "./components/molecules/StackAuthNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (loading) {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color="#015C6F"></ActivityIndicator>
          </View>
        ) : user ? (
          <BottomNavigator></BottomNavigator>
        ) : (
          <StackAuthNavigator></StackAuthNavigator>
        )}
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
