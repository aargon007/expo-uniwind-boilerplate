import React from "react";
import { View, type ViewProps } from "react-native";
import { cn } from "@/src/shared/utils/cn";
import Text from "./Text";

interface SectionProps extends ViewProps {
    title?: string;
    description?: string;
    rightSlot?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

const Section = ({
    title,
    description,
    rightSlot,
    children,
    className,
    contentClassName,
    ...viewProps
}: SectionProps) => {
    return (
        <View {...viewProps} className={cn("gap-3", className)}>
            {(title || description || rightSlot) && (
                <View className="flex-row items-start justify-between gap-3">
                    <View className="flex-1 gap-1">
                        {title ? (
                            <Text variant="label" color="secondary">
                                {title}
                            </Text>
                        ) : null}

                        {description ? (
                            <Text variant="body-sm" color="secondary">
                                {description}
                            </Text>
                        ) : null}
                    </View>

                    {rightSlot}
                </View>
            )}

            <View className={contentClassName}>{children}</View>
        </View>
    );
};

export default Section;
