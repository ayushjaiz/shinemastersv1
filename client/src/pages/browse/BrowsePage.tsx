import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import CategoriesSection from "./CategoriesSection";
import SuggestedSection, { ProfileType } from "./ProfileList";



const BrowsePage = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl">
        <CategoriesSection />
        <SuggestedSection profileType={ProfileType.Suggested} />
        <SuggestedSection profileType={ProfileType.Garderner} />
        <SuggestedSection profileType={ProfileType.Painter} />
        <SuggestedSection profileType={ProfileType.Sweeper} />
      </div>
    </>
  );
};

export default BrowsePage;
