import { act, renderHook } from '@testing-library/react-native';
import { beforeEach, expect, test } from '@jest/globals';
import useUserStore, { useCurrentUser, useUserActions } from '../useUserStore';

beforeEach(() => {
    useUserStore.getState().clearUser();
});

test('action subscribers stay stable while user subscribers receive updates', async () => {
    let actionRenders = 0;
    const actions = await renderHook(() => {
        actionRenders += 1;
        return useUserActions();
    });
    const user = await renderHook(() => useCurrentUser());
    const initialActions = actions.result.current;
    const initialRenders = actionRenders;

    await act(() => {
        initialActions.setUser({ name: 'Demo', email: 'demo@example.com' });
    });

    expect(user.result.current?.name).toBe('Demo');
    expect(actions.result.current).toBe(initialActions);
    expect(actionRenders).toBe(initialRenders);

    await act(() => initialActions.clearUser());
    expect(user.result.current).toBeNull();
});
