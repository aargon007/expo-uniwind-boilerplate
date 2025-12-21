import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// const cn = (...classes: Array<string | undefined | null | false>) =>
//     classes.filter(Boolean).join(' ');