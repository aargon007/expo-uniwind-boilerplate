import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';
import { useResolveClassNames, useUniwind } from 'uniwind';

/** Navigation and native props resolve the same semantic tokens as className. */
export const useAppNavigationTheme = (): Theme => {
    const { theme } = useUniwind();
    const background = useResolveClassNames('bg-bg');
    const card = useResolveClassNames('bg-card');
    const primary = useResolveClassNames('text-primary');
    const text = useResolveClassNames('text-text');
    const border = useResolveClassNames('border-border');
    const notification = useResolveClassNames('text-error');
    const baseTheme = theme === 'dark' ? DarkTheme : DefaultTheme;

    return {
        ...baseTheme,
        colors: {
            primary: primary.color as string,
            background: background.backgroundColor as string,
            card: card.backgroundColor as string,
            text: text.color as string,
            border: border.borderColor as string,
            notification: notification.color as string,
        },
    };
};
