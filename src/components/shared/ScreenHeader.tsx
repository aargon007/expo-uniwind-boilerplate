import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useRootNavigation } from "@/src/navigation/hooks";
import Icon from "../ui/Icon";
import Text from "../ui/Text";

const ScreenHeader = ({ title }: { title?: string }) => {
    const { goBack } = useRootNavigation();

    return (
        <View className="flex-row items-center justify-between px-4 pb-2">
            <TouchableOpacity
                activeOpacity={0.8}
                className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                onPress={goBack}
            >
                <Icon name="chevron-back" size={20} textClassName="text-text" />
            </TouchableOpacity>

            <Text className="flex-1 text-center" weight="semibold">
                {title}
            </Text>

            <View className="w-9" />
        </View>
    );
};

export default ScreenHeader;
