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
      <h2>Preferences</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridColumnGap: "10px",
          gridRowGap: "10px",
        }}
      >
        <button onClick={() => filterMenu("vegetarian")}>Vegetarian</button>
        <button onClick={() => filterMenu("vegan")}>Vegan</button>
        <button onClick={() => filterMenu("pescatarian")}>Pescatarian</button>
        <button onClick={() => filterMenu("omnivore")}>Omnivore</button>
      </div>
    </>
  );
};

export default Preferences;
