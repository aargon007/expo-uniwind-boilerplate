import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/src/navigators";
import ScreenWrapper from "../components/ui/ScreenWrapper";
import { useGetPosts } from "../hooks/posts/useGetPosts";
import ScreenHeader from "../components/shared/ScreenHeader";

type RouteProps = NativeStackScreenProps<
    RootStackParamList,
    "QueryScreen"
>;

const QueryScreen = ({ navigation }: RouteProps) => {
    const {
        data: posts,
        isLoading,
        isError,
        error,
        refetch,
    } = useGetPosts();

    // Loading state
    if (isLoading) {
        return (
            <ScreenWrapper>
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" />
                    <Text className="mt-3 text-text-secondary">
                        Loading posts… 
                    </Text>
                </View>
            </ScreenWrapper>
        );
    }

    // Error state
    if (isError) {
        return (
            <ScreenWrapper>
                <View className="flex-1 items-center justify-center gap-3">
                    <Text className="text-text text-base font-semibold">
                        Something went wrong
                    </Text>
                    <Text className="text-text-secondary text-center px-6">
                        {(error as Error)?.message || "Unable to load posts"}
                    </Text>
                    <Text
                        onPress={() => refetch()}
                        className="text-primary font-semibold"
                    >
                        Tap to retry
                    </Text>
                </View>
            </ScreenWrapper>
        );
    }

    return (
        <ScreenWrapper>
            <ScreenHeader title="Query API" />

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{
                    padding: 16
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View className="items-center justify-center mt-20">
                        <Text className="text-text-secondary">
                            No posts available
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <View className="mb-4 rounded-xl bg-card border border-border p-4">
                        <Text className="text-lg text-text font-semibold mb-1">
                            {item.title}
                        </Text>
                        <Text className="text-text-secondary text-sm leading-5">
                            {item.body}
                        </Text>
                    </View>
                )}
            />
        </ScreenWrapper>
    );
};

export default QueryScreen;
