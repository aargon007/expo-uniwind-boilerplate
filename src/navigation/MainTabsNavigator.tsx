import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { useUniwind } from "uniwind";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { MainTabsParamList } from "./types";
import HomeScreen from "@/src/features/home/screens/HomeScreen";
import ProfileScreen from "@/src/features/profile/screens/ProfileScreen";
import Icon from "@/src/shared/components/ui/Icon";
import type { IconName } from "@/src/shared/components/ui/Icon";
import { getTabBarHeight, TAB_ICON_SIZE } from "@/src/constants/variable";

const Tab = createBottomTabNavigator<MainTabsParamList>();

const MainTabsNavigator = () => {
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
                lazy: true,
                freezeOnBlur: false,
                popToTopOnBlur: true,
                tabBarHideOnKeyboard: true,
                tabBarShowIcon: true,
                tabBarShowLabel: true,
                tabBarAllowFontScaling: false,
                tabBarAccessibilityLabel: `${route.name} tab`,
                tabBarButtonTestID: `${route.name.toLowerCase()}-tab-button`,
                tabBarActiveTintColor: navigationTheme.colors.text,
                tabBarInactiveTintColor: navigationTheme.colors.border,
                tabBarActiveBackgroundColor: navigationTheme.colors.card,
                tabBarInactiveBackgroundColor: navigationTheme.colors.card,
                tabBarStyle: {
                    borderTopWidth: 0.5,
                    borderTopColor: navigationTheme.colors.border,
                    backgroundColor: navigationTheme.colors.card,
                    height: tabBarHeight,
                },
                tabBarItemStyle: {
                    paddingTop: 4,
                },
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
                component={HomeScreen}
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
                component={ProfileScreen}
                options={{
                    title: "Profile",
                    tabBarLabel: "Profile",
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabsNavigator;
