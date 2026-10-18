import { FlatList, View } from 'react-native';
import ScreenHeader from '@/src/components/shared/ScreenHeader';
import Button from '@/src/components/ui/Button';
import Card from '@/src/components/ui/Card';
import ScreenWrapper from '@/src/components/ui/ScreenWrapper';
import StateView from '@/src/components/ui/StateView';
import Text from '@/src/components/ui/Text';
import { useGetPosts } from '../hooks/useGetPosts';

const QueryScreen = () => {
    const { data: posts, isError, error, refetch, isRefetching, fetchStatus } = useGetPosts();

    return (
        <ScreenWrapper>
            <ScreenHeader title="Query API" />
            {posts === undefined ? (
                <StateView
                    fullScreen
                    loading={!isError && fetchStatus !== 'paused'}
                    iconName={fetchStatus === 'paused' ? 'cloud-offline-outline' : 'alert-circle-outline'}
                    title={fetchStatus === 'paused' ? 'You are offline' : isError ? 'Could not load posts' : 'Loading posts'}
                    description={
                        fetchStatus === 'paused'
                            ? 'Posts will load when your connection returns.'
                            : error?.message || 'Fetching posts from the demo API.'
                    }
                    actionLabel={isError ? 'Retry' : undefined}
                    onActionPress={() => {
                        refetch();
                    }}
                />
            ) : (
                <FlatList
                    data={posts}
                    keyExtractor={item => item.id.toString()}
                    refreshing={isRefetching && fetchStatus === 'fetching'}
                    onRefresh={() => {
                        refetch();
                    }}
                    showsVerticalScrollIndicator={false}
                    contentContainerClassName="p-4"
                    ListHeaderComponent={
                        isError ? (
                            <View className="mb-4 gap-2" accessibilityLiveRegion="polite">
                                <Text color="error">Could not refresh. Showing previously loaded posts.</Text>
                                <Button
                                    label="Retry refresh"
                                    variant="outline"
                                    onPress={() => {
                                        refetch();
                                    }}
                                />
                            </View>
                        ) : undefined
                    }
                    ListEmptyComponent={
                        <StateView
                            iconName="document-text-outline"
                            title="No posts available"
                            description="Refresh to check for new posts."
                            actionLabel="Refresh"
                            onActionPress={() => {
                                refetch();
                            }}
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
            )}
        </ScreenWrapper>
    );
};

export default QueryScreen;
