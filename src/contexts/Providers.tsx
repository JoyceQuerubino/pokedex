import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
