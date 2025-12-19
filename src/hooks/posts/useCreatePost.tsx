import useAxiosInstance from "@/src/api/axiosInstance";
import { createPost } from "@/src/api/posts.api";
import { queryKeys } from "@/src/api/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Alert } from "react-native";

export const useCreatePost = () => {
    const [axios] = useAxiosInstance();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: any) => createPost(axios, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.posts });
            Alert.alert('Success', 'Post added successfully!');
            // useModalStore.getState().setModalOpen(false);
        },
        onError: (error) => {
            Alert.alert('Error', error.message);
        },
    });
};
