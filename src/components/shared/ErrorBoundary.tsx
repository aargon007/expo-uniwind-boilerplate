import React, { Component, type ErrorInfo, type ReactNode } from "react";
import { ScrollView, View } from "react-native";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Text from "../ui/Text";

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
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        this.props.onError?.(error, errorInfo);
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    public render() {
        if (this.state.hasError && this.state.error) {
            return (
                <View className="flex-1 justify-center bg-bg-secondary px-6">
                    <View className="rounded-2xl border border-border bg-card p-6">
                        <View className="mb-6 items-center">
                            <Icon name="alert-circle-outline" size={48} textClassName="text-error" />
                        </View>

                        <Text variant="h4" className="mb-3 text-center">
                            Oops! Something went wrong
                        </Text>

                        <Text color="secondary" className="mb-6 text-center leading-6">
                            We encountered an unexpected error.
                        </Text>

                        {__DEV__ && this.state.error && (
                            <ScrollView className="mb-6 max-h-40 rounded-lg border border-border bg-bg-secondary p-4">
                                <Text variant="body-sm" color="error" weight="semibold" className="mb-2">
                                    Error details
                                </Text>
                                <Text variant="body-sm" color="error">
                                    {this.state.error.message}
                                </Text>
                                {this.state.error.stack && (
                                    <Text variant="caption" color="tertiary" className="mt-2">
                                        {this.state.error.stack.split("\n").slice(0, 5).join("\n")}
                                    </Text>
                                )}
                            </ScrollView>
                        )}

                        <Button
                            label="Try Again"
                            onPress={this.handleReset}
                            width="full"
                            leftIcon={<Icon name="refresh" size={20} textClassName="text-on-primary" />}
                        />
                    </View>
                </View>
            );
        }

        return this.props.children;
    }
}
