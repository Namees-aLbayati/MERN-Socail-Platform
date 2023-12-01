// ThemeProvider.js
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    /* Add other global styles */
  }
`;

const lightTheme = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  /* Add other light theme variables */
};

const darkTheme = {
  backgroundColor: '#1a1a1a',
  textColor: '#ffffff',
  /* Add other dark theme variables */
};

const ThemeProvider = ({ children, isDarkMode }) => {
  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
