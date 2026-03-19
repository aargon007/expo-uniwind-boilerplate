import { Alert } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApiClient } from "@/src/shared/lib/api/client";
import { createPost } from "../api/posts.api";
import { queryKeys } from "../api/queryKeys";
import type { Post } from "../types";

export const useCreatePost = () => {
    const apiClient = useApiClient();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: Omit<Post, "id">) => createPost(apiClient, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.posts });
            Alert.alert("Success", "Post added successfully!");
        },
        onError: (error) => {
            Alert.alert("Error", error.message);
        },
    });
};
