import React, { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from "react-native"
import { StyleSheet, UnistylesRuntime, useUnistyles } from "react-native-unistyles"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/navigators/type"
import Container from "../component/shared/Container"
import { Button } from "../component/ui/Button"

type RouteProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: RouteProps) => {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
    const { theme } = useUnistyles();

    const handleButtonPress = (action: string) => {
        console.log(`${action} pressed`)

        // Simulate loading for demo
        if (action.includes('loading-demo')) {
            setLoadingStates(prev => ({ ...prev, [action]: true }))
            setTimeout(() => {
                setLoadingStates(prev => ({ ...prev, [action]: false }))
            }, 2000)
        }
    };

    const toggleTheme = () => {
        UnistylesRuntime.setTheme(UnistylesRuntime.themeName === 'light' ? 'dark' : 'light')
    };

    // Package information
    const packageInfo = {
        name: "native-expo-typescript",
        version: "1.0.0",
        author: "Md Muhaiminul",
        dependencies: {
            expo: "^54.0.1",
            react: "19.1.0",
            "react-native": "0.81.4",
            "react-native-unistyles": "^3.0.12",
            "@react-navigation/native": "^7.1.17",
            "@reduxjs/toolkit": "^2.9.0",
        }
    };

    const quickActions = [
        { title: "Profile", icon: "👤", action: "profile" },
        { title: "Settings", icon: "⚙️", action: "settings" },
        { title: "Notifications", icon: "🔔", action: "notifications" },
        { title: "Help", icon: "❓", action: "help" },
    ];

    return (
        <Container>
            <StatusBar
                barStyle={UnistylesRuntime.themeName === 'light' ? 'dark-content' : 'light-content'}
                backgroundColor={theme.colors.background}
            />

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Header Section */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Button Showcase 🚀</Text>
                        <Text style={styles.subtitle}>Unistyles v3 + React Native</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.themeToggle}
                        onPress={toggleTheme}
                    >
                        <Text style={styles.themeIcon}>
                            {UnistylesRuntime.themeName === 'light' ? '🌙' : '☀️'}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Package Info Card */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>📦 Package Information</Text>
                    <View style={styles.packageCard}>
                        <Text style={styles.packageName}>{packageInfo.name}</Text>
                        <Text style={styles.packageVersion}>Version: {packageInfo.version}</Text>
                        <Text style={styles.packageAuthor}>By {packageInfo.author}</Text>

                        <View style={styles.dependenciesContainer}>
                            <Text style={styles.dependenciesTitle}>Key Dependencies:</Text>
                            {Object.entries(packageInfo.dependencies).map(([pkg, version]) => (
                                <View key={pkg} style={styles.dependencyItem}>
                                    <Text style={styles.dependencyName}>{pkg}</Text>
                                    <Text style={styles.dependencyVersion}>{version}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Button Variants Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🎨 Button Variants</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Primary Button"
                            variant="primary"
                            size="md"
                            fullWidth
                            onPress={() => handleButtonPress('primary')}
                        />

                        <Button
                            title="Secondary Button"
                            variant="secondary"
                            size="md"
                            fullWidth
                            onPress={() => handleButtonPress('secondary')}
                        />

                        <Button
                            title="Outline Button"
                            variant="outline"
                            size="md"
                            fullWidth
                            onPress={() => handleButtonPress('outline')}
                        />

                        <Button
                            title="Ghost Button"
                            variant="ghost"
                            size="md"
                            fullWidth
                            onPress={() => handleButtonPress('ghost')}
                        />
                    </View>
                </View>

                {/* Button Sizes Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>📏 Button Sizes</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Small Button"
                            variant="primary"
                            size="sm"
                            fullWidth
                            onPress={() => handleButtonPress('small')}
                        />

                        <Button
                            title="Medium Button"
                            variant="primary"
                            size="md"
                            fullWidth
                            onPress={() => handleButtonPress('medium')}
                        />

                        <Button
                            title="Large Button"
                            variant="primary"
                            size="lg"
                            fullWidth
                            onPress={() => handleButtonPress('large')}
                        />
                    </View>
                </View>

                {/* Button States Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>⚡ Button States</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Normal State"
                            variant="primary"
                            size="md"
                            fullWidth
                            onPress={() => handleButtonPress('normal')}
                        />

                        <Button
                            title="Loading State"
                            variant="primary"
                            size="md"
                            fullWidth
                            loading={loadingStates['loading-demo-1']}
                            onPress={() => handleButtonPress('loading-demo-1')}
                        />

                        <Button
                            title="Disabled Button"
                            variant="primary"
                            size="md"
                            fullWidth
                            disabled={true}
                            onPress={() => handleButtonPress('disabled')}
                        />

                        <Button
                            title="Outline Loading"
                            variant="outline"
                            size="md"
                            fullWidth
                            loading={loadingStates['loading-demo-2']}
                            onPress={() => handleButtonPress('loading-demo-2')}
                        />
                    </View>
                </View>

                {/* Width Variations Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>↔️ Width Variations</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Full Width Button"
                            variant="secondary"
                            size="md"
                            fullWidth={true}
                            onPress={() => handleButtonPress('full-width')}
                        />

                        <View style={styles.buttonRow}>
                            <Button
                                title="Auto Width"
                                variant="outline"
                                size="md"
                                fullWidth={false}
                                onPress={() => handleButtonPress('auto-width-1')}
                            />
                            <Button
                                title="Auto Width"
                                variant="ghost"
                                size="md"
                                fullWidth={false}
                                onPress={() => handleButtonPress('auto-width-2')}
                            />
                        </View>

                        <View style={styles.buttonRow}>
                            <Button
                                title="Short"
                                variant="primary"
                                size="sm"
                                onPress={() => handleButtonPress('short-1')}
                            />
                            <Button
                                title="Medium Length"
                                variant="secondary"
                                size="sm"
                                onPress={() => handleButtonPress('medium-length')}
                            />
                            <Button
                                title="Long"
                                variant="outline"
                                size="sm"
                                onPress={() => handleButtonPress('long-1')}
                            />
                        </View>
                    </View>
                </View>

                {/* Mixed Examples Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🎭 Mixed Examples</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonRow}>
                            <Button
                                title="Cancel"
                                variant="ghost"
                                size="lg"
                                onPress={() => handleButtonPress('cancel')}
                            />
                            <Button
                                title="Confirm"
                                variant="primary"
                                size="lg"
                                loading={loadingStates['confirm-loading']}
                                onPress={() => handleButtonPress('confirm-loading')}
                            />
                        </View>

                        <View style={styles.buttonRow}>
                            <Button
                                title="Delete"
                                variant="outline"
                                size="md"
                                onPress={() => handleButtonPress('delete')}
                            />
                            <Button
                                title="Edit"
                                variant="secondary"
                                size="md"
                                onPress={() => handleButtonPress('edit')}
                            />
                            <Button
                                title="Save"
                                variant="primary"
                                size="md"
                                onPress={() => handleButtonPress('save')}
                            />
                        </View>
                    </View>
                </View>

                {/* Quick Actions Grid */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🚀 Quick Actions</Text>
                    <View style={styles.quickActionsGrid}>
                        {quickActions.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.quickActionItem}
                                onPress={() => handleButtonPress(item.action)}
                            >
                                <Text style={styles.quickActionIcon}>{item.icon}</Text>
                                <Text style={styles.quickActionTitle}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Built with ❤️ using React Native, Expo & Unistyles v3
                    </Text>
                    <Text style={styles.footerSubtext}>
                        Theme: {UnistylesRuntime.themeName} • Tap moon/sun to switch
                    </Text>
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create((theme, rt) => ({
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: theme.spacing.xl,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.lg,
        paddingTop: theme.spacing.md,
    },
    greeting: {
        fontSize: rt.fontScale * theme.fontSize.xxl,
        fontWeight: theme.fontWeight.bold,
        color: theme.colors.text,
        marginBottom: theme.spacing.xs,
    },
    subtitle: {
        fontSize: rt.fontScale * theme.fontSize.md,
        color: theme.colors.textSecondary,
    },
    themeToggle: {
        padding: theme.spacing.sm,
        borderRadius: theme.borderRadius.full,
        backgroundColor: theme.colors.surface,
    },
    themeIcon: {
        fontSize: 24,
    },
    section: {
        paddingHorizontal: theme.spacing.lg,
        marginBottom: theme.spacing.xl,
    },
    sectionTitle: {
        fontSize: rt.fontScale * theme.fontSize.lg,
        fontWeight: theme.fontWeight.semibold,
        color: theme.colors.text,
        marginBottom: theme.spacing.lg,
    },
    packageCard: {
        backgroundColor: theme.colors.card,
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.lg,
        ...theme.shadows.sm,
    },
    packageName: {
        fontSize: rt.fontScale * theme.fontSize.xl,
        fontWeight: theme.fontWeight.bold,
        color: theme.colors.primary,
        marginBottom: theme.spacing.xs,
    },
    packageVersion: {
        fontSize: rt.fontScale * theme.fontSize.md,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.xs,
    },
    packageAuthor: {
        fontSize: rt.fontScale * theme.fontSize.md,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.lg,
    },
    dependenciesContainer: {
        borderTopWidth: 1,
        borderTopColor: theme.colors.divider,
        paddingTop: theme.spacing.md,
    },
    dependenciesTitle: {
        fontSize: rt.fontScale * theme.fontSize.md,
        fontWeight: theme.fontWeight.semibold,
        color: theme.colors.text,
        marginBottom: theme.spacing.sm,
    },
    dependencyItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: theme.spacing.xs,
    },
    dependencyName: {
        fontSize: rt.fontScale * theme.fontSize.sm,
        color: theme.colors.text,
        fontWeight: theme.fontWeight.medium,
    },
    dependencyVersion: {
        fontSize: rt.fontScale * theme.fontSize.xs,
        color: theme.colors.textTertiary,
        fontFamily: 'monospace',
    },
    quickActionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing.md,
    },
    quickActionItem: {
        flex: 1,
        minWidth: '45%',
        backgroundColor: theme.colors.card,
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.lg,
        alignItems: 'center',
        ...theme.shadows.sm,
    },
    quickActionIcon: {
        fontSize: 32,
        marginBottom: theme.spacing.sm,
    },
    quickActionTitle: {
        fontSize: rt.fontScale * theme.fontSize.sm,
        fontWeight: theme.fontWeight.medium,
        color: theme.colors.text,
        textAlign: 'center',
    },
    buttonContainer: {
        gap: theme.spacing.md,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: theme.spacing.md,
    },
    footer: {
        padding: theme.spacing.lg,
        alignItems: 'center',
    },
    footerText: {
        fontSize: rt.fontScale * theme.fontSize.sm,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginBottom: theme.spacing.xs,
    },
    footerSubtext: {
        fontSize: rt.fontScale * theme.fontSize.xs,
        color: theme.colors.textTertiary,
        textAlign: 'center',
    },
}))

export default HomeScreen