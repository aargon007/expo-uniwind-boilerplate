import "./global.css"
import { useEffect } from 'react';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RootNavigator from "./src/navigators/RootNavigator";
import { ErrorBoundary } from "./src/components/shared/ErrorBoundary";
import { View } from "react-native";

const queryClient = new QueryClient();

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
    <View className="flex-1 bg-bg">
      <ErrorBoundary
        onError={(error, errorInfo) => {
          // Log to your error tracking service
          console.error('App Error:', error);
          console.error('Error Info:', errorInfo);
        }}
      >
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </ErrorBoundary>
    </View>
  );
}