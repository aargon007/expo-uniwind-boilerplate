import React from "react";
import { ActivityIndicator, View } from "react-native";
import Button from "./Button";
import Icon, { type IconName } from "./Icon";
import Text from "./Text";

interface StateViewProps {
    title: string;
    description?: string;
    iconName?: IconName;
    actionLabel?: string;
    onActionPress?: () => void;
    loading?: boolean;
    fullScreen?: boolean;
}

const StateView = ({
    title,
    description,
    iconName,
    actionLabel,
    onActionPress,
    loading = false,
    fullScreen = false,
}: StateViewProps) => {
    return (
        <View
            className={`items-center justify-center gap-3 px-6 ${
                fullScreen ? "flex-1" : "py-10"
            }`}
        >
            {loading ? (
                <ActivityIndicator size="large" />
            ) : iconName ? (
                <View className="h-14 w-14 items-center justify-center rounded-full bg-bg-secondary">
                    <Icon name={iconName} size={24} textClassName="text-text-secondary" />
                </View>
            ) : null}

            <View className="items-center gap-1">
                <Text variant="body" weight="semibold" className="text-center">
                    {title}
                </Text>

                {description ? (
                    <Text variant="body-sm" color="secondary" className="text-center">
                        {description}
                    </Text>
                ) : null}
            </View>

            {actionLabel && onActionPress ? (
                <Button
                    label={actionLabel}
                    onPress={onActionPress}
                    variant="outline"
                    size="sm"
                />
            ) : null}
        </View>
    );
};

export default StateView;
