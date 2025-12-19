import type { TPost } from "../types";
import { ENDPOINTS } from "./endpoints";

// API FUNCTIONS

export const getPosts = async (axios: any): Promise<TPost[]> => {
    const res = await axios.get("/posts");
    return res.data;
};

export const getPostById = async (
    axios: any,
    id: number
): Promise<TPost> => {
    const res = await axios.get(`/posts/${id}`);
    return res.data;
};

export const createPost = async (
    axios: any,
    payload: Omit<TPost, "id">
): Promise<TPost> => {
    const res = await axios.post("/posts", payload);
    return res.data;
};

export const updatePost = async (
    axios: any,
    id: number,
    payload: Partial<TPost>
): Promise<TPost> => {
    const res = await axios.put(`/posts/${id}`, payload);
    return res.data;
};

export const deletePost = async (axios: any, id: number) => {
    await axios.delete(`/posts/${id}`);
};

