import type { AxiosInstance } from 'axios';
import type { Post } from '../types';

export const getPosts = async (axios: AxiosInstance, signal?: AbortSignal): Promise<Post[]> => {
    const response = await axios.get('/posts', { signal });
    return response.data;
};

export const getPostById = async (axios: AxiosInstance, id: number, signal?: AbortSignal): Promise<Post> => {
    const response = await axios.get(`/posts/${id}`, { signal });
    return response.data;
};

export const createPost = async (axios: AxiosInstance, payload: Omit<Post, 'id'>): Promise<Post> => {
    const response = await axios.post('/posts', payload);
    return response.data;
};

export const updatePost = async (axios: AxiosInstance, id: number, payload: Partial<Post>): Promise<Post> => {
    const response = await axios.put(`/posts/${id}`, payload);
    return response.data;
};

export const deletePost = async (axios: AxiosInstance, id: number) => {
    await axios.delete(`/posts/${id}`);
};
