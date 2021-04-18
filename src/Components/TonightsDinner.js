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
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          height: "100vh",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <h3>{dinnerTonight.name}</h3>

        <button onClick={goBack}>Not Tonight!</button>
      </div>
    </>
  );
};

export default TonightsDinner;
