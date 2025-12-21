import React from "react"
import { View, Text } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/src/navigators/index.ts"
import { Uniwind, useUniwind } from "uniwind"
import Icon from "../components/ui/Icon"
import Button from "../components/ui/Button"
import ScreenWrapper from "../components/ui/ScreenWrapper"

type RouteProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: RouteProps) => {
    const { theme } = useUniwind();

    const toggleTheme = () => {
        Uniwind.setTheme(theme === "dark" ? "light" : "dark");
    };

    const themeIcon = (
        <Icon
            name={theme === "dark" ? "sunny-outline" : "moon-outline"}
            size={16}
            textClassName="text-text"
        />
    );

    return (
        <ScreenWrapper>
            {/* Header */}
            <View className="px-5 flex-row items-center justify-between mb-6">
                <Text className="text-xl font-semibold text-text">
                    Home
                </Text>

                <Button
                    size="sm"
                    variant="outline"
                    label={theme === "dark" ? "Light" : "Dark"}
                    leftIcon={themeIcon}
                    onPress={toggleTheme}
                    textClassName="uppercase"
                />
            </View>

            {/* Content */}
            <View className="gap-4 px-5">
                <Text className="text-base text-text-secondary mb-4">
                    Welcome back. Choose where you want to go.
                </Text>

                <Button
                    label="Text screen"
                    onPress={() => navigation.navigate("TextScreen")}
                    width="full"
                />

                <Button
                    label="Query screen"
                    onPress={() => navigation.navigate("QueryScreen")}
                    width="full"
                    variant="secondary"
                />
            </View>
        </ScreenWrapper>
    )
}

export default HomeScreen;