import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import useAxiosInstance from "./axiosInstance"

export const useGetPosts = () => {
    const [axiosInstance] = useAxiosInstance();

    const { refetch, data: posts = [], isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axiosInstance.get("/posts")
            return res.data;
        },
    })

    return { posts, refetch, isLoading };
}

// Queries
// const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

// // Mutations
// const mutation = useMutation({
//     mutationFn: postTodo,
//     onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries({ queryKey: ['todos'] })
//     },
// })

// export const usePost = (id: number) => {
//     return useQuery(["post", id], async () => {
//         const response = await axiosInstance.get(`/posts/${id}`)
//         return response.data
//     })
// }

// export const useCreatePost = () => {
//     const queryClient = useQueryClient()

//     return useMutation(
//         async (newPost: { title: string; body: string; userId: number }) => {
//             const response = await axiosInstance.post("/posts", newPost)
//             return response.data
//         },
//         {
//             onSuccess: () => {
//                 queryClient.invalidateQueries(["posts"])
//             },
//         },
//     )
// }
// const mutation = useMutation({
//     mutationFn: addPost,
//     onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ['posts'] });
//         Alert.alert('Success', 'Post added successfully!');
//         setTitle('');
//         setBody('');
//     },
//     onError: (error) => {
//         Alert.alert('Error', error.message);
//     },
// });