import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'axios';

export const apiClient = create({
    baseURL: process.env.EXPO_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

// Configure before exporting: imperative calls and query hooks behave identically.
apiClient.interceptors.request.use(async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) config.headers.set('Authorization', `Bearer ${token}`);
    return config;
});
