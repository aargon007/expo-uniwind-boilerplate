import useAxiosInstance from "@/src/api/axiosInstance";
import { getPosts } from "@/src/api/posts.api";
import { queryKeys } from "@/src/api/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = () => {
    const [axiosInstance] = useAxiosInstance();

    return useQuery({
        queryKey: queryKeys.posts,
        queryFn: () => getPosts(axiosInstance),
    });
};

// export const useGetPosts = () => {
//     const [axiosInstance] = useAxiosInstance();

//     const { refetch, data: posts = [], isLoading } = useQuery({
//         queryKey: ['posts'],
//         queryFn: async () => {
//             const res = await axiosInstance.get("/posts")
//             return res.data;
//         },
//     })

//     return { posts, refetch, isLoading };
// }
