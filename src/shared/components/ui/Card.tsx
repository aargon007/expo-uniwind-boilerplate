import React from "react";
import { View, type ViewProps } from "react-native";
import { cn } from "@/src/shared/utils/cn";

type CardVariant = "default" | "primary" | "subtle";
type CardRadius = "lg" | "xl" | "2xl" | "3xl";

interface CardProps extends ViewProps {
    children: React.ReactNode;
    variant?: CardVariant;
    radius?: CardRadius;
    padded?: boolean;
    className?: string;
}

const variantClasses: Record<CardVariant, string> = {
    default: "border border-border bg-card",
    primary: "bg-primary",
    subtle: "bg-bg-secondary",
};

const radiusClasses: Record<CardRadius, string> = {
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
};

const Card = ({
    children,
    variant = "default",
    radius = "2xl",
    padded = true,
    className,
    ...viewProps
}: CardProps) => {
    return (
        <View
            {...viewProps}
            className={cn(
                variantClasses[variant],
                radiusClasses[radius],
                padded && "p-4",
                className
            )}
        >
            {children}
        </View>
    );
};

export default Card;
