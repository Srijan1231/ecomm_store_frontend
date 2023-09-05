import React from "react";

import { Navbar } from "../../components/shared/Navbar";
import { Tab } from "../../components/shared/Tab";
import { Collection } from "../../components/layout/Collection";

import { ProductCard } from "../../components/shared/ProductCard";
import { Footer } from "../../components/shared/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Tab />
      <Collection />
      <ProductCard />
      <Footer />
    </>
  );
};
