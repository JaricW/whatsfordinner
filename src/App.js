import React, { useState, useEffect } from "react";
import "./App.css";
import DinnerButton from "./Components/DinnerButton";
import Preferences from "./Components/Preferences";
import TonightsDinner from "./Components/TonightsDinner";

function App() {
  const [dinnerArray, setDinnerArray] = useState([]);
  const [showDinner, setShowDinner] = useState(false);
  const [dinnerTonight, setDinnerTonight] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setDinnerArray(data.dinners);
      })
      .catch((error) => console.log(error));
  }, []);

  const showMeDinner = () => {
    const dinner = Math.floor(Math.random() * dinnerArray.length);
    setDinnerTonight(dinnerArray[dinner])
    setShowDinner(true);
  };

  const goBack = () => {setShowDinner(false)};

  return (
    <>
      <main
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DinnerButton showMeDinner={showMeDinner} />
        <Preferences />
        {showDinner && <TonightsDinner dinnerTonight={dinnerTonight} goBack={goBack}/>}
      </main>
    </>
  );
}

export default App;
