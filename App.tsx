import "./global.css"
import { useEffect } from 'react';
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/src/redux/store';
import { ThemeProvider } from '@/src/providers/ThemeProvider';
import RootNavigator from "./src/navigators/RootNavigator";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded] = useFonts({
    "Inter": require("@/assets/fonts/Inter-Black.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // Hide the splash screen
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  };

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
        <ThemeProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <NavigationContainer>
                <GestureHandlerRootView style={{ flex: 1 }}>
                  <RootNavigator />
                </GestureHandlerRootView>
              </NavigationContainer>
            </PersistGate>
          </Provider>
        </ThemeProvider>
    </SafeAreaProvider>
  );
}