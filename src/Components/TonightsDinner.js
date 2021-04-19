import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import allStyles from "../Styles/AllStyles";

const TonightsDinner = () => {
  const { forDinnerTonight, displayDinner } = useContext(GlobalContext);
  const [dinnerTonight] = forDinnerTonight;
  const [showDinner, setShowDinner] = displayDinner;

  const goBack = () => {
    setShowDinner(false);
  };
  return (
    <>
      <div style={allStyles.tdLayout}>
        <h2 style={allStyles.subHeading}>{dinnerTonight.name}</h2>
        <img
          style={allStyles.imgSize}
          src={dinnerTonight.img}
          alt={dinnerTonight.imgDescription}
        />
        <p style={allStyles.introStyle}>{dinnerTonight.intro}</p>
        <p>
          <a href={dinnerTonight.link} target="_blank">
            Find a recipe here
          </a>
        </p>

        <div className="buttonSecondary" onClick={goBack}>
          Not Tonight!
        </div>
      </div>
    </>
  );
};

export default TonightsDinner;
