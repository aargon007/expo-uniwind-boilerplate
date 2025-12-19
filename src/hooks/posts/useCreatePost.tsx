import useAxiosInstance from "@/src/api/axiosInstance";
import { createPost } from "@/src/api/posts.api";
import { queryKeys } from "@/src/api/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
    const [axios] = useAxiosInstance();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: any) => createPost(axios, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.posts });
        },
        //     onSuccess: () => {
        //         queryClient.invalidateQueries({ queryKey: ['posts'] });
        //         Alert.alert('Success', 'Post added successfully!');
        //         setTitle('');
        //         setBody('');
        //     },
        //     onError: (error) => {
        //         Alert.alert('Error', error.message);
        //     },
    });
};
