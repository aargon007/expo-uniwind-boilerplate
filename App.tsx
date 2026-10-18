import './global.css';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/src/lib/queryClient';
import { useAppNavigationTheme } from '@/src/navigation/useAppNavigationTheme';
import RootNavigator from './src/navigation/RootNavigator';
import { ErrorBoundary } from './src/components/shared/ErrorBoundary';
import QueryLifecycle from './src/components/shared/QueryLifecycle';
import StatusBar from './src/components/shared/StatusBar';
import ToastProvider from './src/components/shared/ToastProvider';

SplashScreen.preventAutoHideAsync().catch(console.warn);

export default function App() {
    const navigationTheme = useAppNavigationTheme();

    useEffect(() => {
        // The app uses system fonts, so startup never waits on an unused font asset.
        SplashScreen.hideAsync().catch(console.warn);
    }, []);

    return (
        <GestureHandlerRootView className="flex-1 bg-bg">
            <SafeAreaProvider>
                <KeyboardProvider>
                    <ErrorBoundary>
                        <QueryClientProvider client={queryClient}>
                            <QueryLifecycle />
                            <StatusBar />
                            <NavigationContainer theme={navigationTheme}>
                                <RootNavigator />
                                <ToastProvider />
                            </NavigationContainer>
                        </QueryClientProvider>
                    </ErrorBoundary>
                </KeyboardProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
