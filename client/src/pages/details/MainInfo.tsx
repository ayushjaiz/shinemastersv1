import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Share, User } from "lucide-react";
import React from "react";

const MainInfo = () => {
  return (
    <div className="md:flex gap-4 items-center">
      <img
        src="https://letsenhance.io/static/5bb3254cad4372d876b9c54149710989/db972/ForPrintingBefore.avif"
        alt="name"
        width={150}
        height={200}
        className="rounded-full h-[150px]
        object-cover"
      />
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col mt-4 md:mt-0 items-baseline gap-3">
          <h2
            className="text-primary p-1 px-3
        text-lg 
        bg-purple-100 rounded-full"
          >
            Cleaner
          </h2>
          <h2 className="text-[40px] font-bold">Ayush</h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <MapPin /> 1/496, Krishna Nagar Gallamandi
          </h2>
          <h2 className="flex gap-2 text-lg text-gray-500">
            <Mail />
            ayush45aj@gmail.com
          </h2>
        </div>
        <div className="flex flex-col gap-5 items-end">
          <Button>
            <Share />
          </Button>
          <h2 className="flex gap-2 text-xl text-primary">
            <User /> {"7705074362"}{" "}
          </h2>
          <h2 className="flex gap-2 text-xl text-gray-500">
            <Clock /> Available 8:00 AM to 10:PM{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
