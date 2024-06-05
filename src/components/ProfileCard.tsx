import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ProfileCardProps {
  displayType: Boolean;
}

const ProfileCard = ({ displayType }: ProfileCardProps) => {
  return (
    <div className="w-56">
      <div className="flex flex-col items-center justify-center h-60 w-56 bg-[#f5f5f5]">
        ProfileCard
      </div>
      <div className="pt-2  flex justify-between">
        <div className="text-xl">Ayush Jaiswal</div>

        <div className="flex flex-row items-center justify-center gap-1">
          <FontAwesomeIcon
            className=" text-gray-500 dark:text-gray-300"
            icon={faStar}
          />
          <div> 5.0</div>
        </div>
      </div>
      {displayType == true && <div className="text-primary ">Sweeper</div>}{" "}
    </div>
  );
};

export default ProfileCard;
