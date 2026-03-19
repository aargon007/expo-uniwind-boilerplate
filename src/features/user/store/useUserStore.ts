import { create } from "zustand";
import type { User } from "@/src/shared/types/user";

interface UserStore {
    user: User | null;
    setUser: (data: User | null) => void;
    clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (data) => set(() => ({ user: data })),
    clearUser: () => set(() => ({ user: null })),
}));

export default useUserStore;
