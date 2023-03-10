import React, { Children, useContext, useState } from "react";
import {colors } from '../Color';

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
    const [isLightTheme, setLightTheme]  = useState(true)
    const toggleTheme =() => setLightTheme(previousState => !previousState)
    const theme = {
        colors: isLightTheme ? colors.light : colors.dark,
        toggleTheme
    };
    return(
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};
export default ThemeProvider;
