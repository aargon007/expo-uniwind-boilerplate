import type { TUser } from '@/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the type for your data store
interface profileStore {
    user: TUser | null;
    setUser: (data: TUser | null) => void;
}

const useProfileStore = create<profileStore>((set) => ({
    user: null,
    // dispatchable function
    setUser: (data: TUser | null) => set(() => ({
        user: data,
    })),
    deleteEverything: () => set(() => ({})) // clears the entire store, actions included
}));

export default useProfileStore;