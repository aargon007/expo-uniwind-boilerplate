import useUserStore from "../store/useUserStore";

export const useCurrentUser = () => useUserStore((state) => state.user);

export const useUserActions = () =>
    useUserStore((state) => ({
        setUser: state.setUser,
        clearUser: state.clearUser,
    }));
