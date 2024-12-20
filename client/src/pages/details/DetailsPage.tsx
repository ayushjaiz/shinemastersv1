import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MainInfo from "./MainInfo";
import { Clock, Mail, MapPin, Share, User } from "lucide-react";
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
import { useParams } from "react-router-dom";
import { Worker } from "../browse/BrowsePage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/appStore";
import toast, { Toaster } from "react-hot-toast";

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const [worker, setWorker] = useState<Worker | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [availability, setAvailability] = useState<boolean>(true);

  const token = useSelector((state: RootState) => state.auth.token);
  console.log("token" + token);

  const fetchWorkerDetails = async (id: string) => {
    try {

      const response = await fetch(`http://localhost:4000/api/worker/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Worker = await response.json();
      setWorker(data);
      setAvailability(worker?.availability ?? true);

    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchWorkerDetails(id);
    }
  }, [isBooking, id]);

  const handleBooking = async (workerId: number) => {
    console.log('Booking started here');

    try {
      setIsBooking(true);

      await toast.promise(
        fetch(`http://localhost:4000/api/booking`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ workerId }),
        }).then(async (response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          return data;
        }),
        {
          loading: "Submitting...",
          success: "Booking done successfully! Go to My Bookings",
          error: "An unknown error occurred",
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsBooking(false);
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!worker) {
    return <div>No worker found</div>;
  }

  console.log(worker.availability);

  // const [startDate, setStartDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl pt-16">
        <div className="md:flex gap-4 items-center">
          <img
            src={worker.imageUrl}
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
                {worker.workerType}
              </h2>
              <h2 className="text-[40px] font-bold">{worker.user.name}</h2>
              <h2 className="flex gap-2 text-lg text-gray-500">
                <MapPin /> {worker.location}
              </h2>
              <h2 className="flex gap-2 text-lg text-gray-500">
                <Mail />
                {worker.user.email}
              </h2>
            </div>
            <div className="flex flex-col gap-5 items-end">
              {worker.availability ? (
                <Button onClick={() => handleBooking(worker.workerId)}>
                  Book Now
                </Button>
              ) : (
                <Button>Unavaliable</Button>
              )}

              <h2 className="flex gap-2 text-xl text-primary">
                <User /> {"7705074362"}{" "}
              </h2>
              <h2 className="flex gap-2 text-xl text-gray-500">
                <Clock /> Available 8:00 AM to 10:PM{" "}
              </h2>
            </div>
          </div>
        </div>

        {/* <DatePickerDemo /> */}
      </div>
      <Toaster />
    </>
  );
};
