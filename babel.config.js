module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'react-native-unistyles/plugin',
                {
                    root: 'app',
                },
            ],
            '@babel/plugin-proposal-export-namespace-from',
            'react-native-worklets/plugin',
        ],
    };
};
