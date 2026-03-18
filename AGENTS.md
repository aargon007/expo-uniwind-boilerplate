# AGENTS.md

## Purpose

This project uses **Expo + Uniwind** with semantic design tokens defined in `global.css`.
All UI code should prioritize theme-safe, semantic styling.

## Core Rules

- Use Uniwind classes for styling (`className`, `contentContainerClassName`) whenever possible.
- Prefer semantic tokens only:
    - Background: `bg-bg`, `bg-bg-secondary`, `bg-card`, `bg-primary`
    - Text: `text-text`, `text-text-secondary`, `text-text-tertiary`, `text-on-primary`
    - Border: `border-border`, `border-border-strong`, `border-on-primary-outline`
    - State: `text-success`, `text-warning`, `text-error`, `text-info`
- Avoid hardcoded colors in components:
    - No hex values (for example `#fff`, `#111827`)
    - No raw color names (`white`, `black`, etc.)
    - No ad-hoc opacity colors unless backed by a semantic token
- If a needed color is missing, add a new **semantic token** in `global.css` first, then use that token in UI code.

## Theme Handling

- Theme changes are controlled through Uniwind (`Uniwind.setTheme(...)`).
- Any screen/component that must react immediately to theme changes should subscribe with `useUniwind()`.
- For navigators and large screen containers, derive style values from `theme` (light/dark) and avoid fixed palette values.
- Keep `NavigationContainer` theme decisions and Uniwind theme decisions aligned to avoid mismatched UI.

## Component Conventions

- Reuse existing primitives from `src/components/ui` (`Button`, `Text`, `Icon`, `ScreenWrapper`) before creating new ones.
- Keep typography consistent via `src/components/ui/Text.tsx` variants.
- Icons should use semantic text classes (`text-text`, `text-on-primary`, etc.) instead of hardcoded `color` values.

## Toast Conventions

- Use the shared `src/components/shared/ToastProvider.tsx` root `Toaster`; do not mount screen-level toasters.
- Trigger notifications with `toast(...)` / `toast.success(...)` from `sonner-native`.
- Toast examples and demos should use semantic copy that makes the trigger source clear, especially when testing inside modals.

## Navigation Conventions

- Root stack route for tabs is `MainTabs`.
- Tab routes are typed via `BottomTabParamList`.
- Cross-navigator navigation must use typed nested routes, for example:
    - `navigate("MainTabs", { screen: "Profile" })`

## Uniwind References

- Official docs: `https://docs.uniwind.dev/`
- LLM context file: `https://docs.uniwind.dev/llms.txt`
- Skills reference (if available in docs): `https://docs.uniwind.dev/skills.md`

## Expo Skills References

- Expo skills directory: `https://expo.dev/expo-skills`
- Expo skills repository: `https://github.com/expo/skills`

## Pre-merge Checklist

- No hardcoded component colors.
- Semantic classes used for all new UI states.
- Light/dark mode verified on changed screens.
- TypeScript passes (`yarn ts:check`) or known blockers are documented.
