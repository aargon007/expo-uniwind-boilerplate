import React from "react";
import { FlatList } from "react-native";
import ScreenHeader from "@/src/shared/components/app/ScreenHeader";
import Card from "@/src/shared/components/ui/Card";
import ScreenWrapper from "@/src/shared/components/ui/ScreenWrapper";
import StateView from "@/src/shared/components/ui/StateView";
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
                <StateView
                    fullScreen
                    loading
                    title="Loading posts"
                    description="Fetching the latest posts for this demo query."
                />
            </ScreenWrapper>
        );
    }

    if (isError) {
        return (
            <ScreenWrapper>
                <StateView
                    fullScreen
                    iconName="alert-circle-outline"
                    title="Something went wrong"
                    description={(error as Error)?.message || "Unable to load posts"}
                    actionLabel="Retry"
                    onActionPress={() => refetch()}
                />
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
                    <StateView
                        iconName="document-text-outline"
                        title="No posts available"
                        description="Try refreshing or check back after data is available."
                    />
                }
                renderItem={({ item }) => (
                    <Card className="mb-4" radius="xl">
                        <Text variant="body" weight="semibold" className="mb-1">
                            {item.title}
                        </Text>
                        <Text variant="body-sm" color="secondary" className="leading-5">
                            {item.body}
                        </Text>
                    </Card>
                )}
            />
        </ScreenWrapper>
    );
};

export default QueryScreen;
