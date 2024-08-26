"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <div className="flex items-center gap-2">
      {currentTheme !== "light" && (
        <button
          className="flex flex-row gap-2 items-center font-spaceMono"
          onClick={() => handleThemeChange("light")}
        >
          Light
          <img src="icon-sun.svg" alt="sun icon" />
        </button>
      )}
      {currentTheme !== "dark" && (
        <button
          className="flex flex-row gap-2 items-center font-spaceMono"
          onClick={() => handleThemeChange("dark")}
        >
          Dark
          <img src="icon-moon.svg" alt="moon icon" />
        </button>
      )}
    </div>
  );
}
