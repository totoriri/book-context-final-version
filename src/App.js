import React from "react";
import MainPage from "./components/MainPage"
import { ThemeProvider } from "styled-components";
import { SiteThemeContext } from './context/SiteThemeContext';

const App = () => {
    return (
      <SiteThemeContext.Consumer>
        {({ theme,handleThemeChange }) => (
          <ThemeProvider theme={theme}>
            <MainPage theme={theme}/>
          </ThemeProvider>
        )}
      </SiteThemeContext.Consumer>
    );
}

export default App;
