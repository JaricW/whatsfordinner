import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Preferences = (props) => {
  const { value, arrayOfDinners } = useContext(GlobalContext);
  let vegetarian = value;
  let vegan = value;
  let pescatarian = value;
  const [dinnerArray, setDinnerArray] = arrayOfDinners;

  const filterMenu = (type) => {
    switch (type) {
      case "vegetarian":
        vegetarian = true;
        break;
      case "vegan":
        vegan = true;
        break;
      case "pescatarian":
        pescatarian = true;
        break;
      default:
        return;
    }
    resetDinnerArray();
  };

  const resetDinnerArray = () => {
    fetch("data.json")
      .then((resp) => resp.json())
      .then((data) => {
        let allDinners = data.dinners;
        checkPrefernces(allDinners);
      })
      .catch((error) => console.log(error));
  };

  const checkPrefernces = (allDinners) => {
    switch (true) {
      case vegetarian:
        setDinnerArray(allDinners.filter((dinner) => dinner.vegetarian));
        break;
      case vegan:
        setDinnerArray(allDinners.filter((dinner) => dinner.vegan));
        break;
      case pescatarian:
        setDinnerArray(allDinners.filter((dinner) => dinner.pescatarian));
        break;
      default:
        setDinnerArray(allDinners);
    }
  };

  return (
    <>
      <h2 className="text-2xl p-4 text-yellow-500 text-shadow-xl">
        Preferences
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <button
          className="flex items-center justify-center border-solid border-current border-2 rounded-2xl p-2 text-center
          text-lightOrange bg-lightYellow shadow-2xl
          hover:text-lightYellow hover:bg-lightOrange
          focus:text-lightYellow focus:bg-lightOrange focus:outline-none"
          onClick={() => filterMenu("vegetarian")}
        >
          Vegetarian
        </button>
        <button
          className="flex items-center justify-center border-solid border-current border-2 rounded-2xl p-2 text-center
           text-lightOrange bg-lightYellow shadow-2xl
           hover:text-lightYellow hover:bg-lightOrange
           focus:text-lightYellow focus:bg-lightOrange focus:outline-none"
          onClick={() => filterMenu("vegan")}
        >
          Vegan
        </button>
        <button
          className="flex items-center justify-center border-solid border-current border-2 rounded-2xl p-2 text-center
          text-lightOrange bg-lightYellow shadow-2xl
          hover:text-lightYellow hover:bg-lightOrange
          focus:text-lightYellow focus:bg-lightOrange focus:outline-none"
          onClick={() => filterMenu("pescatarian")}
        >
          Pescatarian
        </button>
        <button
          className="flex items-center justify-center border-solid border-current border-2 rounded-2xl p-2 text-center
          text-lightOrange bg-lightYellow shadow-2xl
          hover:text-lightYellow hover:bg-lightOrange
          focus:text-lightYellow focus:bg-lightOrange focus:outline-none"
          onClick={() => filterMenu("omnivore")}
        >
          Omnivore
        </button>
      </div>
    </>
  );
};

export default Preferences;
