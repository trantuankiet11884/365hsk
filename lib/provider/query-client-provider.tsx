"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

// Create a client-side QueryClientProvider to wrap the app
export function QueryProvider({ children }: { children: React.ReactNode }) {
  // Initialize QueryClient in a state to ensure it's only created on the client
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Default stale time for queries (5 minutes)
            staleTime: 5 * 60 * 1000,
            // Retry failed queries up to 3 times
            retry: 3,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
