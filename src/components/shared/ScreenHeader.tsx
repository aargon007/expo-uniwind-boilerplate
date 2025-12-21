import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigation } from '@/src/navigators/RootNavigator';
import Icon from '../ui/Icon';

const ScreenHeader = ({ title }: { title?: string }) => {
    const { goBack } = useNavigation<StackNavigation>();

    return (
        <View className="flex-row items-center justify-between px-4 pb-2">
            <TouchableOpacity
                onPress={goBack}
                activeOpacity={0.8}
                className="h-10 w-10 rounded-full items-center justify-center bg-card border border-border"
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
                <Icon name="chevron-back" size={20} textClassName='text-text' />
            </TouchableOpacity>

            <Text className="flex-1 text-center text-text text-[17px] font-semibold">
                {title}
            </Text>

            {/* Right spacer to keep title perfectly centered */}
            <View className="w-9" />
        </View>
    );
};

export default ScreenHeader;
