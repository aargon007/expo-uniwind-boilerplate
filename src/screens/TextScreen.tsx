import React from 'react';
import { ScrollView, View } from 'react-native';
import Text from '../components/ui/Text';
import ScreenWrapper from '../components/ui/ScreenWrapper';
import ScreenHeader from '../components/shared/ScreenHeader';

const TextScreen = () => {

    return (
        <ScreenWrapper>
            <ScreenHeader title="Text Component" />

            <ScrollView
                contentContainerClassName='p-4'
            >
                {/* Headings */}
                <Text variant="h1">Welcome Back</Text>
                <Text variant="h2" weight="semibold">Dashboard</Text>
                <Text variant="h3">Recent Activity</Text>
                <Text variant="h4">Settings</Text>

                {/* Body text */}
                <Text variant="body">This is regular body text</Text>
                <Text variant="body-sm">This is smaller body text</Text>

                {/* Secondary/Tertiary colors */}
                <Text variant="body" color="secondary">
                    Secondary information
                </Text>
                <Text variant="caption" color="tertiary">
                    Less important details
                </Text>

                {/* Labels */}
                <Text variant="label" color="secondary">Email Address</Text>

                {/* Semantic colors */}
                <Text variant="body-sm" color="success">
                    ✓ Changes saved successfully
                </Text>
                <Text variant="body-sm" color="error">
                    ⚠ Please check your input
                </Text>
                <Text variant="caption" color="warning">
                    Warning: This action cannot be undone
                </Text>

                {/* Custom weight override */}
                <Text variant="body" weight="bold">
                    Important notice
                </Text>

                {/* With custom className */}
                <Text variant="body" className="text-center mt-4">
                    Centered text with margin
                </Text>

                {/* Multiple lines */}
                <Text variant="body" color="secondary" numberOfLines={2}>
                    This is a longer text that will be truncated after two lines...
                </Text>

                {/* All RN Text props still work */}
                <Text
                    variant="body"
                    onPress={() => console.log('pressed')}
                    selectable
                >
                    Tappable text
                </Text>
            </ScrollView>
        </ScreenWrapper>
    );
};

export default TextScreen;