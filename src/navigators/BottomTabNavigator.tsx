import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useUniwind } from "uniwind";
import Home from "@/src/screens/Home";
import Profile from "@/src/screens/Profile";
import Icon from "@/src/components/ui/Icon";
import type { IconName } from "@/src/components/ui/Icon";
import { getTabBarHeight, TAB_ICON_SIZE } from "../constants/variable";

export type BottomTabParamList = {
    Home: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
    const { theme } = useUniwind();
    const navigationTheme = useTheme();
    const insets = useSafeAreaInsets();

    const tabBarHeight = getTabBarHeight({
        baseHeight: 55,
        bottomInset: insets.bottom,
    });

    return (
        <Tab.Navigator
            key={theme}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                animation: "shift",
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
                tabBarActiveBackgroundColor: navigationTheme.colors.card,
                tabBarInactiveBackgroundColor: navigationTheme.colors.card,
                
                // container style
                tabBarStyle: {
                    borderTopWidth: 0.5,
                    borderTopColor: navigationTheme.colors.border,
                    backgroundColor: navigationTheme.colors.card,
                    height: tabBarHeight,
                },
                // item style
                tabBarItemStyle: {
                    paddingTop: 4,
                },
                // label style (size/weight/case/spacing)
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                    letterSpacing: 0.2,
                    textTransform: "none",
                },

                tabBarIcon: ({ focused, color }) => {
                    let iconName: IconName = "ellipse";

                    if (route.name === "Home") {
                        iconName = focused ? "home-sharp" : "home-outline";
                    }

                    if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return (
                        <Icon
                            name={iconName}
                            size={TAB_ICON_SIZE}
                            color={color}
                        />
                    );
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
