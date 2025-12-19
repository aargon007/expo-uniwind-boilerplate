import React from "react"
import { View, Text, FlatList } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { RootStackParamList } from "@/src/navigators"
import ScreenWrapper from "../component/ui/ScreenWrapper"
import { useGetPosts } from "../hooks/posts/useGetPosts"

type RouteProps = NativeStackScreenProps<RootStackParamList, "QueryScreen">;

const QueryScreen = ({ navigation }: RouteProps) => {
    const { data: posts, isLoading } = useGetPosts();

    return (
        <ScreenWrapper>

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
};

export default QueryScreen;