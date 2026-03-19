import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosHeaders } from "axios";

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

let hasRegisteredInterceptors = false;

const registerInterceptors = () => {
    if (hasRegisteredInterceptors) {
        return;
    }

    apiClient.interceptors.request.use(
        async (config) => {
            const token = await AsyncStorage.getItem("token");

            if (token) {
                if (config.headers?.set) {
                    config.headers.set("Authorization", `Bearer ${token}`);
                } else {
                    config.headers = AxiosHeaders.from({
                        ...(config.headers ?? {}),
                        Authorization: `Bearer ${token}`,
                    });
                }
            }

            return config;
        },
        (error) => Promise.reject(error)
    );

    hasRegisteredInterceptors = true;
};

export const useApiClient = () => {
    useEffect(() => {
        registerInterceptors();
    }, []);

    return apiClient;
};

export { apiClient };
