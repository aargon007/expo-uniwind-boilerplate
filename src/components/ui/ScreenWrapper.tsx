import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
    children: React.ReactNode;
    withBottomInset?: boolean;
}

const ScreenWrapper = ({
    children,
    withBottomInset = true,
}: ScreenWrapperProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            className="bg-bg"
            style={{
                flex: 1,
                paddingTop: insets.top,
                paddingBottom: withBottomInset ? insets.bottom : 0,
            }}
        >
            {children}
        </View>
    );
};

export default ScreenWrapper;
