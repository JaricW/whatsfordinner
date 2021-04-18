import React from "react";

const Preferences = () => {
    return(
    <>
    <h2>Preferences</h2>
    <div style={{display: "grid", gridTemplateColumns: "50% 50%", gridColumnGap: "10px", gridRowGap: "10px"}}>
    <button>Vegetarian</button>
    <button>Vegan</button>
    <button>Pescatarian</button>
    <button>Omnivore</button>
    </div>
    </>
    )
}

export default Preferences;