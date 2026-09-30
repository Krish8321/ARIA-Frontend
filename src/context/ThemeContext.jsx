import React, { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('aria-theme', theme); }, [theme]);
  const toggle = () => setTheme(value => value === 'dark' ? 'light' : 'dark');
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
