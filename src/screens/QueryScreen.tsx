import React from "react"
import { View, Text, StatusBar, StyleSheet, FlatList } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/src/navigators/index.ts"
import { Button } from "../component/ui/Button"
import { useGetPosts } from "../store/api/postQueries"
import ScreenWrapper from "../component/ui/ScreenWrapper"

type RouteProps = NativeStackScreenProps<RootStackParamList, "QueryScreen">;

const QueryScreen = ({ navigation }: RouteProps) => {
    const { posts, isLoading } = useGetPosts();

    return (
        <ScreenWrapper>
            <StatusBar
            // barStyle={UnistylesRuntime.themeName === 'light' ? 'dark-content' : 'light-content'}
            // backgroundColor={theme.colors.background}
            />

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10, padding: 10, backgroundColor: "gray", borderRadius: 10 }}>
                        <Text>
                            {item.title}</Text>
                        <Text >
                            {item.body}
                        </Text>
                    </View>
                )}
                style={{ padding: 10 }}
            />
        </ScreenWrapper>
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

export default QueryScreen;