import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import type { RootStackParamList } from "./types";

export type RootNavigation = NavigationProp<RootStackParamList>;

export const useRootNavigation = () => useNavigation<RootNavigation>();
