import * as React from 'react';
import { type NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './type';
import Profile from '@/app/screens/Profile';
import Home from '@/app/screens/Home';

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                autoHideHomeIndicator: true,
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
