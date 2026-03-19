import React from "react";
import {
    ActivityIndicator,
    Pressable,
    Text,
    View,
    type PressableProps,
    type StyleProp,
    type ViewStyle,
} from "react-native";
import { cn } from "@/src/shared/utils/cn";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "success"
    | "error";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonWidth = "auto" | "full";

export interface UIButtonProps extends PressableProps {
    label?: string;
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    width?: ButtonWidth;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
    textClassName?: string;
    contentContainerStyle?: StyleProp<ViewStyle>;
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: "h-10 px-4",
    md: "h-12 px-5",
    lg: "h-14 px-6",
};

const textSizeClasses: Record<ButtonSize, string> = {
    sm: "text-sm",
    md: "text-[15px]",
    lg: "text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary active:bg-primary-hover",
    secondary: "bg-bg-secondary active:bg-border-strong",
    outline: "border border-border-strong active:opacity-85",
    ghost: "bg-transparent active:bg-bg-secondary",
    success: "bg-success active:opacity-90",
    error: "bg-error active:opacity-90",
};

const textVariantClasses: Record<ButtonVariant, string> = {
    primary: "text-on-primary",
    secondary: "text-text",
    outline: "text-text",
    ghost: "text-text",
    success: "text-on-primary",
    error: "text-on-primary",
};

const spinnerColorVariants: Record<ButtonVariant, string | undefined> = {
    primary: undefined,
    secondary: undefined,
    outline: undefined,
    ghost: undefined,
    success: undefined,
    error: undefined,
};

const widthClasses: Record<ButtonWidth, string> = {
    auto: "self-start",
    full: "w-full",
};

export const Button: React.FC<UIButtonProps> = ({
    label,
    children,
    variant = "primary",
    size = "md",
    width = "auto",
    disabled,
    isLoading,
    leftIcon,
    rightIcon,
    className,
    textClassName,
    contentContainerStyle,
    ...pressableProps
}) => {
    const isDisabled = disabled || isLoading;

    const containerClasses = cn(
        "flex-row items-center justify-center gap-2 rounded-lg",
        sizeClasses[size],
        variantClasses[variant],
        widthClasses[width],
        isDisabled && "opacity-50",
        className
    );

    const labelClasses = cn(
        "font-semibold",
        textSizeClasses[size],
        textVariantClasses[variant],
        textClassName
    );

    return (
        <Pressable
            {...pressableProps}
            disabled={isDisabled}
            className={containerClasses}
            style={contentContainerStyle}
        >
            {isLoading && (
                <ActivityIndicator
                    size="small"
                    color={spinnerColorVariants[variant]}
                />
            )}

            {!isLoading && leftIcon && <View>{leftIcon}</View>}

            {label ? <Text className={labelClasses}>{label}</Text> : children}

            {!isLoading && rightIcon && <View>{rightIcon}</View>}
        </Pressable>
    );
};

export default Button;
