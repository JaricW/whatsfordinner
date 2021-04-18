import React from "react";

const DinnerButton = (props) => {
    return(
    <button onClick={props.showMeDinner} style={{height: "200px", width: "200px"}}><h1>What's For Dinner?</h1></button>
    )
}

export default DinnerButton;