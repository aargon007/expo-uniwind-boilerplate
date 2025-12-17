import "./global.css"
import { useEffect } from 'react';
import { View } from "react-native";
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { DarkTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from '@/src/navigators/RootNavigator';
import { persistor, store } from '@/src/redux/store';
import { useFonts } from "expo-font";

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
    <View style={{ flex: 1 }}>
      <ThemeProvider value={DarkTheme}>
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
    </View>
  );
}