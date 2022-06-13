import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";

//import Rotas from "./Rotas";
//import Post from "./pages/Post/Post";

import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
//import LoginPage from "./views/Login/LoginPage";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  /*const option = {
    year: "numeric",
    month: "long" || "short" || "numeric",
    weekday: "long" || "short",
    day: "numeric"
    // hour: 'numeric',
    //minute: 'numeric',
    //second: 'numeric',
    //era: ('long' || 'short'),
    //timeZoneName: ('long' || 'short')
  }; 
  const locale = "pt-br";
  //new Date().toLocaleDateString(locale, option); */
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Agência Viagens</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>
          <Layout>
            {/* <Rotas /> */}

            <div className="data-hora">
              {/* {new Date().toLocaleDateString(locale, option)} */}
              {/*{new Date().toLocaleTimeString()} */}
            </div>
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
