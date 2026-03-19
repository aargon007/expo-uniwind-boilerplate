import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabsNavigator from "./MainTabsNavigator";
import type { RootStackParamList } from "./types";
import QueryScreen from "@/src/features/posts/screens/QueryScreen";
import TextScreen from "@/src/features/text/screens/TextScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="MainTabs"
            screenOptions={{
                headerShown: false,
                autoHideHomeIndicator: true,
                animation: "slide_from_right",
                animationDuration: 150,
            }}
        >
            <Stack.Screen
                name="MainTabs"
                component={MainTabsNavigator}
            />

            <Stack.Screen
                name="TextScreen"
                component={TextScreen}
            />

            <Stack.Screen
                name="QueryScreen"
                component={QueryScreen}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
