/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ThemeContext = createContext(null);

function applyTheme(theme) {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem("edg-theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getPreferredTheme);
  const transitionFrameRef = useRef(0);

  useLayoutEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem("edg-theme", theme);

    return () => {
      window.cancelAnimationFrame(transitionFrameRef.current);
    };
  }, [theme]);

  function scheduleThemeChange(nextTheme) {
    const root = document.documentElement;

    root.classList.add("theme-switching");
    window.cancelAnimationFrame(transitionFrameRef.current);

    startTransition(() => {
      setTheme(nextTheme);
    });

    transitionFrameRef.current = window.requestAnimationFrame(() => {
      transitionFrameRef.current = window.requestAnimationFrame(() => {
        root.classList.remove("theme-switching");
      });
    });
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleChange(event) {
      const storedTheme = window.localStorage.getItem("edg-theme");

      if (!storedTheme) {
        scheduleThemeChange(event.matches ? "dark" : "light");
      }
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => scheduleThemeChange(theme === "dark" ? "light" : "dark"),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }

  return context;
}
