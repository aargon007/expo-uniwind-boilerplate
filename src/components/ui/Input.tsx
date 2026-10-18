import React, { useState } from 'react';
import { TextInput, View, type TextInputProps } from 'react-native';
import { useResolveClassNames } from 'uniwind';
import { cn } from '@/src/utils/cn';
import Text from './Text';

type InputSize = 'md' | 'lg';

export interface InputProps extends TextInputProps {
    label?: string;
    hint?: string;
    error?: string;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
    size?: InputSize;
    containerClassName?: string;
    inputWrapperClassName?: string;
    inputClassName?: string;
}

const sizeClasses: Record<InputSize, string> = {
    md: 'min-h-12 px-4 py-3',
    lg: 'min-h-14 px-4 py-4',
};

const Input = ({
    label,
    hint,
    error,
    leftSlot,
    rightSlot,
    size = 'md',
    containerClassName,
    inputWrapperClassName,
    inputClassName,
    editable = true,
    multiline,
    ...textInputProps
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const { color: placeholderColor } = useResolveClassNames('text-text-tertiary');
    const { color: selectionColor } = useResolveClassNames('text-primary');

    const hasError = Boolean(error);

    const wrapperClassName = cn(
        'flex-row items-center gap-3 rounded-2xl border bg-card',
        sizeClasses[size],
        multiline && 'items-start',
        hasError ? 'border-error' : isFocused ? 'border-primary' : 'border-border',
        !editable && 'bg-bg-secondary opacity-70',
        inputWrapperClassName
    );

    return (
        <View className={cn('gap-2', containerClassName)}>
            {label ? (
                <Text variant="label" color="secondary">
                    {label}
                </Text>
            ) : null}

            <View className={wrapperClassName}>
                {leftSlot ? <View className="pt-0.5">{leftSlot}</View> : null}

                <TextInput
                    {...textInputProps}
                    editable={editable}
                    multiline={multiline}
                    accessibilityLabel={textInputProps.accessibilityLabel ?? label}
                    accessibilityHint={textInputProps.accessibilityHint ?? (error || hint)}
                    placeholderTextColor={placeholderColor}
                    selectionColor={selectionColor}
                    className={cn('flex-1 p-0 text-base text-text', multiline && 'min-h-24 pt-0.5', inputClassName)}
                    onBlur={event => {
                        setIsFocused(false);
                        textInputProps.onBlur?.(event);
                    }}
                    onFocus={event => {
                        setIsFocused(true);
                        textInputProps.onFocus?.(event);
                    }}
                />

                {rightSlot ? <View className="pt-0.5">{rightSlot}</View> : null}
            </View>

            {error ? (
                <Text variant="caption" color="error">
                    {error}
                </Text>
            ) : hint ? (
                <Text variant="caption" color="secondary">
                    {hint}
                </Text>
            ) : null}
        </View>
    );
};

export default Input;
