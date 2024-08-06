import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

export const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={{ ...theme }}>{component}</ThemeProvider>
  );
};
