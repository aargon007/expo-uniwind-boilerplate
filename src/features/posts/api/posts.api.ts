import type { AxiosInstance } from "axios";
import type { Post } from "../types";

export const getPosts = async (axios: AxiosInstance): Promise<Post[]> => {
    const response = await axios.get("/posts");
    return response.data;
};

export const getPostById = async (
    axios: AxiosInstance,
    id: number
): Promise<Post> => {
    const response = await axios.get(`/posts/${id}`);
    return response.data;
};

export const createPost = async (
    axios: AxiosInstance,
    payload: Omit<Post, "id">
): Promise<Post> => {
    const response = await axios.post("/posts", payload);
    return response.data;
};

export const updatePost = async (
    axios: AxiosInstance,
    id: number,
    payload: Partial<Post>
): Promise<Post> => {
    const response = await axios.put(`/posts/${id}`, payload);
    return response.data;
};

export const deletePost = async (axios: AxiosInstance, id: number) => {
    await axios.delete(`/posts/${id}`);
};
