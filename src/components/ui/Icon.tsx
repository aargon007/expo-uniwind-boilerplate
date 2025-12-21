import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { withUniwind } from 'uniwind';

// Map tailwind text color classes to the icon `color` style
export const StyledIoniconBase = withUniwind(Ionicons, {
    color: {
        fromClassName: 'textClassName',
        styleProperty: 'color',
    },
});

export type IconName = React.ComponentProps<typeof Ionicons>['name'];

export interface IconProps
    extends Omit<React.ComponentProps<typeof Ionicons>, 'name'> {
    name: IconName;
    /**
     * Tailwind/Uniwind classes that control the icon color, e.g.
     * "text-grey-700 dark:text-white".
     */
    textClassName?: string;
    /**
     * Regular tailwind className for layout (margin, flex, etc.).
     */
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 20, ...rest }) => {
    return <StyledIoniconBase name={name} size={size} {...rest} />;
};

export default Icon;