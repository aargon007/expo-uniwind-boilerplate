import { Platform } from "react-native";

export const TAB_ICON_SIZE = 22;
export const TAB_BAR_HEIGHT = 55;
export const TAB_BAR_IOS_INSET_FLOOR = 0;
export const TAB_BAR_ANDROID_INSET_FLOOR = 0;

type TabBarHeightOptions = {
    baseHeight?: number;
    bottomInset?: number;
};

// React Navigation already handles this by default, but this helper is useful
// when you intentionally provide a custom tabBarStyle.height.
export const getTabBarHeight = ({
    baseHeight = TAB_BAR_HEIGHT,
    bottomInset = 0,
}: TabBarHeightOptions = {}) => {
    const insetFloor =
        Platform.OS === "ios"
            ? TAB_BAR_IOS_INSET_FLOOR
            : TAB_BAR_ANDROID_INSET_FLOOR;

    const resolvedInset = Platform.OS === "ios"
        ? 10
        : Math.max(bottomInset, insetFloor);

    return baseHeight + resolvedInset;
};
