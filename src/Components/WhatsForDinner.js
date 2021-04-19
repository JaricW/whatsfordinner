import React, { useEffect, useContext, useState } from "react";

import DinnerButton from "./DinnerButton";
import Preferences from "./Preferences";
import TonightsDinner from "./TonightsDinner";

import allStyles from "../Styles/AllStyles";

import { GlobalContext } from "../Context/GlobalState";

const WhatsForDinner = () => {
  const { arrayOfDinners, displayDinner } = useContext(GlobalContext);
  const [showDinner, setShowDinner] = displayDinner;
  const [dinnerArray, setDinnerArray] = arrayOfDinners;

  useEffect(() => {
    fetch("data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setDinnerArray(data.dinners);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <main
        style={allStyles.mainLayout}
      >
        <div
          style={allStyles.containerLayout}
        >
          <DinnerButton />
          <Preferences />
        </div>
        {showDinner && <TonightsDinner />}
      </main>
    </>
  );
};

export default WhatsForDinner;
