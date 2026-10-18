import { render, screen } from '@testing-library/react-native';
import { expect, test } from '@jest/globals';
import Button from '../Button';

test('loading announces busy and prevents interaction while preserving the label', async () => {
    await render(<Button label="Save" isLoading />);
    expect(screen.getByRole('button', { name: 'Save', busy: true, disabled: true })).toBeTruthy();
});

test('style overrides and content container styles are both preserved', async () => {
    await render(<Button label="Save" contentContainerStyle={{ marginTop: 8 }} style={() => ({ marginBottom: 12 })} />);
    expect(screen.getByRole('button', { name: 'Save' })).toHaveStyle({ marginTop: 8, marginBottom: 12 });
});
