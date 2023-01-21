"use client"

import { theme } from "./styles/theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

const Provider = ({ children }: { children: React.ReactNode}) => {
    return (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
        )
}

export default Provider;