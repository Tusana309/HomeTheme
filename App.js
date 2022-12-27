import React from "react";
import Home from './src/Home';
import ThemeProvider from "./src/theme/ThemeProvider";
const App = () => {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
    
  );
};
export default App;
