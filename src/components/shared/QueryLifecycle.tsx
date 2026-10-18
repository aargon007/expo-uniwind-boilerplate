import { useEffect } from 'react';
import { AppState, Platform } from 'react-native';
import * as Network from 'expo-network';
import { focusManager, onlineManager } from '@tanstack/react-query';

/** Browser events remain managed by React Query; native events need a bridge. */
const QueryLifecycle = () => {
    useEffect(() => {
        if (Platform.OS === 'web') return;

        focusManager.setFocused(AppState.currentState === 'active');
        const appSubscription = AppState.addEventListener('change', state => {
            focusManager.setFocused(state === 'active');
        });

        onlineManager.setEventListener(setOnline => {
            let disposed = false;
            let receivedEvent = false;
            const update = (state: Network.NetworkState) => {
                // Unknown reachability should not prevent requests.
                setOnline(state.isConnected !== false && state.isInternetReachable !== false);
            };
            const subscription = Network.addNetworkStateListener(state => {
                receivedEvent = true;
                update(state);
            });
            Network.getNetworkStateAsync()
                .then(state => {
                    if (!disposed && !receivedEvent) update(state);
                })
                .catch(() => {
                    /* Keep the default online state when detection fails. */
                });

            return () => {
                disposed = true;
                subscription.remove();
            };
        });

        return () => {
            appSubscription.remove();
            focusManager.setFocused(undefined);
            onlineManager.setEventListener(() => () => {});
        };
    }, []);

    return null;
};

export default QueryLifecycle;
