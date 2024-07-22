import React from "react";
import Header from "../../components/Header";
import ProfileCard from "../browse/ProfileCard";
import { ProfileType } from "../browse/ProfileList";

const CategoryPage = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-screen-xl my-16">
        <div className="flex items-center gap-3">
          <div className="h-10 w-5 bg-primary rounded-sm max-2xl:h-8 max-2xl:w-4"></div>
          <h2 className="text-lg text-primary font-bold capitalize max-2xl:text-base __className_153980">
            Cleaner
          </h2>
        </div>
        <div className="flex gap-10 mt-10">
          <ProfileCard displayType={true} />
          <ProfileCard displayType={true} />
          <ProfileCard displayType={true} />
          <ProfileCard displayType={true} />
          <ProfileCard displayType={true} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
