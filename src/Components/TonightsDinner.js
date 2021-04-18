import React from "react";

const TonightsDinner = (props) => {
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
      <h3>{props.dinnerTonight.name}</h3>
    
    <button onClick={props.goBack}>Not Tonight!</button>
    </div>
    </>
  );
};

export default TonightsDinner;
