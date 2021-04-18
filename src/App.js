import React from "react";
import "./App.css";

import { GlobalProvider } from "./Context/GlobalState";

import WhatsForDinner from "./Components/WhatsForDinner";

function App() {
  return (
    <GlobalProvider>
      <WhatsForDinner />
    </GlobalProvider>
  );
}

export default App;
