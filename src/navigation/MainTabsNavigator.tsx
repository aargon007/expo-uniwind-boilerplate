import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useResolveClassNames } from 'uniwind';
import { useTheme } from '@react-navigation/native';
import type { MainTabsParamList } from './types';
import HomeScreen from '@/src/features/home/screens/HomeScreen';
import ExpoUIScreen from '@/src/features/expo-ui/screens/ExpoUIScreen';
import ProfileScreen from '@/src/features/profile/screens/ProfileScreen';
import Icon, { type IconName } from '@/src/components/ui/Icon';
import { TAB_ICON_SIZE } from '@/src/constants/variable';

const Tab = createBottomTabNavigator<MainTabsParamList>();

const MainTabsNavigator = () => {
    const navigationTheme = useTheme();
    const { color: inactiveColor } = useResolveClassNames('text-text-secondary');
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                animation: 'shift',
                lazy: true,
                freezeOnBlur: false,
                popToTopOnBlur: true,
                tabBarHideOnKeyboard: true,
                tabBarShowIcon: true,
                tabBarShowLabel: true,
                tabBarAllowFontScaling: true,
                tabBarAccessibilityLabel: `${route.name} tab`,
                tabBarButtonTestID: `${route.name.toLowerCase()}-tab-button`,
                tabBarActiveTintColor: navigationTheme.colors.text,
                tabBarInactiveTintColor: typeof inactiveColor === 'string' ? inactiveColor : undefined,
                tabBarActiveBackgroundColor: navigationTheme.colors.card,
                tabBarInactiveBackgroundColor: navigationTheme.colors.card,
                tabBarStyle: {
                    borderTopWidth: 0.5,
                    borderTopColor: navigationTheme.colors.border,
                    backgroundColor: navigationTheme.colors.card,
                },
                tabBarItemStyle: {
                    paddingTop: 4,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    letterSpacing: 0.2,
                    textTransform: 'none',
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName: IconName = 'ellipse';

                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                    }

                    if (route.name === 'ExpoUI') {
                        iconName = focused ? 'apps-sharp' : 'apps-outline';
                    }

                    if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={TAB_ICON_SIZE} color={color} />;
                },
            })}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarLabel: 'Home',
                    tabBarBadge: 2,
                    tabBarBadgeStyle: {
                        backgroundColor: navigationTheme.colors.notification,
                        color: navigationTheme.colors.card,
                        fontSize: 10,
                        fontWeight: '700',
                    },
                }}
            />

            <Tab.Screen
                name="ExpoUI"
                component={ExpoUIScreen}
                options={{
                    title: 'Expo UI',
                    tabBarLabel: 'Expo UI',
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    tabBarLabel: 'Profile',
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabsNavigator;
