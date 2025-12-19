import * as React from 'react';
import { type NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './';
import Profile from '@/src/screens/Profile';
import Home from '@/src/screens/Home';
import TextScreen from '../screens/TextScreen';
import QueryScreen from '../screens/QueryScreen';

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                autoHideHomeIndicator: true,
                // animation: "slide_from_right",
                // animationDuration: 150
            }}
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="TextScreen"
                component={TextScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="QueryScreen"
                component={QueryScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    animation: 'slide_from_right',
                    animationDuration: 150,
                    gestureEnabled: false,
                    autoHideHomeIndicator: true,
                }}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
