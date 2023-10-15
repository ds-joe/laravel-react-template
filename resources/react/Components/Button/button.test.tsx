import { render, cleanup } from '@testing-library/react';
import { test, expect, afterEach } from "vitest";
import Button from '.';
import '@testing-library/jest-dom/vitest';

// runs a cleanup after each test case (e.g. clearing jsdom).
afterEach(() => {
  cleanup();
});

test('Button renders correctly', () => {
  const page = render(<Button />);
  const pageElement = page.getByTestId('button');
  expect(pageElement).toHaveClass("btn");
})
