import { StatusBar as NativeStatusBar } from 'react-native';
import { useUniwind } from 'uniwind';

const StatusBar = () => {
    const { theme } = useUniwind();
    return <NativeStatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />;
};

export default StatusBar;
