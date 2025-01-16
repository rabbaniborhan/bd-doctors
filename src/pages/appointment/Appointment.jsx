import { useContext, useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "./../../context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [docInfo, setDocInfo] = useState(null);
  const [relatedDoc, setRelatedDoc] = useState([]);

  const fetchDocInfo = async () => {
    const doctor = doctors?.find((doc) => doc._id === docId);
    setDocInfo(doctor);
  };

  const fetchRelatedDoc = () => {
    if (docInfo) {
      setRelatedDoc(
        doctors?.filter((doc) => doc.speciality === docInfo.speciality)
      );
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      fetchRelatedDoc();
    }
  }, [docInfo, doctors]);

  console.log(relatedDoc);

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

  return (
    <div className="mt-28 px-10">
      <div className="flex h-80 overflow-hidden  items-center gap-5">
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

      <div className="flex  gap-5 mt-16 ">
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

      <div className="mt-16 ">
        <h4 className="text-xl font-semibold text-center">Related Doctors</h4>
        <p className="text-gray-500 text-center mb-16">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 px-6 transition-all duration-500 justify-center items-start">
          {relatedDoc?.map((doctor, index) => (
            <div
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              key={index}
              className="group h-[330px] w-[220px] cursor-pointer bg-white shadow-md rounded-lg hover:shadow-lg"
            >
              <div className="bg-secondary-light overflow-hidden w-full h-4/6">
                <img
                  src={doctor?.image}
                  alt=""
                  className="group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="p-3">
                <p className="text-green-500 flex items-center gap-1 text-left">
                  <GoDotFill /> Available
                </p>
                <h3 className="text-xl font-semibold py-1"> {doctor?.name}</h3>
                <p className="text-sm text-gray-500">{doctor?.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
