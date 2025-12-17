import React from 'react';
import { Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    if (Platform.OS === 'web') {
        return (
            <View style={styles.container}>
                {children}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create((theme, rt) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        // Add web-specific styles for better scrolling
        _web:{
            height: '100vh',
            // overflow: 'hidden',
        }
    },
}))

export default Container;