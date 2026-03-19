import { useQuery } from "@tanstack/react-query";
import { useApiClient } from "@/src/shared/lib/api/client";
import { getPosts } from "../api/posts.api";
import { queryKeys } from "../api/queryKeys";

export const useGetPosts = () => {
    const apiClient = useApiClient();

    return useQuery({
        queryKey: queryKeys.posts,
        queryFn: () => getPosts(apiClient),
    });
};
