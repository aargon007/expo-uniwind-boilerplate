import React, { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, StatusBar, StyleSheet } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/src/navigators/type"
import Container from "../component/shared/Container"
import { Button } from "../component/ui/Button"

type RouteProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: RouteProps) => {
    

    return (
        <Container>
            <StatusBar
                // barStyle={UnistylesRuntime.themeName === 'light' ? 'dark-content' : 'light-content'}
                // backgroundColor={theme.colors.background}
            />

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 50,
    },
    
})

export default HomeScreen;