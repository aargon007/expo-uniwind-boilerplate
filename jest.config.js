module.exports = {
    preset: 'jest-expo',
    watchman: false,
    moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
    testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
