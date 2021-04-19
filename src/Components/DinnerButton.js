import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import allStyles from "../Styles/AllStyles";

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
    <div className="button" onClick={showMeDinner} style={allStyles.dinnerButton}>
      <h1>What's For Dinner?</h1>
    </div>
  );
};

export default DinnerButton;
