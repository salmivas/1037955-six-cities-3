import React from "react";
import Main from "../main/main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({offersCount, offers}) => {
  return (
    <Main
      offersCount = {offersCount}
      offers = {offers}
    />
  );
};

export default App;
