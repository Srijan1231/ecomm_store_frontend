import React from "react";

import { Navbar } from "../../components/shared/Navbar";
import { Tab } from "../../components/shared/Tab";
import { Collection } from "../../components/layout/Collection";
import { Category } from "../../components/shared/Category";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Tab />
      <Collection />
      <Category />
    </>
  );
};
