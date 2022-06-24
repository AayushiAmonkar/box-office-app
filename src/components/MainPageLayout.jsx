import React from "react";
import Navs from "./Navs";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie and an act?"
      />
      <Navs />
      {children}
    </>
  );
};

export default MainPageLayout;
