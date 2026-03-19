import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainTabsParamList = {
    Home: undefined;
    Profile: undefined;
};

export type RootStackParamList = {
    MainTabs: NavigatorScreenParams<MainTabsParamList>;
    TextScreen: undefined;
    QueryScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabsParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<MainTabsParamList, T>,
        NativeStackScreenProps<RootStackParamList>
    >;
