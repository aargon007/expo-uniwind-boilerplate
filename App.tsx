import "./global.css"
import { useEffect } from 'react';
import { useFonts } from "expo-font";
import { View } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useUniwind } from "uniwind";
import RootNavigator from "./src/navigation/RootNavigator";
import { ErrorBoundary } from "./src/shared/components/app/ErrorBoundary";
import ToastProvider from "./src/shared/components/app/ToastProvider";

const queryClient = new QueryClient();

// Keep the splash screen visible while fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { theme } = useUniwind();
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
          <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
                <RootNavigator />
              </NavigationContainer>
              <ToastProvider />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </View>
  );
}
