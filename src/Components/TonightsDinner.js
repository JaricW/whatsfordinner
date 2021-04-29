import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const TonightsDinner = () => {
  const { forDinnerTonight, displayDinner } = useContext(GlobalContext);
  const [dinnerTonight] = forDinnerTonight;
  const [showDinner, setShowDinner] = displayDinner;

  const goBack = () => {
    setShowDinner(false);
  };
  return (
    <>
      <div className="absolute h-5/6 w-10/12 flex flex-col justify-around items-center text-center bg-turqouise rounded-2xl"
  >
    
        <h2 className="text-2xl p-4 text-lightYellow text-shadow-sm">{dinnerTonight.name}</h2>
        <img
         className="w-5/6 sm:w-3/6"
          src={dinnerTonight.img}
          alt={dinnerTonight.imgDescription}
        />
        <p className="italic text-lightYellow p-2 text-lg">{dinnerTonight.intro}</p>
        <p>
          <a href={dinnerTonight.link} target="_blank"
          className="underline text-blue-800"
          >
            Find a recipe here
          </a>
        </p>

        <button className="flex items-center justify-center border-solid border-current border-2 rounded-2xl p-2 text-center
          text-lightOrange bg-lightYellow  shadow-2xl
          hover:text-lightYellow hover:bg-lightOrange
          focus:text-lightYellow focus:bg-lightOrange focus:outline-none" onClick={goBack}>
          Not Tonight!
        </button>
      </div>
    </>
  );
};

export default TonightsDinner;
