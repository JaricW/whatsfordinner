const mainLayout = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const containerLayout = {
  height: "80%",
  width: "80%",
  borderRadius: "10px",
  backgroundColor: "#276d6c",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const tdLayout = {
  position: "absolute",
  height: "80%",
  width: "80%",
  borderRadius: "10px",
  backgroundColor: "#276d6c",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const subHeading = {
  color: "#F4AB2E",
  textShadow: "1px 1px black",
  textAlign: "center",
};

const introStyle = { color: "#F4AB2E", fontStyle: "italic" };

const imgSize = { maxHeight: "200px", maxWidth: "60%" };

const dinnerButton = {height: "200px", width: "200px"};

const prefButtonHolder = {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridColumnGap: "10px",
    gridRowGap: "10px",
  }

const allStyles = {
  mainLayout,
  containerLayout,
  tdLayout,
  subHeading,
  imgSize,
  introStyle,
  dinnerButton,
  prefButtonHolder
};

export default allStyles;
