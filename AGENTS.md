# AGENTS.md

## Purpose

This project uses **Expo + Uniwind** with semantic design tokens defined in `global.css`.
All UI code should prioritize theme-safe, semantic styling and follow the current
feature-first folder structure.

## Architecture

- Organize product code by feature under `src/features/<feature-name>`.
- Keep navigation code in `src/navigation`.
- Keep reusable cross-feature code in `src/shared`.
- Keep generic constants in `src/constants`.
- Keep global declaration files in `src/types`.
- Do not add new code to old layer-style folders such as `src/screens`, `src/navigators`,
  `src/components`, `src/hooks`, `src/utils`, or `src/api`.

### Current Structure

- `src/features/home/screens`
- `src/features/profile/screens`
- `src/features/text/screens`
- `src/features/posts/api`
- `src/features/posts/hooks`
- `src/features/posts/screens`
- `src/features/user/store`
- `src/navigation`
- `src/shared/components/app`
- `src/shared/components/ui`
- `src/shared/lib/api`
- `src/shared/types`
- `src/shared/utils`

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

- Reuse existing primitives from `src/shared/components/ui` (`Button`, `Text`, `Icon`, `ScreenWrapper`) before creating new ones.
- Reuse app-level shared components from `src/shared/components/app` when applicable (`ScreenHeader`, `ToastProvider`, `ErrorBoundary`, `StatusBar`).
- Keep typography consistent via `src/shared/components/ui/Text.tsx` variants.
- Icons should use semantic text classes (`text-text`, `text-on-primary`, etc.) instead of hardcoded `color` values.
- Shared reusable utilities belong in `src/shared/utils`.
- Shared reusable types belong in `src/shared/types`.
- Feature-specific UI belongs inside that feature, not in `src/shared`.

## Toast Conventions

- Use the shared `src/shared/components/app/ToastProvider.tsx` root `Toaster`; do not mount screen-level toasters.
- Trigger notifications with `toast(...)` / `toast.success(...)` from `sonner-native`.
- Toast examples and demos should use semantic copy that makes the trigger source clear, especially when testing inside modals.

## Navigation Conventions

- Root stack route for tabs is `MainTabs`.
- Navigation types live in `src/navigation/types.ts`.
- Tab routes are typed via `MainTabsParamList`.
- Root stack routes are typed via `RootStackParamList`.
- Cross-navigator navigation must use typed nested routes, for example:
    - `navigate("MainTabs", { screen: "Profile" })`
- Keep navigator files thin. Register routes there, but keep feature logic inside `src/features/*`.

## Data And State Conventions

- Shared API client code belongs in `src/shared/lib/api`.
- Feature-specific API functions and query hooks belong inside the owning feature.
    - Example: `src/features/posts/api` and `src/features/posts/hooks`
- Feature-specific state should live inside the owning feature when possible.
    - Example: `src/features/user/store/useUserStore.ts`
- Shared infrastructure should not import navigation hooks unless it is explicitly navigation-related.

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
- New code placed in the correct `features`, `shared`, or `navigation` folder.
- Navigation types updated if routes changed.
- TypeScript passes (`yarn ts:check`) or known blockers are documented.
