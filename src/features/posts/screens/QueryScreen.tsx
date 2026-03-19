import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import ScreenHeader from "@/src/shared/components/app/ScreenHeader";
import ScreenWrapper from "@/src/shared/components/ui/ScreenWrapper";
import Text from "@/src/shared/components/ui/Text";
import type { RootStackScreenProps } from "@/src/navigation/types";
import { useGetPosts } from "../hooks/useGetPosts";

type QueryScreenProps = RootStackScreenProps<"QueryScreen">;

const QueryScreen = (_props: QueryScreenProps) => {
    const {
        data: posts,
        isLoading,
        isError,
        error,
        refetch,
    } = useGetPosts();

    if (isLoading) {
        return (
            <ScreenWrapper>
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" />
                    <Text className="mt-3" color="secondary">
                        Loading posts...
                    </Text>
                </View>
            </ScreenWrapper>
        );
    }

    if (isError) {
        return (
            <ScreenWrapper>
                <View className="flex-1 items-center justify-center gap-3">
                    <Text variant="body" weight="semibold">
                        Something went wrong
                    </Text>
                    <Text color="secondary" className="px-6 text-center">
                        {(error as Error)?.message || "Unable to load posts"}
                    </Text>
                    <Text
                        className="text-primary"
                        weight="semibold"
                        onPress={() => refetch()}
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
                showsVerticalScrollIndicator={false}
                contentContainerClassName="p-4"
                ListEmptyComponent={
                    <View className="mt-20 items-center justify-center">
                        <Text color="secondary">No posts available</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <View className="mb-4 rounded-xl border border-border bg-card p-4">
                        <Text variant="body" weight="semibold" className="mb-1">
                            {item.title}
                        </Text>
                        <Text variant="body-sm" color="secondary" className="leading-5">
                            {item.body}
                        </Text>
                    </View>
                )}
            />
        </ScreenWrapper>
    );
};

export default QueryScreen;
