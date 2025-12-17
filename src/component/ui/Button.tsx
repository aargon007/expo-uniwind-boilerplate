import type React from "react"
import { TouchableOpacity, Text, ActivityIndicator } from "react-native"
import { StyleSheet, useUnistyles } from "react-native-unistyles"

interface ButtonProps {
    title: string
    onPress: () => void
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg"
    loading?: boolean
    disabled?: boolean
    fullWidth?: boolean
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    fullWidth = false,
}) => {
    const { theme, rt } = useUnistyles();

    // Apply variants using useVariants hook
    styles.useVariants({
        variant,
        size,
        fullWidth,
        disabled: disabled || loading,
    })

    const getLoadingColor = () => {
        if (variant === "outline" || variant === "ghost") {
            return theme.colors.primary
        }
        return theme.colors.text === "#FFFFFF" ? "#FFFFFF" : theme.colors.background
    }

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={disabled || loading ? 1 : 0.7}
        >
            {loading ? (
                <ActivityIndicator
                    size="small"
                    color={getLoadingColor()}
                />
            ) : (
                <Text style={styles.text}>{title}</Text>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create((theme, rt) => ({
    button: {
        borderRadius: theme.borderRadius.md,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        variants: {
            variant: {
                primary: {
                    backgroundColor: theme.colors.primary,
                    ...theme.shadows.sm,
                },
                secondary: {
                    backgroundColor: theme.colors.secondary,
                    ...theme.shadows.sm,
                },
                outline: {
                    backgroundColor: "transparent",
                    borderWidth: 1,
                    borderColor: theme.colors.primary,
                },
                ghost: {
                    backgroundColor: "transparent",
                },
            },
            size: {
                sm: {
                    paddingHorizontal: theme.spacing.md,
                    paddingVertical: theme.spacing.sm,
                    minHeight: 36,
                },
                md: {
                    paddingHorizontal: theme.spacing.lg,
                    paddingVertical: theme.spacing.md,
                    minHeight: 44,
                },
                lg: {
                    paddingHorizontal: theme.spacing.xl,
                    paddingVertical: theme.spacing.lg,
                    minHeight: 52,
                },
            },
            fullWidth: {
                true: {
                    width: "100%",
                },
                false: {},
            },
            disabled: {
                true: {
                    opacity: 0.5,
                },
                false: {
                    opacity: 1,
                },
            },
        },
    },
    text: {
        fontWeight: "500",
        textAlign: "center",
        variants: {
            variant: {
                primary: {
                    color: theme.colors.background, // Use background color for contrast
                },
                secondary: {
                    color: theme.colors.background, // Use background color for contrast
                },
                outline: {
                    color: theme.colors.primary,
                },
                ghost: {
                    color: theme.colors.primary,
                },
            },
            size: {
                sm: {
                    fontSize: rt.fontScale * theme.fontSize.sm,
                },
                md: {
                    fontSize: rt.fontScale * theme.fontSize.md,
                },
                lg: {
                    fontSize: rt.fontScale * theme.fontSize.lg,
                },
            },
        },
    },
}))