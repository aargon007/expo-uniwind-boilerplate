import "./global.css"
import { useEffect } from 'react';
import { useFonts } from "expo-font";
import { useColorScheme, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootNavigator from "./src/navigators/RootNavigator";
import { ErrorBoundary } from "./src/components/shared/ErrorBoundary";

const queryClient = new QueryClient();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const scheme = useColorScheme();
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
    <View className="flex-1 bg-bg">
      <ErrorBoundary
        onError={(error, errorInfo) => {
          // Log to your error tracking service
          console.error('App Error:', error);
        }}
      >
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
              <RootNavigator />
            </NavigationContainer>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </ErrorBoundary>
    </View>
  );
}