import { test, expect } from 'vitest';
import { transformer } from '../stringUtils';

test('transforms empty string to empty', () => {
  expect(transformer('')).toBe('');
});

test('transforms lowercase to uppercase', () => {
  expect(transformer('test')).toBe('TEST');
});

test('handles special characters correctly', () => {
  expect(transformer('#$%^')).toBe('#$%^');
});
