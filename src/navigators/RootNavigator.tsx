import * as React from 'react';
import { type NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './RootStackParamList';
import TextScreen from '../screens/TextScreen';
import QueryScreen from '../screens/QueryScreen';
import BottomTabNavigator from "./BottomTabNavigator";

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                autoHideHomeIndicator: true,
                animation: "slide_from_right",
                animationDuration: 150
            }}
            initialRouteName="MainTabs"
        >
            <Stack.Screen
                name="MainTabs"
                component={BottomTabNavigator}
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

        </Stack.Navigator>
    );
};

export default RootNavigator;
