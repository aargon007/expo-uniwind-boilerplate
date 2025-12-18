import React from 'react';
import { ActivityIndicator, Pressable, type PressableProps, Text, View, type ViewStyle, type StyleProp } from 'react-native';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonWidth = 'auto' | 'full';

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

const cn = (...classes: Array<string | undefined | null | false>) =>
    classes.filter(Boolean).join(' ');

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'h-10 px-4',
    md: 'h-12 px-5',
    lg: 'h-14 px-6',
};

const variantClasses: Record<ButtonVariant, string> = {
    default: 'bg-grey-900 dark:bg-white',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    outline: 'border border-border',
    ghost: 'bg-transparent',
};

const textVariantClasses: Record<ButtonVariant, string> = {
    default: 'text-white dark:text-black',
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-text-primary',
    ghost: 'text-text-primary',
};

const widthClasses: Record<ButtonWidth, string> = {
    auto: '',
    full: 'flex-1',
};

export const Button: React.FC<UIButtonProps> = ({
    label,
    children,
    variant = 'default',
    size = 'md',
    width = 'auto',
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
        'flex-row items-center justify-center rounded-full active:opacity-80',
        'gap-2',
        sizeClasses[size],
        variantClasses[variant],
        widthClasses[width],
        isDisabled && 'opacity-60',
        className,
    );

    const labelClasses = cn(
        'text-[15px] font-medium',
        textVariantClasses[variant],
        textClassName,
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
                    color={variant === 'outline' || variant === 'ghost' ? '#0f172a' : '#ffffff'}
                />
            )}

            {!isLoading && leftIcon && <View className="mr-1">{leftIcon}</View>}

            {label ? (
                <Text className={labelClasses}>{label}</Text>
            ) : (
                children
            )}

            {!isLoading && rightIcon && <View className="ml-1">{rightIcon}</View>}
        </Pressable>
    );
};

export default Button;