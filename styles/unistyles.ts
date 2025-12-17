import { StyleSheet } from 'react-native-unistyles'

// Define your color palette
const lightTheme = {
    colors: {
        // Primary colors
        primary: '#007AFF',
        primaryLight: '#4DA3FF',
        primaryDark: '#0056CC',

        // Secondary colors
        secondary: '#FF9500',
        secondaryLight: '#FFB84D',
        secondaryDark: '#CC7700',

        // Neutral colors
        background: '#FFFFFF',
        surface: '#F8F9FA',
        card: '#FFFFFF',

        // Text colors
        text: '#1C1C1E',
        textSecondary: '#6C6C70',
        textTertiary: '#8E8E93',

        // Status colors
        success: '#34C759',
        warning: '#FF9500',
        error: '#FF3B30',
        info: '#007AFF',

        // Border and divider
        border: '#E5E5EA',
        divider: '#F2F2F7',

        // Interactive states
        ripple: 'rgba(0, 122, 255, 0.1)',
        overlay: 'rgba(0, 0, 0, 0.4)',
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48,
    },
    borderRadius: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 24,
        full: 9999,
    },
    fontSize: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        xxl: 24,
        xxxl: 32,
    },
    fontWeight: {
        light: '300' as const,
        normal: '400' as const,
        medium: '500' as const,
        semibold: '600' as const,
        bold: '700' as const,
        extrabold: '800' as const,
    },
    shadows: {
        sm: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 2,
        },
        md: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 4,
        },
        lg: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 8,
        },
    },
}

const darkTheme = {
    ...lightTheme,
    colors: {
        // Primary colors (slightly adjusted for dark mode)
        primary: '#0A84FF',
        primaryLight: '#4DA3FF',
        primaryDark: '#0056CC',

        // Secondary colors
        secondary: '#FF9F0A',
        secondaryLight: '#FFB84D',
        secondaryDark: '#CC7700',

        // Dark mode backgrounds
        background: '#000000',
        surface: '#1C1C1E',
        card: '#2C2C2E',

        // Dark mode text
        text: '#FFFFFF',
        textSecondary: '#EBEBF5',
        textTertiary: '#8E8E93',

        // Status colors (adjusted for dark mode)
        success: '#30D158',
        warning: '#FF9F0A',
        error: '#FF453A',
        info: '#64D2FF',

        // Dark mode borders
        border: '#38383A',
        divider: '#2C2C2E',

        // Interactive states
        ripple: 'rgba(10, 132, 255, 0.15)',
        overlay: 'rgba(0, 0, 0, 0.6)',
    },
}

// Breakpoints for responsive design
const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
}

const appThemes = {
    light: lightTheme,
    dark: darkTheme
}

type AppBreakpoints = typeof breakpoints
type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes { }
    export interface UnistylesBreakpoints extends AppBreakpoints { }
}

StyleSheet.configure({
    settings: {
        initialTheme: 'light',
    },
    breakpoints,
    themes: appThemes,
})