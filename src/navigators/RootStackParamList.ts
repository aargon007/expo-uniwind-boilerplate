import type { NavigatorScreenParams } from "@react-navigation/native";
import type { BottomTabParamList } from "./BottomTabParamList";

export type ScreenNames = ["MainTabs", "TextScreen"];

export type RootStackParamList = {
    MainTabs: NavigatorScreenParams<BottomTabParamList>;
    TextScreen: undefined;
    QueryScreen: undefined;
    StateScreen: undefined;
};
