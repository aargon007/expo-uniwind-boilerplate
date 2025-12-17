// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

const config = getDefaultConfig(__dirname);

// your metro modifications

module.exports = withUniwindConfig(config, {
    // relative path to your global.css file (from previous step)
    cssEntryFile: './global.css',
    // (optional) path where we gonna auto-generate typings
    // defaults to project's root
    dtsFile: './src/types/uniwind.d.ts',
});