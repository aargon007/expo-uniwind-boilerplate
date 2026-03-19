import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { withUniwind } from "uniwind";

export const StyledIoniconBase = withUniwind(Ionicons, {
    color: {
        fromClassName: "textClassName",
        styleProperty: "color",
    },
});

export type IconName = React.ComponentProps<typeof Ionicons>["name"];

export interface IconProps
    extends Omit<React.ComponentProps<typeof Ionicons>, "name"> {
    name: IconName;
    textClassName?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 20, ...rest }) => {
    return <StyledIoniconBase name={name} size={size} {...rest} />;
};

export default Icon;
