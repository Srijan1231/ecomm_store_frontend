import React from "react";

import { Navbar } from "../../components/shared/Navbar";
import { Tab } from "../../components/shared/Tab";
import { Collection } from "../../components/layout/Collection";

import { Footer } from "../../components/shared/Footer";
import { ProductList } from "../../components/shared/ProductList";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Tab />
      <Collection />
      <ProductList />
      <Footer />
    </>
  );
};
