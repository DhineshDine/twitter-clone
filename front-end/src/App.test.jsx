
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";
import { MemoryRouter } from "react-router-dom";
import { test, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock the useQuery result
vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQuery: vi.fn().mockReturnValue({ data: null, isLoading: false }),
  };
});

test("App component renders Login heading", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const headingElement = screen.getByRole('heading', { name: /Login/i });
  expect(headingElement).toBeInTheDocument();
});