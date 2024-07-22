import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from "./BookingHistoryList";
import Header from "../../components/Header";

const BookingPage = () => {
  return (
    <>
      <Header />
      <div className="my-10 mx-5 md:mx-36">
        <h2 className="font-bold text-[20px] my-2">My Bookings</h2>
        <Tabs defaultValue="booked" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="booked">Booked</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="booked">
            <BookingHistoryList />
          </TabsContent>
          <TabsContent value="completed">
            <BookingHistoryList
            // bookingHistory={filterData("completed")}
            // type="completed"
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default BookingPage;
