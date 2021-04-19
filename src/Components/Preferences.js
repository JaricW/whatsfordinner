import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import allStyles from "../Styles/AllStyles";

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
      <h2 style={allStyles.subHeading}>Preferences</h2>
      <div style={allStyles.prefButtonHolder}>
        <div
          className="buttonSecondary"
          onClick={() => filterMenu("vegetarian")}
        >
          Vegetarian
        </div>
        <div className="buttonSecondary" onClick={() => filterMenu("vegan")}>
          Vegan
        </div>
        <div
          className="buttonSecondary"
          onClick={() => filterMenu("pescatarian")}
        >
          Pescatarian
        </div>
        <div className="buttonSecondary" onClick={() => filterMenu("omnivore")}>
          Omnivore
        </div>
      </div>
    </>
  );
};

export default Preferences;
