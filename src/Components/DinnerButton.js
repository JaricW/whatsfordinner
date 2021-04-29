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
    <button
      className="h-60 w-60 flex items-center justify-center border-solid border-current border-4 rounded-2xl p-6 text-center
       text-lightYellow bg-lightOrange shadow-2xl
       hover:text-lightOrange hover:bg-lightYellow
       focus:outline-none"
      onClick={showMeDinner}
    >
      <h1>What's For Dinner?</h1>
    </button>
  );
};

export default DinnerButton;
