import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "../../hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <button
      type="button"
      className="icon-button"
      aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
    >
      {isDarkTheme ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
