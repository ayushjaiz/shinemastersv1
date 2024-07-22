import React, { useState } from "react";
import Header from "../../components/Header";
import MainInfo from "./MainInfo";
// import BookingSection from "./BookingSection";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DatePickerDemo } from "./StartDatePicker";
import DatePicker from "react-datepicker";

export const DetailsPage = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl pt-16">
        <MainInfo />


        {/* <DatePickerDemo /> */}
      </div>
    </>
  );
};
