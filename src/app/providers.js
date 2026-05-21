'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"        // Default dark mode (tumhara pasand)
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}