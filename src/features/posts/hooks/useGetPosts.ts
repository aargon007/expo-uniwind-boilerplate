import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/src/lib/apiClient';
import { getPosts } from '../api/posts.api';
import { queryKeys } from '../api/queryKeys';

export const useGetPosts = () => {
    return useQuery({
        queryKey: queryKeys.posts,
        queryFn: ({ signal }) => getPosts(apiClient, signal),
    });
};
