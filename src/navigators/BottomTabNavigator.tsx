import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUniwind } from "uniwind";
import Home from "@/src/screens/Home";
import Profile from "@/src/screens/Profile";
import Icon from "@/src/components/ui/Icon";
import type { IconName } from "@/src/components/ui/Icon";

export type BottomTabParamList = {
    Home: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
    const { theme } = useUniwind();
    const navigationTheme = useTheme();
    const insets = useSafeAreaInsets();
    const isAndroid = Platform.OS === "android";
    const androidBottomInset = isAndroid ? Math.max(insets.bottom, 16) : insets.bottom;
    const bottomPadding = isAndroid ? androidBottomInset : Math.max(insets.bottom, 20);
    const tabBarHeight = (isAndroid ? 56 : 60) + bottomPadding;

    return (
        <Tab.Navigator
            key={theme}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                // Core tab-bar behavior
                lazy: true,
                freezeOnBlur: false,
                popToTopOnBlur: true,
                tabBarHideOnKeyboard: true,
                tabBarShowIcon: true,
                tabBarShowLabel: true,
                tabBarAllowFontScaling: false,
                tabBarAccessibilityLabel: `${route.name} tab`,
                tabBarButtonTestID: `${route.name.toLowerCase()}-tab-button`,

                // Colors
                tabBarActiveTintColor: navigationTheme.colors.text,
                tabBarInactiveTintColor: navigationTheme.colors.border,

                // Label style (size/weight/case/spacing)
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "700",
                    marginBottom: isAndroid ? 4 : 2,
                    letterSpacing: 0.2,
                    textTransform: "none",
                },

                // Icon/item layout
                tabBarIconStyle: {
                    marginTop: isAndroid ? 2 : 4,
                },
                tabBarItemStyle: {
                    paddingTop: isAndroid ? 6 : 4,
                    paddingBottom: isAndroid ? 4 : 0,
                },

                // Container style
                tabBarStyle: {
                    height: tabBarHeight,
                    paddingTop: isAndroid ? 6 : 4,
                    paddingBottom: bottomPadding,
                    borderTopWidth: 1,
                    borderTopColor: navigationTheme.colors.border,
                    backgroundColor: navigationTheme.colors.card,
                    elevation: isAndroid ? 0 : undefined,
                    shadowOpacity: isAndroid ? 0 : 0.08,
                },

                tabBarIcon: ({ focused, size, color }) => {
                    let iconName: IconName = "ellipse";

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    }

                    if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    tabBarLabel: "Home",
                    tabBarBadge: 2,
                    tabBarBadgeStyle: {
                        backgroundColor: navigationTheme.colors.notification,
                        color: navigationTheme.colors.card,
                        fontSize: 10,
                        fontWeight: "700",
                    },
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: "Profile",
                    tabBarLabel: "Profile",
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
