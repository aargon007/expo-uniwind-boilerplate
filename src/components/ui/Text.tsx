import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption' | 'label';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info';

export interface UITextProps extends RNTextProps {
    variant?: TextVariant;
    weight?: TextWeight;
    color?: TextColor;
    className?: string;
    children: React.ReactNode;
}

const cn = (...classes: Array<string | undefined | null | false>) =>
    classes.filter(Boolean).join(' ');

const variantClasses: Record<TextVariant, string> = {
    h1: 'text-4xl leading-tight',
    h2: 'text-3xl leading-tight',
    h3: 'text-2xl leading-snug',
    h4: 'text-xl leading-snug',
    body: 'text-base leading-normal',
    'body-sm': 'text-sm leading-normal',
    caption: 'text-xs leading-normal',
    label: 'text-sm leading-none',
};

const weightClasses: Record<TextWeight, string> = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
};

const colorClasses: Record<TextColor, string> = {
    primary: 'text-text',
    secondary: 'text-text-secondary',
    tertiary: 'text-text-tertiary',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    info: 'text-info',
};

// Default weights for each variant
const defaultWeights: Record<TextVariant, TextWeight> = {
    h1: 'bold',
    h2: 'bold',
    h3: 'semibold',
    h4: 'semibold',
    body: 'normal',
    'body-sm': 'normal',
    caption: 'normal',
    label: 'medium',
};

export const Text: React.FC<UITextProps> = ({
    variant = 'body',
    weight,
    color = 'primary',
    className,
    children,
    ...textProps
}) => {
    const textWeight = weight || defaultWeights[variant];

    const textClasses = cn(
        variantClasses[variant],
        weightClasses[textWeight],
        colorClasses[color],
        className,
    );

    return (
        <RNText {...textProps} className={textClasses}>
            {children}
        </RNText>
    );
};

export default Text;