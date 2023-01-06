import React, { useState } from "react";

export const themes = {
  light: {
    foreground: "#fafafa",
    background: "#ffffff",
    lightFont: "#716E8B",
    primaryFont: "#22202D",
    secondaryFont: "#393649",
    purpleFont: "#442ECF",
    buttonFont: "#442ECF",
    lightPurple: "#9490B1",
    greenFont: "#36D763",
    redFont: "#EA2664",
  },
  dark: {
    foreground: "#2a2a2a",
    background: "#222222",
    lightFont: "#B4B0D1",
    primaryFont: "#ffffff",
    buttonFont: "#ffffff",
    secondaryFont: "#F5F4FA",
    purpleFont: "#442ECF",
    lightPurple: "#9490B1",
    greenFont: "#36D763",
    redFont: "#EA2664",
  },
};

export const themeContext = React.createContext();

let defaultTheme;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  // defaultTheme = true;
  defaultTheme = false;
} else {
  defaultTheme = false;
}

export const ThemeProvider = (props) => {
  const [isDark, setIsDark] = useState(defaultTheme);

  let theme;
  if (isDark) {
    theme = themes.dark;
  } else {
    theme = themes.light;
  }

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <themeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark,
      }}
    >
      {props.children}
    </themeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
