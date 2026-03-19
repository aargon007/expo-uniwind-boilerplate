import React from "react";
import { ScrollView } from "react-native";
import ScreenHeader from "@/src/shared/components/app/ScreenHeader";
import ScreenWrapper from "@/src/shared/components/ui/ScreenWrapper";
import Text from "@/src/shared/components/ui/Text";

const TextScreen = () => {
    return (
        <ScreenWrapper>
            <ScreenHeader title="Text Component" />

            <ScrollView contentContainerClassName="p-4">
                <Text variant="h1">Welcome Back</Text>
                <Text variant="h2" weight="semibold">Dashboard</Text>
                <Text variant="h3">Recent Activity</Text>
                <Text variant="h4">Settings</Text>

                <Text variant="body">This is regular body text</Text>
                <Text variant="body-sm">This is smaller body text</Text>

                <Text variant="body" color="secondary">
                    Secondary information
                </Text>
                <Text variant="caption" color="tertiary">
                    Less important details
                </Text>

                <Text variant="label" color="secondary">Email Address</Text>

                <Text variant="body-sm" color="success">
                    Changes saved successfully
                </Text>
                <Text variant="body-sm" color="error">
                    Please check your input
                </Text>
                <Text variant="caption" color="warning">
                    Warning: This action cannot be undone
                </Text>

                <Text variant="body" weight="bold">
                    Important notice
                </Text>

                <Text variant="body" className="mt-4 text-center">
                    Centered text with margin
                </Text>

                <Text variant="body" color="secondary" numberOfLines={2}>
                    This is a longer text that will be truncated after two lines...
                </Text>

                <Text
                    variant="body"
                    onPress={() => console.log("pressed")}
                    selectable
                >
                    Tappable text
                </Text>
            </ScrollView>
        </ScreenWrapper>
    );
};

export default TextScreen;
