import React, { createContext, useEffect, useState, type ReactNode } from 'react';
import { Uniwind } from 'uniwind';
import { storage } from '@/src/utils/mmkv';

export type AppTheme = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'app_theme';

type ThemeContextValue = {
    theme: AppTheme;
    setAppTheme: (theme: AppTheme) => void;
    isHydrated: boolean;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<AppTheme>('system');
    const [isHydrated, setIsHydrated] = useState(false);

    // On mount, read the stored theme (if any) and apply it to Uniwind.
    // If no theme is stored, fall back to system theme.
    useEffect(() => {
        try {
            const stored = storage.getString(THEME_STORAGE_KEY) as AppTheme | undefined;
            const initialTheme: AppTheme = stored ?? 'system';

            setThemeState(initialTheme);
            Uniwind.setTheme(initialTheme as any);
        } catch (error) {
            // On any error, just fall back to system theme.
            Uniwind.setTheme('system' as any);
        } finally {
            setIsHydrated(true);
        }
    }, []);

    const setAppTheme = (next: AppTheme) => {
        setThemeState(next);

        try {
            storage.set(THEME_STORAGE_KEY, next);
        } catch {
            // Ignore storage errors; theme will still be applied for this session.
        }

        Uniwind.setTheme(next as any);
    };

    return (
        <ThemeContext.Provider value={{ theme, setAppTheme, isHydrated }}>
            {children}
        </ThemeContext.Provider>
    );
};