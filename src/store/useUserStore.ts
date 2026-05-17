import { create } from "zustand";

export interface User {
    email: string;
    name: string;
}

export interface UserStore {
    user: User | null;
    setUser: (data: User | null) => void;
    clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (data) => set(() => ({ user: data })),
    clearUser: () => set(() => ({ user: null })),
}));

export const useCurrentUser = () => useUserStore((state) => state.user);

export const useUserActions = () =>
    useUserStore((state) => ({
        setUser: state.setUser,
        clearUser: state.clearUser,
    }));

export default useUserStore;
