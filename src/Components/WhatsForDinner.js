import React, { useEffect, useContext, useState } from "react";

import DinnerButton from "./DinnerButton";
import Preferences from "./Preferences";
import TonightsDinner from "./TonightsDinner";

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
      <main className="h-screen w-full flex flex-col justify-center items-center">
        <div className="h-5/6 w-5/6 rounded-2xl bg-turqouise flex flex-col justify-center items-center">
          <DinnerButton />
          <Preferences />
        </div>
        {showDinner && <TonightsDinner />}
      </main>
    </>
  );
};

export default WhatsForDinner;
