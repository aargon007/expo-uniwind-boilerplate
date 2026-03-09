import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { useUniwind } from "uniwind";
import type { BottomTabParamList } from "./BottomTabParamList";
import Home from "@/src/screens/Home";
import Profile from "@/src/screens/Profile";
import Icon from "@/src/components/ui/Icon";
import type { IconName } from "@/src/components/ui/Icon";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
    const { theme } = useUniwind();
    const isDark = theme === "dark";

    const colors = {
        activeTint: isDark ? "#F9FAFB" : "#111827",
        inactiveTint: isDark ? "#9CA3AF" : "#6B7280",
        activeBg: isDark ? "#1F2937" : "#E5E7EB",
        inactiveBg: "transparent",
        barBg: isDark ? "#111827" : "#FFFFFF",
        border: isDark ? "#374151" : "#E5E7EB",
        badgeBg: isDark ? "#F87171" : "#DC2626",
        badgeText: "#FFFFFF",
    };

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                // Core tab-bar behavior
                lazy: true,
                freezeOnBlur: true,
                popToTopOnBlur: true,
                tabBarHideOnKeyboard: true,
                tabBarShowIcon: true,
                tabBarShowLabel: true,
                tabBarLabelPosition: "below-icon",
                tabBarAllowFontScaling: false,
                tabBarAccessibilityLabel: `${route.name} tab`,
                tabBarButtonTestID: `${route.name.toLowerCase()}-tab-button`,

                // Colors
                tabBarActiveTintColor: colors.activeTint,
                tabBarInactiveTintColor: colors.inactiveTint,
                // tabBarActiveBackgroundColor: colors.activeBg,
                // tabBarInactiveBackgroundColor: colors.inactiveBg,

                // Label style (size/weight/case/spacing)
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "700",
                    marginBottom: 2,
                    letterSpacing: 0.2,
                    textTransform: "none",
                },

                // Icon/item layout
                tabBarIconStyle: {
                    marginTop: 4,
                },
                tabBarItemStyle: {
                    marginHorizontal: 6,
                    marginVertical: 6,
                    borderRadius: 12,
                    paddingVertical: 2,
                },

                // Container style
                tabBarStyle: {
                    height: Platform.OS === "ios" ? 84 : 64,
                    paddingTop: 4,
                    paddingBottom: Platform.OS === "ios" ? 20 : 8,
                    borderTopWidth: 1,
                    borderTopColor: colors.border,
                    backgroundColor: colors.barBg,
                    elevation: 8,
                    shadowColor: "#000000",
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.08,
                    shadowRadius: 8,
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
                        backgroundColor: colors.badgeBg,
                        color: colors.badgeText,
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
