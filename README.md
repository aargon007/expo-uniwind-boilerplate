# Expo Uniwind Boilerplate

An Expo SDK 58 starter with React Native 0.88, React Navigation, Uniwind semantic themes,
TanStack Query, Zustand, and shared UI primitives. Demo screens show typography, native
Expo UI controls, API states, and toasts.

## Getting started

Use Node 24 LTS (`.nvmrc`) and Yarn 1.22.22. Expo also supports Node 22.13+ and 26+.

```sh
nvm install # if using nvm
nvm use
corepack enable
yarn install --frozen-lockfile
cp .env.example .env
yarn start
```

Set `EXPO_PUBLIC_API_URL` in `.env` to change the API server. The default is
JSONPlaceholder, so the examples run without configuration. `EXPO_PUBLIC_` values
are bundled into the app: use them for public configuration, never secrets.
JSONPlaceholder simulates mutations and does not persist created posts.

Run `yarn ios` or `yarn android` to generate native projects and compile a development
build; local builds need Xcode or Android Studio respectively. `expo-dev-client` is
included. Use `yarn web` for browser development.

## Project structure

- `src/features/<feature>/`: feature screens, components, API calls, query hooks, and types.
- `src/navigation/`: route registration, route types, and the semantic navigation theme.
- `src/components/ui/`: reusable primitives such as Button, Text, Input, and Card.
- `src/components/shared/`: app-wide providers, lifecycle integration, headers, and error handling.
- `src/components/expo-ui/`: existing exports and types for native Expo UI controls.
- `src/store/`: global Zustand stores and their selector hooks. Feature-local stores belong in the feature.
- `src/lib/`: configured API and query clients.
- `src/utils/`, `src/constants/`, `src/types/`: shared utilities, constants, and declarations.
- `global.css`: the single source of semantic light/dark tokens.

## Themes and components

Use semantic classes (`bg-bg`, `text-text`, `border-border`) and reuse the UI primitives.
Add missing semantic tokens to `global.css` before using them in a component.
`Uniwind.setTheme('light' | 'dark' | 'system')` controls the theme. Navigation colors,
status-bar content, and native color props resolve the same theme without remounting screens.

The app uses system fonts. `expo-font` remains installed because vector icons require it.
The shared root toaster owns all notifications; screens call `toast` from `sonner-native`.

## API and state

Import `apiClient` from `src/lib/apiClient.ts`; its request interceptor is configured
before the client can be used. The optional `token` in AsyncStorage demonstrates bearer
headers; this starter does not implement a login, refresh-token, or secure credential-storage flow.

Query functions consume cancellation signals. Native app-focus and connectivity changes
are bridged to React Query; query screens retain existing content on refresh errors.
Use `useCurrentUser` and `useUserActions` for global user state. Action selection uses
shallow comparison so unrelated state changes do not rerender action-only consumers.

## Commands and validation

| Command                               | Purpose                                           |
| ------------------------------------- | ------------------------------------------------- |
| `yarn start`                          | Start the development server                      |
| `yarn ios` / `yarn android`           | Build and run locally                             |
| `yarn web`                            | Start web development                             |
| `yarn web:build` / `yarn web:preview` | Export / preview web                              |
| `yarn ts:check`                       | Type-check without emitting files                 |
| `yarn lint` / `yarn lint:fix`         | Check / fix lint issues                           |
| `yarn test:ci`                        | Run regression tests once                         |
| `yarn format` / `yarn format:check`   | Format / check formatting                         |
| `yarn update`                         | Check SDK dependency compatibility                |
| `yarn doctor`                         | Run Expo diagnostics                              |
| `yarn clean`                          | Regenerate native projects from app configuration |

Pull requests and pushes to main/master run a frozen-lockfile install, type checking,
lint, regression tests, and web export. Tests cover stable Zustand subscriptions,
input focus/error precedence, and button accessibility/style overrides.

Before a release, test both themes, theme switching with existing screen state,
large text, screen-reader labels, keyboard/safe-area layout, offline/reconnect,
and modal toasts on iOS and Android. JavaScript exports do not replace native builds.

## EAS and app identity

Before using the build/submit scripts:

1. Install EAS CLI (`npm install --global eas-cli`), then run `eas login` and `eas init`.
2. Replace the demo name, slug, scheme, iOS bundle identifier, and Android package in `app.json`.
   `eas init` fills `extra.eas.projectId` for your project.
3. Review icons, splash assets, signing, and store credentials.
4. `yarn devbuild:ios` targets an iOS Simulator. For a physical iPhone, set
   `build.development.ios.simulator` to `false` in `eas.json` and register the device.
5. Use the preview profile for internal builds and the production profile for store builds.

Native permissions, entitlements, and background modes should be added only with the
feature that needs them; the starter does not request location, push, accessory, or Wi-Fi capabilities.

## SDK upgrades

After changing the SDK or native dependencies, regenerate local native projects with
`yarn clean`, then rebuild with `yarn ios` or `yarn android`. This replaces the generated
`ios/` and `android/` folders; preserve manual native changes first. EAS generates them
when absent. Existing development clients must also be rebuilt.

## Author

Created by [Md Muhaiminul](https://www.linkedin.com/in/aargon007).
