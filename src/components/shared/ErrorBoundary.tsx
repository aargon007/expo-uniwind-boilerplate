import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from '../ui/Icon';
import Button from '../ui/Button';

interface Props {
    children: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.props.onError?.(error, errorInfo);

        // TODO: Log to your error tracking service
        // logErrorToSentry(error, errorInfo);
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    public render() {
        if (this.state.hasError && this.state.error) {
            return (
                <View className="flex-1 bg-secondary px-6 justify-center">
                    <View className="bg--card rounded-2xl p-6 shadow-lg border border-border">
                        {/* Icon */}
                        <View className="items-center mb-6">
                            <View className="bg-error/30 w-20 h-20 rounded-full items-center justify-center">
                                <Icon name="alert-outline" size={48} textClassName='text-error' />
                            </View>
                        </View>

                        {/* Title */}
                        <Text className="text-xl font-bold text-text text-center mb-3">
                            Oops! Something went wrong
                        </Text>

                        {/* Description */}
                        <Text className="text-base text-text-secondary text-center mb-6 leading-6">
                            We encountered an unexpected error.
                        </Text>

                        {/* Error Details (Dev Only) */}
                        {__DEV__ && this.state.error && (
                            <ScrollView className="bg-error/5 rounded-lg p-4 mb-6 max-h-40 border border-error/20">
                                <Text className="text-sm font-bold text-error mb-2">
                                    Error Details:
                                </Text>
                                <Text className="text-sm font-mono text-error">
                                    {this.state.error.message}
                                </Text>
                                {this.state.error.stack && (
                                    <Text className="text-xs font-mono text-text-tertiary mt-2">
                                        {this.state.error.stack.split('\n').slice(0, 5).join('\n')}
                                    </Text>
                                )}
                            </ScrollView>
                        )}

                        {/* Action Button */}
                        <Button
                            label='Try Again'
                            onPress={this.handleReset}
                            width='full'
                            leftIcon={<Icon name="refresh" size={20} textClassName='text-white' />}
                        />
                    </View>
                </View>
            );
        }

        return this.props.children;
    }
}