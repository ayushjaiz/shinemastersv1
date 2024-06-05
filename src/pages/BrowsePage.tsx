import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CategoriesSection from "../components/CategoriesSection";
import SuggestedSection, { ProfileType } from "../components/ProfileList";

const BrowsePage = () => {
  return (
    <>
      <Header />
      <div className="px-8">
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
