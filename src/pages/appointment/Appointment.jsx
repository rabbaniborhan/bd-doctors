import { useContext, useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { AppContext } from "./../../context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const fatchDocInfo = async () => {
    setDocInfo(doctors?.find((doc) => doc._id === docId));
  };
  useEffect(() => {
    fatchDocInfo();
  }, [doctors, docId]);

  function getSevenDay() {
    const datesArray = [];
    const currentDate = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      const dayName = daysOfWeek[nextDate.getDay()];
      const dayNumber = nextDate.getDate();
      datesArray.push({ date: dayNumber, dayName: dayName });
    }

    return datesArray;
  }

  // Example usage
  const nextSevenDays = getSevenDay();
  console.log("Next 7 Days as Objects:", nextSevenDays);

  return (
    <div className="mt-20">
      <div className="flex h-80 overflow-hidden px-10 items-center gap-5">
        <div className="w-1/4 rounded-lg h-full  bg-primary-light">
          <img className="h-full" src={docInfo?.image} alt="" />
        </div>
        <div className="w-3/4 p-4 rounded-md  border h-full ">
          <div className="flex text-2xl font-semibold items-center gap-2">
            {" "}
            <p>{docInfo?.name}</p>
            <MdVerified color="#32abbf" />
          </div>
          <div className="mt-2">
            <p className="text-gray-500">
              {docInfo?.degree} - {docInfo?.speciality}{" "}
              <span className="rounded-full border ms-2 py-1 px-2">
                {docInfo?.experience}
              </span>
            </p>
            <p className="flex mt-6 text-lg items-center">
              About <TbInfoSquareRounded />
            </p>
            <p className="mt-5 text-gray-500">{docInfo?.about}</p>
            <p className="flex text-gray-500 items-center mt-6">
              Appoinment Fees:
              <BiDollar color="black" />
              <span className="text-black">{docInfo?.fees}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex px-10 gap-5 mt-16 ">
        <div className="w-1/4"></div>
        <div className="w-3/4">
          <p className="text-xl font-semibold">Booking slots</p>
          <div className="flex items-center  gap-10 mt-10">
            {nextSevenDays.map((day, index) => (
              <div
                className="border rounded-full hover:bg-primary-deep hover:text-white transition-all duration-300 cursor-pointer w-16 py-5 text-lg font-semibold text-center"
                key={index}
              >
                <p>{day.dayName}</p>
                <p> {day.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
