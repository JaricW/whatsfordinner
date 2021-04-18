import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const DinnerButton = (props) => {
  const { arrayOfDinners, forDinnerTonight, displayDinner } = useContext(
    GlobalContext
  );
  const [dinnerArray] = arrayOfDinners;
  const [dinnerTonight, setDinnerTonight] = forDinnerTonight;
  const [showDinner, setShowDinner] = displayDinner;

  const showMeDinner = () => {
    const dinner = Math.floor(Math.random() * dinnerArray.length);
    setDinnerTonight(dinnerArray[dinner]);
    setShowDinner(true);
  };

  return (
    <button onClick={showMeDinner} style={{ height: "200px", width: "200px" }}>
      <h1>What's For Dinner?</h1>
    </button>
  );
};

export default DinnerButton;
