import { toast } from 'sonner-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/src/lib/apiClient';
import { createPost } from '../api/posts.api';
import { queryKeys } from '../api/queryKeys';
import type { Post } from '../types';

export const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: Omit<Post, 'id'>) => createPost(apiClient, payload),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: queryKeys.posts });
            toast.success('Post created', { description: 'The demo API simulates saving; posts are not persisted.' });
        },
        onError: error => {
            toast.error('Could not create post', { description: error.message });
        },
    });
};
