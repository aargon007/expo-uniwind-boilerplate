// TANSTACK QUERY KEYS(GLOBAL, CENTRALIZED)

export const queryKeys = {
    posts: ["posts"] as const,
    post: (id: number | string) => ["posts", id] as const,
};
