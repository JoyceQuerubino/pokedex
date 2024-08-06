import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

export const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={{...theme}}>
      <NavigationContainer>{component}</NavigationContainer>
    </ThemeProvider>
  );
};
