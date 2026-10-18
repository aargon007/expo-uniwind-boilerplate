import { fireEvent, render, screen } from '@testing-library/react-native';
import { expect, test } from '@jest/globals';
import Input from '../Input';

test('focus remains visible and validation errors take precedence', async () => {
    const view = await render(<Input label="Email" />);
    const input = screen.getByLabelText('Email');
    const borderClasses = () => screen.getByLabelText('Email').parent?.props.className.split(' ');

    expect(borderClasses()).toContain('border-border');
    await fireEvent(input, 'focus', { nativeEvent: {} });
    expect(borderClasses()).toContain('border-primary');
    expect(borderClasses()).not.toContain('border-border');

    await view.rerender(<Input label="Email" error="Enter a valid email" />);
    expect(borderClasses()).toContain('border-error');
    expect(borderClasses()).not.toContain('border-primary');

    await fireEvent(screen.getByLabelText('Email'), 'blur', { nativeEvent: {} });
    await view.rerender(<Input label="Email" />);
    expect(borderClasses()).toContain('border-border');
});
