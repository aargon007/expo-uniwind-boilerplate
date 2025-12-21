import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                flex: 1,
                paddingTop: insets.top,
                paddingBottom: insets.bottom
            }}
            className='bg-bg'
        >
            {/* <StatusBar
                barStyle={UnistylesRuntime.themeName === 'light' ? 'dark-content' : 'light-content'}
                backgroundColor={theme.colors.background}
            /> */}
            
            {children}
        </View>
    )
}

export default ScreenWrapper;