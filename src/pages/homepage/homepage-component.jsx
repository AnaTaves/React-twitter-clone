import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar-component";
import Feed from "../../components/Feed/Feed-component";
import Widgets from "../../components/Widgets/Widgets-component";

const Homepage = () => {
  return (
    <>
      <Sidebar />
      <Feed />
      <Widgets />
    </>
  );
};

export default Homepage;
