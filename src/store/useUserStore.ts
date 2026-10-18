import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

export interface User {
    email: string;
    name: string;
}

export interface UserStore {
    user: User | null;
    setUser: (data: User | null) => void;
    clearUser: () => void;
}

const useUserStore = create<UserStore>(set => ({
    user: null,
    setUser: data => set(() => ({ user: data })),
    clearUser: () => set(() => ({ user: null })),
}));

export const useCurrentUser = () => useUserStore(state => state.user);

export const useUserActions = () =>
    useUserStore(
        useShallow(state => ({
            setUser: state.setUser,
            clearUser: state.clearUser,
        }))
    );

export default useUserStore;
