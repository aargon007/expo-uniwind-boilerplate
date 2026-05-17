import "./global.css"
import { useEffect } from 'react';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/src/lib/queryClient'
import { useUniwind } from "uniwind";
import RootNavigator from "./src/navigation/RootNavigator";
import { ErrorBoundary } from "./src/components/shared/ErrorBoundary";
import ToastProvider from "./src/components/shared/ToastProvider";

// Keep the splash screen visible while fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { theme } = useUniwind();
  const [loaded] = useFonts({
    "Inter-Black": require("@/assets/fonts/Inter-Black.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // Hide the splash screen
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView className="flex-1 bg-bg">
      <SafeAreaProvider>
        <ErrorBoundary onError={(error) => console.error('App Error:', error)}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
              <RootNavigator />
              <ToastProvider />
            </NavigationContainer>
          </QueryClientProvider>
        </ErrorBoundary>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
