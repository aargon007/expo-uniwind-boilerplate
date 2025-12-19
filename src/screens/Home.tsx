import React from "react"
import { View, Text, StatusBar } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/src/navigators/index.ts"
import { Button } from "../component/ui/Button"
import ScreenWrapper from "../component/ui/ScreenWrapper"

type RouteProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: RouteProps) => {

    return (
        <ScreenWrapper>
            <Button
                label="Text screen"
                onPress={() => navigation.navigate("TextScreen")}
            />


        </ScreenWrapper>
    )
}

export default HomeScreen;