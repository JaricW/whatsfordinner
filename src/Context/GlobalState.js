import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [dinnerArray, setDinnerArray] = useState([]);
  const [showDinner, setShowDinner] = useState(false);
  const [dinnerTonight, setDinnerTonight] = useState(0);
  let vegetarian = false;
  let vegan = false;
  let pescatarian = false;

  return (
    <GlobalContext.Provider
      value={{
        arrayOfDinners: [dinnerArray, setDinnerArray],
        displayDinner: [showDinner, setShowDinner],
        forDinnerTonight: [dinnerTonight, setDinnerTonight],
        vegetarian: [vegetarian],
        vegan: [vegan],
        pescatarian: [pescatarian],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
