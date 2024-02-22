import React, { useState, createContext } from "react";
import Nav from "./Components/Nav";

export const GlobalData = createContext();

const App = () => {
  const fontStyle = { color: "green", fontSize: "28px", align: "center" };
  const [style, setStyle] = useState(fontStyle);
  return (
    <GlobalData.Provider value={{ appStyle: style}}>
      <div>
        <Nav />
      </div>
    </GlobalData.Provider>
  );
};

export default App;
