const { jest } = require('@jest/globals');

// Unit tests verify behavior independently of Metro's CSS compilation.
jest.mock('uniwind', () => ({
    useResolveClassNames: jest.fn(() => ({})),
    useUniwind: jest.fn(() => ({ theme: 'light' })),
}));
