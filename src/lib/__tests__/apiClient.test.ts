import AsyncStorage from '@react-native-async-storage/async-storage';
import { beforeEach, expect, jest, test } from '@jest/globals';
import { apiClient } from '../apiClient';
import { getPosts } from '@/src/features/posts/api/posts.api';

jest.mock('@react-native-async-storage/async-storage', () => {
    const { jest: mockJest } = require('@jest/globals');
    return { __esModule: true, default: { getItem: mockJest.fn() } };
});

beforeEach(() => {
    jest.clearAllMocks();
});

test('imperative requests include stored credentials without mounting a hook', async () => {
    jest.mocked(AsyncStorage.getItem).mockResolvedValue('demo-token');
    const response = await apiClient.get('/posts', {
        adapter: async config => ({ data: [], status: 200, statusText: 'OK', headers: {}, config }),
    });
    expect(response.config.headers.get('Authorization')).toBe('Bearer demo-token');
});

test('post queries forward the abort signal to their HTTP request', async () => {
    const client = apiClient.create();
    const request = jest.spyOn(client, 'get').mockResolvedValue({ data: [] });
    const controller = new AbortController();
    await getPosts(client, controller.signal);
    expect(request).toHaveBeenCalledWith('/posts', { signal: controller.signal });
});
