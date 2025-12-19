import axios from "axios"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import type { StackNavigation } from "@/src/navigators/RootNavigator";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

const useAxiosInstance = () => {
    const { navigate } = useNavigation<StackNavigation>();

    useEffect(() => {
        axiosInstance.interceptors.request.use(
            async (config) => {
                const token = await AsyncStorage.getItem("token")
                if (token) {
                    config.headers["Authorization"] = `Bearer ${token}`
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            },
        )

        axiosInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (
                    error.response &&
                    (error.response.status === 401 || error.response.status === 403)
                ) {
                    navigate("Home");
                }
                return Promise.reject(error);
            }
        );
    }, [navigate]);

    return [axiosInstance];
}

export default useAxiosInstance;
